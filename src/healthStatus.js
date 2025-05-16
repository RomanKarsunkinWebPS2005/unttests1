import 'core-js/stable';
import 'regenerator-runtime/runtime';

export function getHealthStatus(character) {
  if (character.health > 50) {
    return 'healthy';
  }
  if (character.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
