import React, { useState, useEffect } from 'react';
import { searchDrugs } from '../services/openFDA';

// Komponenta sada prima 'defaultTerm' kao prop
const DrugSearch = ({ defaultTerm = '' }) => {
  const [searchTerm, setSearchTerm] = useState(defaultTerm);
  const [searchType, setSearchType] = useState('inn');
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Funkcija za pretragu izvučena je izvan handleSearch, za ponovnu upotrebu
  const performSearch = async (term) => {
    if (!term) return;
    setLoading(true);
    setError(null);
    try {
      const data = await searchDrugs(term, searchType);
      setDrugs(data);
    } catch (err) {
      setError('Došlo je do greške prilikom pretrage. Pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  };

  // useEffect hook se pokreće kada se komponenta prvi put prikaže
  useEffect(() => {
    performSearch(defaultTerm);
  }, [defaultTerm, searchType]); // Re-pokreni pretragu ako se defaultTerm ili searchType promijene

  const handleSearch = async (e) => {
    e.preventDefault();
    performSearch(searchTerm);
  };

  return (
    <div>
      {error && <p className="error-message">{error}</p>}

      {drugs.length > 0 && (
        <ul className="drug-list">
          {drugs.map(drug => (
            <li key={drug.id} className="drug-item">
              <p><strong>Upotreba:</strong> {drug.purpose}</p>
              <p><strong>Uputstvo:</strong> {drug.instructions}</p>
              <p><strong>Neželjeni efekti:</strong> {drug.sideEffects}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DrugSearch;