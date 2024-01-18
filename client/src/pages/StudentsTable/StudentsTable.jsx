import { useState, useEffect } from 'react';
import './StudentsTable.css';

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/students/getStudents')
      .then((response) => (response.json()))
      .then((data) => setStudents(data))
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  return (
    <div>
      <h2>Student Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Current Class</th>
            <th>Current Session</th>
            <th>Current Fees</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.currentClass}</td>
              <td>{student.currentSession}</td>
              <td>{student.currentFees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
