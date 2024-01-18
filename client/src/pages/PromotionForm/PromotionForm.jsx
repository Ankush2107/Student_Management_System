import './PromotionForm.css'
import { useState } from 'react';

const PromotionForm = () => {
  
  const [studentId, setStudentId] = useState('');
  const [name, setName] = useState('');
  const [newClass, setNewClass] = useState('');
  const [newSession, setNewSession] = useState('');
  const [generatedFees, setGeneratedFees] = useState('');

  const handleGenerateFees = () => {
    
    try {
      if (!studentId || !name || !newClass || !newSession) {
        console.error('Please fill in all fields before generating fees.');
        return;
      }

      if (isNaN(newClass) || isNaN(newSession)) {
        console.error('Please enter valid numeric values for New Class and New Session.');
        return;
      }

      fetch(`http://localhost:5001/students/promote/${studentId}`, { method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, name, newClass, newSession }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (!data || !data.currentFees) {
          console.error('Invalid API response:', data);
          return;
        }
        console.log('Fees generated successfully:', data);
        setGeneratedFees(data.currentFees);

        clearFields();
      })
      .catch((error) => console.error('Error generating fees:', error));
    } catch (error) {
      console.error('Error promoting student:', error.message);
    }
  };

  const clearFields = () => {
    setStudentId('');
    setName('');
    setNewClass('');
    setNewSession('');
  };

  return (
    <div>
      <div className='inputFrom'>
        <h2>Promotion Form</h2>
        <label className='field'>
          StudentId:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <label className='field'>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label className='field'>
          New Class:
          <input type="text" value={newClass} onChange={(e) => setNewClass(e.target.value)} />
        </label>
        <br />
        <label className='field'>
          New Session:
          <input type="text" value={newSession} onChange={(e) => setNewSession(e.target.value)} />
        </label>
        <br />
        <button onClick={handleGenerateFees} >Generate Fees</button>
      </div>
      <div className='generatedFees'>
        {generatedFees && <p>Generated Fees: {generatedFees}</p>}
      </div>
    </div>

  );
};

export default PromotionForm;
