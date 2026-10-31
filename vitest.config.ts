import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/unit/**/*.unit.spec.ts'],
    // Deliberately NOT the business timezone: if a refactor reintroduces local
    // clock arithmetic (getDate/setDate/toLocaleDateString without timeZone),
    // these specs fail here rather than passing on a Bogotá machine.
    env: { TZ: 'Europe/Berlin' },
  },
})
