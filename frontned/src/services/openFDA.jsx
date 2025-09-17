const BASE_URL = 'https://api.fda.gov/drug/label.json';

/**
 * Funkcija za pretragu lekova.
 * @param {string} searchTerm - Naziv leka (brand name ili INN) za pretragu.
 * @param {string} [searchType='brand'] - Tip pretrage: 'brand' za naziv brenda, 'inn' za aktivni sastojak.
 * @returns {Promise<Array<Object>>} - Niz objekata koji sadrže informacije o leku.
 */
export const searchDrugs = async (searchTerm, searchType = 'brand') => {
  if (!searchTerm) {
    return [];
  }

  // Određujemo polje za pretragu na osnovu izabranog tipa
  const searchField = searchType === 'inn' ? 'openfda.generic_name' : 'openfda.brand_name';
  const url = `${BASE_URL}?search=${searchField}:"${searchTerm}"`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Greška prilikom preuzimanja podataka: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.results) {
      return [];
    }

    return data.results.map(result => ({
      id: result.id,
      drugName: result.openfda?.brand_name?.[0] || 'Nije dostupan',
      purpose: result.purpose?.[0] || result.indications_and_usage?.[0] || 'Nije dostupno',
      instructions: result.dosage_and_administration?.[0] || 'Nije dostupno',
      sideEffects: result.adverse_reactions?.[0] || 'Nije dostupno'
    }));
  } catch (error) {
    console.error("Došlo je do greške prilikom pretrage leka:", error);
    return [];
  }
};