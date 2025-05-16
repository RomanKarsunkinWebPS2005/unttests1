import { getHealthStatus } from '../src/healthStatus.js';

test('returns "healthy" when health > 50', () => {
  expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('returns "wounded" when 15 <= health <= 50', () => {
  expect(getHealthStatus({ name: 'Лучник', health: 50 })).toBe('wounded');
  expect(getHealthStatus({ name: 'Лучник', health: 15 })).toBe('wounded');
});

test('returns "critical" when health < 15', () => {
  expect(getHealthStatus({ name: 'Рыцарь', health: 10 })).toBe('critical');
});
