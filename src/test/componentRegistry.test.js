import { describe, expect, it } from 'vitest';
import { componentRegistry } from '../catalog/componentRegistry';

describe('component registry', () => {
  it('keeps every registered component available', () => {
    expect(componentRegistry.length).toBeGreaterThan(40);

    for (const entry of componentRegistry) {
      expect(entry.name).toBeTruthy();
      expect(entry.component).toBeTypeOf('function');
    }
  });

  it('uses unique component names', () => {
    const names = componentRegistry.map((entry) => entry.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
