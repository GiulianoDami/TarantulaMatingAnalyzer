/**
 * Calculates the ratio between two appendage measurements
 * @param numerator - The numerator value (e.g., male pedipalp length)
 * @param denominator - The denominator value (e.g., female leg length)
 * @returns The calculated ratio as a number
 */
export function calculateAppendageRatio(numerator: number, denominator: number): number {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero when calculating appendage ratio");
  }
  return numerator / denominator;
}

/**
 * Normalizes a value to a 0-1 range based on min and max values
 * @param value - The value to normalize
 * @param min - The minimum possible value
 * @param max - The maximum possible value
 * @returns The normalized value between 0 and 1
 */
export function normalizeValue(value: number, min: number, max: number): number {
  if (min >= max) {
    throw new Error("Minimum value must be less than maximum value for normalization");
  }
  
  const normalized = (value - min) / (max - min);
  return Math.max(0, Math.min(1, normalized)); // Clamp between 0 and 1
}