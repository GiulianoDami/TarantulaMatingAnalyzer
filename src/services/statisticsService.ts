export class StatisticsService {
  /**
   * Calculates the mean of an array of numbers
   */
  static calculateMean(values: number[]): number {
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
  }

  /**
   * Calculates the median of an array of numbers
   */
  static calculateMedian(values: number[]): number {
    if (values.length === 0) return 0;
    
    const sorted = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      return sorted[middle];
    }
  }

  /**
   * Calculates the standard deviation of an array of numbers
   */
  static calculateStandardDeviation(values: number[]): number {
    if (values.length === 0) return 0;
    
    const mean = this.calculateMean(values);
    const squaredDifferences = values.map(val => Math.pow(val - mean, 2));
    const variance = this.calculateMean(squaredDifferences);
    return Math.sqrt(variance);
  }

  /**
   * Calculates the correlation coefficient between two arrays of numbers
   */
  static calculateCorrelation(x: number[], y: number[]): number {
    if (x.length !== y.length || x.length === 0) return 0;
    
    const n = x.length;
    const meanX = this.calculateMean(x);
    const meanY = this.calculateMean(y);
    const stdX = this.calculateStandardDeviation(x);
    const stdY = this.calculateStandardDeviation(y);
    
    if (stdX === 0 || stdY === 0) return 0;
    
    let correlationSum = 0;
    for (let i = 0; i < n; i++) {
      correlationSum += ((x[i] - meanX) / stdX) * ((y[i] - meanY) / stdY);
    }
    
    return correlationSum / n;
  }

  /**
   * Performs basic statistical analysis on morphological data
   */
  static analyzeMorphologicalData(data: Record<string, number[]>): Record<string, any> {
    const results: Record<string, any> = {};
    
    for (const [key, values] of Object.entries(data)) {
      results[key] = {
        count: values.length,
        mean: this.calculateMean(values),
        median: this.calculateMedian(values),
        standardDeviation: this.calculateStandardDeviation(values),
        min: Math.min(...values),
        max: Math.max(...values)
      };
    }
    
    return results;
  }
}