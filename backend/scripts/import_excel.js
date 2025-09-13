const XLSX = require('xlsx');
const mysql = require('mysql2/promise');
const path = require('path');
const fs = require('fs').promises;

// Konfiguracija baze podataka
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '*******',
    database: 'hakaton2025'
};

// Glavna funkcija koja pokreće proces
async function runImport() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Uspješno povezan s bazom podataka.');

        const files = await fs.readdir('../imports');
        const excelFiles = files.filter(file => file.endsWith('.xlsx') || file.endsWith('.xls'));

        if (excelFiles.length === 0) {
            console.log('Nema Excel fajla za obradu.');
            return;
        }

        for (const file of excelFiles) {
            const filePath = path.join('../imports', file);
            console.log(`Počinje obrada fajla: ${file}`);
            await processAndImportFile(filePath, connection);
        }

        console.log('Uvoz svih fajlova je završen.');

    } catch (error) {
        console.error('Došlo je do greške:', error);
    } finally {
        if (connection) {
            connection.end();
        }
    }
}

// Funkcija za obradu i uvoz fajla s async/await
async function processAndImportFile(filePath, connection) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    for (const row of data) {
        const ATC = row['ATC'];
        const INN = row['INN'];
        const name = row['Naziv lijeka'];
        const desc = row['Farmaceutski oblik, jačina i opis pakovanja'];
        const avail = row['Režim izdavanja lijeka'];
        const sql = `INSERT INTO Drug (name, ATC, INN, maxPrice, available, description) VALUES (?, ?, ?, ?, ?, ?)`;

        try {
            await connection.execute(sql, [name, ATC, INN, null, avail, desc]);
            console.log(`Uspješno unesen red: Ime=${name}`);
        } catch (err) {
            console.error('Greška pri unosu reda:', err.message);
        }
    }
}

runImport();