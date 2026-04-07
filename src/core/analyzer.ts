export class TarantulaAnalyzer {
  private morphologicalData: Map<string, any>;
  private defensivePatterns: Map<string, any>;

  constructor() {
    this.morphologicalData = new Map();
    this.defensivePatterns = new Map();
  }

  /**
   * Analyzes morphological characteristics of tarantula species
   * @param speciesName - Name of the tarantula species
   * @param appendageLengthRatio - Ratio of mating appendage length to body size
   * @param bodySize - Body size measurement
   * @param defensiveSoundPattern - Defensive sound pattern data
   */
  analyzeMorphology(
    speciesName: string,
    appendageLengthRatio: number,
    bodySize: number,
    defensiveSoundPattern: number[]
  ): void {
    this.morphologicalData.set(speciesName, {
      appendageLengthRatio,
      bodySize,
      defensiveSoundPattern
    });
  }

  /**
   * Calculates mating strategy based on morphological data
   * @param speciesName - Name of the tarantula species
   * @returns Mating strategy classification
   */
  calculateMatingStrategy(speciesName: string): string {
    const data = this.morphologicalData.get(speciesName);
    if (!data) {
      throw new Error(`No data found for species: ${speciesName}`);
    }

    // Simple heuristic for mating strategy classification
    if (data.appendageLengthRatio > 1.5 && data.bodySize < 10) {
      return "Aggressive";
    } else if (data.appendageLengthRatio < 1.0 && data.bodySize > 15) {
      return "Passive";
    } else {
      return "Balanced";
    }
  }

  /**
   * Analyzes defensive behavior patterns
   * @param speciesName - Name of the tarantula species
   * @param soundPattern - Defensive sound pattern data
   */
  analyzeDefensiveBehavior(
    speciesName: string,
    soundPattern: number[]
  ): void {
    this.defensivePatterns.set(speciesName, soundPattern);
  }

  /**
   * Compares two tarantula species based on morphological characteristics
   * @param species1 - First tarantula species
   * @param species2 - Second tarantula species
   * @returns Comparison result
   */
  compareSpecies(
    species1: string,
    species2: string
  ): { species1: string; species2: string; difference: number } {
    const data1 = this.morphologicalData.get(species1);
    const data2 = this.morphologicalData.get(species2);

    if (!data1 || !data2) {
      throw new Error("One or both species data not found");
    }

    const difference = Math.abs(data1.appendageLengthRatio - data2.appendageLengthRatio);
    
    return {
      species1,
      species2,
      difference
    };
  }

  /**
   * Gets all analyzed species names
   * @returns Array of species names
   */
  getAnalyzedSpecies(): string[] {
    return Array.from(this.morphologicalData.keys());
  }
}