const db = require("../config/db");

exports.getDrugs = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Drug");
    res.json(rows);
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
