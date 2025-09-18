const API_URL = `${process.env.REACT_APP_API_URL}`;

export async function translateMessage(message) {
  try {
    const response = await fetch(`${API_URL}/api/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to translate message.');
    }

    const data = await response.json();
    return data.reply;
  } catch (error) {
    console.error('Error during translation:', error);
    throw error;
  }
}

// Ispravljena funkcija
export async function testList(message) {
  try {
    const response = await fetch(`${API_URL}/api/testList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message), // Ispravljeno: šaljemo direktno objekt, ne unutar drugog objekta
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to translate message.');
    }

    const data = await response.json();
    return data; // Ispravljeno: vraćamo cijeli objekt
  } catch (error) {
    console.error('Error during translation:', error);
    throw error;
  }
}