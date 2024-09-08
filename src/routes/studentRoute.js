const express = require('express');
const router = express.Router();
const { getStudents, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController');

// GET all students
router.get('/', getStudents);

// POST create a new student
router.post('/', createStudent);

// PUT update an existing student
router.put('/:id', updateStudent);

// DELETE a student
router.delete('/:id', deleteStudent);

module.exports = router;
