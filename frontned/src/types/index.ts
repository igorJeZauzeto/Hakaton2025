export interface DrugResult {
  id: string;
  drugName: string;
  purpose: string;
  instructions: string;
  sideEffects: string;
}

export interface OpenFdaApiResponse {
  results?: Array<{
    id: string;
    purpose?: string[];
    indications_and_usage?: string[];
    dosage_and_administration?: string[];
    adverse_reactions?: string[];
    openfda?: {
      brand_name?: string[];
    };
  }>;
}