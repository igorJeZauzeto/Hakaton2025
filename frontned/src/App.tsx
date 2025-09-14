// src/components/DrugSearch.tsx

import React, { useState } from 'react';
import { searchDrugs } from './services/openFDA';
import type { DrugResult } from './types';

const DrugSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchType, setSearchType] = useState<'brand' | 'inn'>('brand'); // Dodajemo novo stanje za tip pretrage
  const [drugs, setDrugs] = useState<DrugResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Prosleđujemo tip pretrage funkciji searchDrugs
      const data = await searchDrugs(searchTerm, searchType);
      setDrugs(data);
    } catch (err) {
      setError('Došlo je do greške prilikom pretrage. Pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Pretraga lekova</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          placeholder="Unesite naziv..."
        />
        <div>
          {/* Radio dugmad za odabir tipa pretrage */}
          <label>
            <input
              type="radio"
              value="brand"
              checked={searchType === 'brand'}
              onChange={() => setSearchType('brand')}
            />
            Pretraga po brendu
          </label>
          <label>
            <input
              type="radio"
              value="inn"
              checked={searchType === 'inn'}
              onChange={() => setSearchType('inn')}
            />
            Pretraga po aktivnom sastojku
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Pretražujem...' : 'Pretraži'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {drugs.length > 0 && (
        <ul>
          {drugs.map(drug => (
            <li key={drug.id}>
              <h2>{drug.drugName}</h2>
              <p>
                <strong>Zašto se koristi:</strong>{' '}
                {drug.purpose}
              </p>
              <p>
                <strong>Uputstvo za upotrebu:</strong>{' '}
                {drug.instructions}
              </p>
              <p>
                <strong>Neželjeni efekti:</strong>{' '}
                {drug.sideEffects}
              </p>
            </li>
          ))}
        </ul>
      )}

      {drugs.length === 0 && !loading && searchTerm && (
        <p>Nema pronađenih rezultata za "{searchTerm}".</p>
      )}
    </div>
  );
};

export default DrugSearch;