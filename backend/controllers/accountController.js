const db = require("../config/db");

exports.getAccounts = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Account");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAccountById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Account WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: "Account not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAccount = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO Account (email, name, password) VALUES (?, ?, ?)",
      [email, name, password]
    );
    res.json({ id: result.insertId, email, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateAccount = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    await db.query(
      "UPDATE Account SET email=?, name=?, password=? WHERE id=?",
      [email, name, password, req.params.id]
    );
    res.json({ message: "Account updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    await db.query("DELETE FROM Account WHERE id=?", [req.params.id]);
    res.json({ message: "Account deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
