const db = require("../config/db");

exports.getDrugs = async (req, res) => {
  try {
    // 1. Dohvaćanje parametara iz URL-a
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 100;
    const offset = (page - 1) * limit;

    // 2. Izvršavanje upita s LIMIT i OFFSET klauzulama
    const [rows] = await db.query(
      "SELECT * FROM Drug LIMIT ? OFFSET ?",
      [limit, offset]
    );

    // 3. Opcionalno: Dohvati ukupan broj rezultata za paginaciju na frontendu
    const [[totalCount]] = await db.query("SELECT COUNT(*) AS count FROM Drug");
    const totalDrugs = totalCount.count;

    // 4. Slanje odgovora s podacima i informacijama o paginaciji
    res.json({
      drugs: rows,
      totalCount: totalDrugs,
      currentPage: page,
      perPage: limit,
      totalPages: Math.ceil(totalDrugs / limit),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDrugById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Drug WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Drug not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDrug = async (req, res) => {
  const { name, ATC, INN, maxPrice, available, description } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO Drug (name, ATC, INN, maxPrice, available, description) VALUES (?, ?, ?, ?, ?, ?)",
      [name, ATC, INN, maxPrice, available, description]
    );
    res.json({ id: result.insertId, name, ATC, INN, maxPrice, available, description });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDrug = async (req, res) => {
  const { name, ATC, INN, maxPrice, available, description } = req.body;
  try {
    await db.query(
      "UPDATE Drug SET name=?, ATC=?, INN=?, maxPrice=?, available=?, description=? WHERE id=?",
      [name, ATC, INN, maxPrice, available, description, req.params.id]
    );
    res.json({ message: "Drug updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDrug = async (req, res) => {
  try {
    await db.query("DELETE FROM Drug WHERE id=?", [req.params.id]);
    res.json({ message: "Drug deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
