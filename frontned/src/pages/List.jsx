import React, { useState, useEffect } from 'react';
import { getAllDrugs } from '../services/drugService';
import { testList } from '../services/openAI';
import './List.css';

const List = () => {
    // Stanje za pojam pretrage lijekova
    const [searchTerm, setSearchTerm] = useState('');

    // Stanje za odabrani lijek iz pretraživača
    const [selectedDrug, setSelectedDrug] = useState(null);

    // Stanje za tekstualni opis terapije
    const [therapyDescription, setTherapyDescription] = useState('');

    // Stanje za listu lijekova koje je korisnik dodao
    const [userDrugs, setUserDrugs] = useState([]);

    // Stanje za poruke o greškama
    const [errors, setErrors] = useState({});

    // Stanje za listu lijekova dobijenih sa servisa
    const [drugs, setDrugs] = useState([]);

    // Stanje za loading indikator
    const [isLoading, setIsLoading] = useState(false);

    // Novo stanje za poruku o kompatibilnosti
    const [compatibilityMessage, setCompatibilityMessage] = useState(null);

    // Dohvaćanje podataka sa servisa kada se searchTerm promijeni
    useEffect(() => {
        if (!searchTerm) {
            setDrugs([]);
            return;
        }

        const fetchDrugs = async () => {
            setIsLoading(true);
            try {
                const fetchedDrugs = await getAllDrugs(searchTerm);
                setDrugs(fetchedDrugs);
            } catch (error) {
                console.error("Greška pri dohvaćanju lijekova:", error);
                setDrugs([]);
            } finally {
                setIsLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchDrugs();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    // Funkcija za obradu odabira lijeka
    const handleDrugSelect = (drug) => {
        setSelectedDrug(drug);
        setSearchTerm(drug.name);
        setDrugs([]);
    };

    // Funkcija za validaciju prije dodavanja
    const validateAdd = () => {
        let newErrors = {};
        if (!selectedDrug) {
            newErrors.drugSelection = 'Morate odabrati lijek s liste.';
        }
        if (!therapyDescription.trim()) {
            newErrors.therapyDescription = 'Opis terapije je obavezan.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Funkcija za dodavanje lijeka u listu
    const handleAddDrug = () => {
        if (validateAdd()) {
            const newDrugEntry = {
                id: selectedDrug.id,
                naziv_lijeka: selectedDrug.name,
                inn: selectedDrug.inn,
                description: selectedDrug.description,
                terapija: therapyDescription.trim(),
            };

            setUserDrugs([...userDrugs, newDrugEntry]);

            // Resetuj polja za unos
            setSelectedDrug(null);
            setSearchTerm('');
            setTherapyDescription('');
            setErrors({});
            // Ovdje NE resetujemo compatibilityMessage
        }
    };

    // Funkcija za brisanje lijeka iz liste
    const handleRemoveDrug = (id) => {
        setUserDrugs(userDrugs.filter(drug => drug.id !== id));
        // Ovdje NE resetujemo compatibilityMessage
    };

    // Glavna promjena: Poziv API funkcije i ažuriranje stanja
    const handleCheckCompatibility = async () => {
        // 1. Reset the message at the very start of the process
        setCompatibilityMessage(null); // Clear previous message

        // Check for minimum drugs and handle this case immediately
        if (userDrugs.length < 2) {
            setCompatibilityMessage("Morate imati najmanje dva lijeka u listi za provjeru kompatibilnosti.");
            return;
        }

        // 2. Set the "loading" message only after all initial checks pass
        setCompatibilityMessage("Provjeravam kompatibilnost...");

        try {
            const drugsJsonString = JSON.stringify(userDrugs);

            // Log the JSON string to ensure it's correct
            console.log("Sending to API:", drugsJsonString);

            const response = await testList({ message: drugsJsonString });

            // Log the API response to see its structure
            console.log("Received from API:", response);

            if (response && response.reply) {
                setCompatibilityMessage(response.reply);
            } else {
                console.error("API response was not in the expected format.");
                setCompatibilityMessage("Došlo je do greške prilikom obrade odgovora.");
            }
        } catch (error) {
            // Log the full error to see why it's failing
            console.error("Greška pri provjeri kompatibilnosti:", error);
            setCompatibilityMessage("Došlo je do greške prilikom komunikacije sa AI-em.");
        }
    };

    return (
        <div className="drug-registration-container">
            <div className="header-container">
                <h2>Moji Lijekovi</h2>
                <button
                    className="compatibility-button"
                    onClick={handleCheckCompatibility}
                >
                    Provjeri kompatabilnost
                </button>
            </div>

            {/* Prikaz poruke o kompatibilnosti */}
            {compatibilityMessage && (
                <div className={`compatibility-message ${compatibilityMessage.startsWith('Postoji problem') ? 'error' : 'success'
                    }`}>
                    {compatibilityMessage}
                </div>
            )}

            <div className="form-group search-container">
                <label htmlFor="drugSearch">Pretražite i odaberite lijek</label>
                <input
                    type="text"
                    id="drugSearch"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setSelectedDrug(null);
                    }}
                    placeholder="Npr. Aspirin, Amoksicilin"
                    className={errors.drugSelection ? 'input-error' : ''}
                />
                {errors.drugSelection && <div className="error-text">{errors.drugSelection}</div>}

                {isLoading && <div className="loading-text">Pretraga...</div>}

                {/* Prikaz liste lijekova sa dodatnim informacijama */}
                {!isLoading && searchTerm && !selectedDrug && drugs.length > 0 && (
                    <ul className="drug-list-dropdown">
                        {drugs.map(drug => (
                            <li key={drug.id} onClick={() => handleDrugSelect(drug)}>
                                <div className="search-result-item">
                                    <strong>{drug.name}</strong>
                                    {drug.inn && <p>INN: {drug.inn}</p>}
                                    {drug.description && <p>{drug.description}</p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="therapyDescription">Terapija i doziranje</label>
                <textarea
                    id="therapyDescription"
                    value={therapyDescription}
                    onChange={(e) => setTherapyDescription(e.target.value)}
                    placeholder="Npr. 10mg, 1x dnevno, nakon doručka. Uzimati 7 dana."
                    rows="4"
                    className={errors.therapyDescription ? 'input-error' : ''}
                />
                {errors.therapyDescription && <div className="error-text">{errors.therapyDescription}</div>}
            </div>

            <button onClick={handleAddDrug} className="submit-button">Dodaj Terapiju</button>

            {/* Prikaz odabranih lijekova */}
            {userDrugs.length > 0 && (
                <>
                    <h3>Odabrani Lijekovi</h3>
                    <ul className="selected-drugs-list">
                        {userDrugs.map((drug, index) => (
                            <li key={index} className="selected-drug-item">
                                <div className="drug-info">
                                    <strong>{drug.naziv_lijeka}</strong>
                                    {drug.inn && <p><strong>INN:</strong> {drug.inn}</p>}
                                    {drug.description && <p>{drug.description}</p>}
                                    <p><strong>Terapija:</strong> {drug.terapija}</p>
                                </div>
                                <button onClick={() => handleRemoveDrug(drug.id)} className="remove-button">Ukloni</button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default List;