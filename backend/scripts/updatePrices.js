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
            await processAndUpdateFile(filePath, connection);
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

// Funkcija za obradu i ažuriranje fajla s async/await
async function processAndUpdateFile(filePath, connection) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);

    for (const row of data) {
        const name = row['Naziv lijeka'];
        const pharmForm = row['Farmaceutski oblik'] || '';
        const strength = row['Jačina lijeka'] || '';
        const packDesc = row['Opis pakovanja'] || '';
        
        let maxPrice = row['Utvrđena maksimalna cijena lijeka'];

        const description = [pharmForm, strength, packDesc].join(', ');

        if (name && description && maxPrice !== undefined && maxPrice !== null && !isNaN(maxPrice)) {
            const sql = `UPDATE Drug SET maxPrice = ? WHERE name = ? AND description = ?`;

            try {
                const [result] = await connection.execute(sql, [maxPrice, name, description]);
                if (result.affectedRows > 0) {
                    console.log(`Uspješno ažuriran red za lijek s nazivom: '${name}' i opisom: '${description}'`);
                } else {
                    console.log(`Nema ažuriranih redova za lijek s nazivom: '${name}'. Možda ne postoji.`);
                }
            } catch (err) {
                console.error(`Greška pri ažuriranju reda za '${name}':`, err.message);
            }
        } else {
            console.log(`Preskače se red zbog nedostajuće ili nevažeće vrijednosti za 'Naziv lijeka', 'description' ili 'maxPrice'.`);
        }
    }
}

runImport();