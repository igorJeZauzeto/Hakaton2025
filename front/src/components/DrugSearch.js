import React, { useState } from 'react';
import { searchDrugs } from '../api/drugApi';

const DrugSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('brand');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const searchResults = await searchDrugs(searchTerm, searchType);
      setResults(searchResults);
    } catch (err) {
      console.error(err);
      setError('Došlo je do greške prilikom pretrage.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <div>
      <h1>Pretraga lekova</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Unesite naziv leka..."
        />
        <select value={searchType} onChange={handleSelectChange}>
          <option value="brand">Brand Name</option>
          <option value="inn">Aktivni sastojak (INN)</option>
        </select>
        <button onClick={handleSearch}>Pretraži</button>
      </div>

      {loading && <p>Učitavanje...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {results.length > 0 ? (
          results.map((drug) => (
            <li key={drug.id}>
              <h3>{drug.drugName}</h3>
              <p>Svrha: {drug.purpose}</p>
              <p>Uputstvo: {drug.instructions}</p>
              <p>Mogući neželjeni efekti: {drug.sideEffects}</p>
            </li>
          ))
        ) : (
          !loading && !error && <p>Nema rezultata.</p>
        )}
      </ul>
    </div>
  );
};

export default DrugSearch;