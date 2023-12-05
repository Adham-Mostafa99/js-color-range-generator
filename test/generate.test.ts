import { generate } from '../src/index';
import { describe, expect, test } from '@jest/globals';

describe('generate function', () => {
  test('Generates colors for valid inputs', () => {
    const hueValue = 180;
    const colorRange = [10, 20, 30];

    const result = generate(hueValue, colorRange);

    expect(result).toBeDefined();
    expect(typeof result).toBe('object');

    // Add more specific assertions based on your expected output
    expect(result?.[10]).toMatch(/^#[0-9A-F]{6}$/i); // Check if color value matches hex format
    expect(result?.[20]).toMatch(/^#[0-9A-F]{6}$/i);
    expect(result?.[30]).toMatch(/^#[0-9A-F]{6}$/i);
    // Add additional assertions for specific properties or values based on your logic
  });

  test('Returns null for empty colorRange', () => {
    const hueValue = 150;
    const emptyColorRange: number[] = [];

    const result = generate(hueValue, emptyColorRange);

    expect(result).toBeNull();
    // Add assertions for other cases where null is expected
  });

  // Add more test cases for edge cases, invalid inputs, etc.
});
