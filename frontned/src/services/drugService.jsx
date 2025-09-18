const API_URL = `${process.env.REACT_APP_API_URL}/api/Drug`;

export const getAllDrugs = async (searchTerm = '') => {
  try {
    const response = await fetch(`${API_URL}/?search=${(searchTerm)}`);

    // Provjerava da li je odgovor uspješan (status 200 OK)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.drugs; // Vraća niz lekova
  } catch (error) {
    console.error("Greška pri dohvaćanju lekova:", error);
    return []; // Vraća prazan niz u slučaju greške
  }
};

// **2. READ: Dohvati jedan lek po ID-u**
export const getDrugById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Lek sa ID-em ${id} nije pronađen.`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Došlo je do greške prilikom dohvatanja leka sa ID-em ${id}:`, error);
    return null; // Vraća null u slučaju greške
  }
};

// **3. CREATE: Dodaj novi lek**
export const createDrug = async (drugData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(drugData),
    });
    if (!response.ok) {
      throw new Error('Greška pri dodavanju leka.');
    }
    return await response.json(); // Vraća novododati lek sa ID-em
  } catch (error) {
    console.error('Došlo je do greške prilikom kreiranja leka:', error);
    return null;
  }
};

// **4. UPDATE: Ažuriraj postojeći lek**
export const updateDrug = async (id, drugData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT', // Ili 'PATCH', zavisno od backend implementacije
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(drugData),
    });
    if (!response.ok) {
      throw new Error(`Greška pri ažuriranju leka sa ID-em ${id}.`);
    }
    // Neki API-ji vraćaju ažurirani objekat, neki samo status 204 (No Content)
    // Ovdje vraćamo boolean kako bismo označili uspjeh
    return true; 
  } catch (error) {
    console.error(`Došlo je do greške prilikom ažuriranja leka sa ID-em ${id}:`, error);
    return false;
  }
};

// **5. DELETE: Obriši lek po ID-u**
export const deleteDrug = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Greška pri brisanju leka sa ID-em ${id}.`);
    }
    return true; // Označava uspješno brisanje
  } catch (error) {
    console.error(`Došlo je do greške prilikom brisanja leka sa ID-em ${id}:`, error);
    return false;
  }
};