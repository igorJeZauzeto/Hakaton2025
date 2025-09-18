const db = require("../config/db");

exports.getDrugs = async (req, res) => {
  try {
    const search = req.query.search || '';
    const limit = 10;

    const [rows] = await db.query(
      "SELECT * FROM drug WHERE name LIKE ? OR INN LIKE ? ORDER BY name LIMIT ?",
      [`%${search}%`, `%${search}%`, limit]
    );

    res.json({
      drugs: rows,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDrugById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM drug WHERE id = ?", [req.params.id]);
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
      "INSERT INTO drug (name, ATC, INN, maxPrice, available, description) VALUES (?, ?, ?, ?, ?, ?)",
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
      "UPDATE drug SET name=?, ATC=?, INN=?, maxPrice=?, available=?, description=? WHERE id=?",
      [name, ATC, INN, maxPrice, available, description, req.params.id]
    );
    res.json({ message: "Drug updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDrug = async (req, res) => {
  try {
    await db.query("DELETE FROM drug WHERE id=?", [req.params.id]);
    res.json({ message: "Drug deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
