import { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentsTable.css';
import PromotionForm from '../PromotionForm/PromotionForm';

const StudentTable = () => {
  const [students, setStudents] = useState([]);

  async function downloadStudents() {
    const response = await axios.get("http://localhost:5000/students/getStudents")
    try {
      if(response.status === 200) {
        console.log(response.data);
        setStudents(response.data)
      }else {
        // Handle errors if the response is not successful
        console.error("Failed to fetch data:", response.statusText);
      }
    } 
    catch (error) {
      // Handle network or parsing errors
      console.error("Error fetching data:", error.message);
    }
  }

  useEffect(() => {
    downloadStudents();
  }, []);

  return (
    <div className='student-table-wrapper'>
      <div className='student-table'>
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
      <div>
        <PromotionForm/>
      </div>
    </div>
  );
};

export default StudentTable;
