const db = require("../config/db");

exports.getTreatments = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Treatment");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTreatmentByIds = async (req, res) => {
  const { idAcc, idDrug, description } = req.body;
  try {
    const [rows] = await db.query("SELECT * FROM Treatment WHERE idAcc = ? AND idDrug = ?", [idAcc, idDrug]);
    if (rows.length === 0) return res.status(404).json({ message: "Treatment not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTreatment = async (req, res) => {
  const { idAcc, idDrug, description } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO Treatment (idAcc, idDrug, description) VALUES (?, ?, ?)",
      [idAcc, idDrug, description]
    );
    res.json({ idAcc, idDrug, description });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTreatment = async (req, res) => {
  const { idAcc, idDrug, description } = req.body;
  try {
    await db.query(
      "UPDATE Treatment SET description=? WHERE idAcc=? AND idDrug=?",
      [description, idAcc, idDrug]
    );
    res.json({ message: "Drug updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTreatment = async (req, res) => {
    const { idAcc, idDrug, description } = req.body;
  try {
    await db.query("DELETE FROM Treatment WHERE idAcc=? AND idDrug=?", [idAcc, idDrug]);
    res.json({ message: "Drug deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
