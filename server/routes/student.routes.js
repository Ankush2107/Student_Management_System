const express = require('express');
const router = express.Router();
const CurrentDetail = require('../models/current.model.js');
const calculateFees = require('../calculateFees.js');
router.get('/getStudents', async (req, res) => {
  try {
    const currentStudents = await CurrentDetail.find();
    res.status(200).json(currentStudents);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Something went wrong'})
  }
    
})

router.post('/currentStudent', async (req, res) => {
    const { name, currentClass, currentSession, currentFees } = req.body;
    
    if( !name || !currentClass || !currentSession || !currentFees ) {
      res.status(400).json({ error: 'Please provide all fields' });
    }

    try {
      const createCurrent = await CurrentDetail.create({
        name, 
        currentClass, 
        currentSession, 
        currentFees
      })
  
      if(!createCurrent) {
        return res.status(404).json({ error: 'Failed to add all fields' });
      }

      res.status(200).json({ success: 'Current data of student is created successfully' });
    }
    catch (error){
      console.error(error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
})

// router.put('/promote/:id', async (req, res) => {
//   try {
//     const { id } = req.params;

//     const { name, newClass, newSession } = req.body;

//     if (!name || !newClass || !newSession) {
//       return res.status(400).json({ error: 'Please provide all feilds' });
//     }

//     if (isNaN(newClass) || !(newClass >= 1 && newClass <= 12) || !(newSession >= 2023 && newSession <= 2025)) {
//       return res.status(400).json({ error: 'Invalid class or session' });
//     }

//     const currentStudent = await CurrentDetail.findOne({ _id: id, name: name });

//     if (!currentStudent) {
//       return res.status(404).json({ error: 'Student not found' });
//     }

//     const newFees = calculateFees(
//       parseInt(newClass), 
//       parseInt(newSession), 
//       currentStudent.currentFees
//     );
    
//     const updatedStudent = await CurrentDetail.findByIdAndUpdate(
//       { _id: id },
//       { currentClass: parseInt(newClass), currentSession: parseInt(newSession), currentFees: newFees },
//       { new: true }
//     );

//     if (!updatedStudent) {
//       return res.status(404).json({ error: 'Failed to update student details' });
//     }

//     res.json(updatedStudent);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// Add this route in student.routes.js
router.put('/promoteBatch/:class/:session', async (req, res) => {
  try {
    const { class: currentClass, session: currentSession } = req.params;

    // Validate currentClass and currentSession

    // Get all students in the current class and session
    const studentsToUpdate = await CurrentDetail.find({ currentClass, currentSession });

    if (!studentsToUpdate || studentsToUpdate.length === 0) {
      return res.status(404).json({ error: 'No students found for the given class and session' });
    }

    const updatedStudents = [];

    for (const student of studentsToUpdate) {
      const newFees = calculateFees(parseInt(student.currentClass) + 1, parseInt(student.currentSession) + 1, student.currentFees);

      const updatedStudent = await CurrentDetail.findByIdAndUpdate(
        { _id: student._id },
        { currentClass: parseInt(student.currentClass) + 1, currentSession: parseInt(student.currentSession) + 1, currentFees: newFees },
        { new: true }
      );

      if (!updatedStudent) {
        return res.status(500).json({ error: 'Failed to update student details' });
      }

      updatedStudents.push(updatedStudent);
    }

    res.json({ success: 'Batch promotion successful', updatedStudents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;