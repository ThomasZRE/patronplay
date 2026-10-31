export const BUSINESS_TIMEZONE = 'America/Bogota'

export const EXPIRATION_DAYS = 30

type ZonedParts = {
  year: number
  month: number
  day: number
  hour: number
  minute: number
  second: number
}

function toDate(value: string | Date | number): Date {
  return value instanceof Date ? value : new Date(value)
}

function partsInTimeZone(instant: Date, timeZone: string): ZonedParts {
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  const get = (type: Intl.DateTimeFormatPartTypes): number => {
    const part = fmt.formatToParts(instant).find((p) => p.type === type)
    return part ? Number(part.value) : 0
  }

  return {
    year: get('year'),
    month: get('month'),
    day: get('day'),
    hour: get('hour'),
    minute: get('minute'),
    second: get('second'),
  }
}

function offsetMsAt(instant: Date, timeZone: string): number {
  const p = partsInTimeZone(instant, timeZone)
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second)
  return asUtc - instant.getTime()
}

function fromPartsInTimeZone(p: ZonedParts, timeZone: string): Date {
  const naive = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second)
  let instant = new Date(naive - offsetMsAt(new Date(naive), timeZone))
  instant = new Date(naive - offsetMsAt(instant, timeZone))
  return instant
}

/** Adds calendar days preserving the wall-clock time in `timeZone`. */
export function addDaysInTimeZone(
  value: string | Date | number,
  days: number,
  timeZone: string = BUSINESS_TIMEZONE,
): Date {
  const p = partsInTimeZone(toDate(value), timeZone)
  const calendar = new Date(Date.UTC(p.year, p.month - 1, p.day))
  calendar.setUTCDate(calendar.getUTCDate() + days)

  return fromPartsInTimeZone(
    {
      ...p,
      year: calendar.getUTCFullYear(),
      month: calendar.getUTCMonth() + 1,
      day: calendar.getUTCDate(),
    },
    timeZone,
  )
}

/** `dd/mm/yyyy` as seen in Bogotá. */
export function formatDate(
  value: string | Date | number,
  options: Intl.DateTimeFormatOptions = {},
): string {
  return new Intl.DateTimeFormat('es-CO', {
    timeZone: BUSINESS_TIMEZONE,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    ...options,
  }).format(toDate(value))
}

/** Date + time as seen in Bogotá (24h). */
export function formatDateTime(value: string | Date | number): string {
  return new Intl.DateTimeFormat('es-CO', {
    timeZone: BUSINESS_TIMEZONE,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(toDate(value))
}

/** Expiration shown to the customer: purchase instant + 30 calendar days in Bogotá. */
export function expirationFrom(purchaseDate: string | Date | number): Date {
  return addDaysInTimeZone(purchaseDate, EXPIRATION_DAYS)
}
