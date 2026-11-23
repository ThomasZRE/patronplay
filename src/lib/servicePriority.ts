type ServiceLike = { service?: string | null };

const readServiceName = (service: unknown): string | null | undefined =>
  (service as ServiceLike | null | undefined)?.service;

/**
 * Returns a copy of `services` with the ones named in `priority` moved to the
 * front, ordered as they appear in `priority`.
 *
 * Services not listed in `priority` keep their original order (the CMS
 * `createdAt` sort coming from the load function), and ties inside the priority
 * group also keep their original order because `Array.prototype.sort` is stable.
 *
 * Matching is case- and whitespace-insensitive, so a CMS value like
 * "Capcut Pro" still matches a priority entry written as "CapCut Pro".
 *
 * The input array is never mutated.
 *
 * @param services  Documents coming from the CMS.
 * @param priority  Service names to show first, highest priority first.
 * @param getName   How to read the service name from a document; defaults to
 *                  the `service` field used by the `services` collection.
 */
export function prioritizeServices<T>(
  services: readonly T[],
  priority: readonly string[],
  getName: (service: T) => string | null | undefined = readServiceName as (
    service: T,
  ) => string | null | undefined,
): T[] {
  const normalize = (name?: string | null): string => (name ?? '').trim().toLowerCase();

  const rank = new Map(priority.map((name, index) => [normalize(name), index]));
  const rankOf = (service: T): number =>
    rank.get(normalize(getName(service))) ?? Number.POSITIVE_INFINITY;

  return [...services].sort((a, b) => {
    const rankA = rankOf(a);
    const rankB = rankOf(b);

    // Both unranked (or same rank): keep the incoming order.
    if (rankA === rankB) return 0;

    return rankA < rankB ? -1 : 1;
  });
}

