const db = require('../config/db');

// GET all students
const getStudents = async (req, res) => {
  try {
    const query = 'SELECT * FROM students';
    const [results] = await db.promise().query(query);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create a new student
const createStudent = async (req, res) => {
  try {
    const { name, class: studentClass, roll_no, medium, fees } = req.body;
    const query = 'INSERT INTO students (name, class, roll_no, medium, fees) VALUES (?, ?, ?, ?, ?)';

    const [result] = await db.promise().query(query, [name, studentClass, roll_no, medium, fees]);

    res.status(201).json({
      id: result.insertId,
      name,
      class: studentClass,
      roll_no,
      medium,
      fees
    });
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
};

// PUT update an existing student
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, class: studentClass, roll_no, medium, fees } = req.body;

    const query = 'UPDATE students SET name = ?, class = ?, roll_no = ?, medium = ?, fees = ? WHERE id = ?';
    
    const [result] = await db.promise().query(query, [name, studentClass, roll_no, medium, fees, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Respond with the updated student data
    res.status(200).json({
      id,
      name,
      class: studentClass,
      roll_no,
      medium,
      fees
    });
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
};

// DELETE a student
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'DELETE FROM students WHERE id = ?';
    
    const [result] = await db.promise().query(query, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getStudents, createStudent, updateStudent, deleteStudent };
