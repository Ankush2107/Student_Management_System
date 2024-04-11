import './PromotionForm.css';
import { useState } from 'react';
import axios from 'axios';

const PromotionForm = () => {
  const [name, setName] = useState('');
  const [currentClass, setCurrentClass] = useState('');
  const [currentSession, setCurrentSession] = useState('');
  const [currentFees, setCurrentFees] = useState('');
  // const [newClass, setNewClass] = useState('');
  // const [newSession, setNewSession] = useState('');
  // const [newFees, setNewFees] = useState('');
  const [generatedFees, setGeneratedFees] = useState('');
  const [error, setError] = useState(null);

  // const handleGenerateFees = () => {
  //   try {
  //     if (!currentClass || !currentSession || !currentFees || !newClass || !newSession) {
  //       console.error('Please fill in all fields before generating fees.');
  //       return;
  //     }

  //     if (isNaN(currentClass) || isNaN(currentSession) || isNaN(currentFees) || isNaN(newClass) || isNaN(newSession)) {
  //       console.error('Please enter valid numeric values for all fields.');
  //       return;
  //     }

  //     // Call the API to generate fees for the specified student
  //     fetch(`http://localhost:5000/students/promoteBatch/${currentClass}/${currentSession}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ currentClass, currentSession, currentFees, newClass, newSession }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (!data || !data.updatedStudents || data.updatedStudents.length === 0) {
  //           console.error('Invalid API response:', data);
  //           return;
  //         }

  //         console.log('Batch promotion successful:', data.updatedStudents);

  //         // Set the generated fees for display
  //         setGeneratedFees('Generated Fees: ' + data.updatedStudents[0].currentFees);

  //         // Optionally, you can update the UI to reflect the changes
  //         // (e.g., update the StudentTable component)

  //         clearFields();
  //       })
  //       .catch((error) => console.error('Error promoting batch:', error));
  //   } catch (error) {
  //     console.error('Error promoting batch:', error.message);
  //   }
  // };

  // const clearFields = () => {
  //   setCurrentClass('');
  //   setCurrentSession('');
  //   setCurrentFees('');
  //   setNewClass('');
  //   setNewSession('');
  //   setNewFees('');
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const students = {currentClass, currentSession, currentFees, newClass, newSession};
    try {
      const response = await axios.post(`http://localhost:5000/students/promoteBatch/${currentClass}/${currentSession}`)
      const data = response.data
      if (!response.status === 201) {
        setError(data.error);
    } else {
        setCurrentClass('');
        setCurrentSession('');
        setCurrentFees('');
        // setNewClass('');
        // setNewSession('');
        setError(null);
        console.log('New workout added:', data);
    }
    } catch (error) {
      console.error('Error adding workout:', error.message);
      setError('Error adding workout. Please try again.');
    }
  }

  return (
    // <div>
    //   <div className='inputFrom'>
    //     <h2>Batch Promotion Form</h2>
    //     <label className='field'>
    //       Current Class:
    //       <input type="text" value={currentClass} onChange={(e) => setCurrentClass(e.target.value)} />
    //     </label>
    //     <br />
    //     <label className='field'>
    //       Current Session:
    //       <input type="text" value={currentSession} onChange={(e) => setCurrentSession(e.target.value)} />
    //     </label>
    //     <br />
    //     <label className='field'>
    //       Current Fees:
    //       <input type="text" value={currentFees} onChange={(e) => setCurrentFees(e.target.value)} />
    //     </label>
    //     <br />
    //     <label className='field'>
    //       New Class:
    //       <input type="text" value={newClass} onChange={(e) => setNewClass(e.target.value)} />
    //     </label>
    //     <br />
    //     <label className='field'>
    //       New Session:
    //       <input type="text" value={newSession} onChange={(e) => setNewSession(e.target.value)} />
    //     </label>
    //     <br />
    //     <button onClick={handleGenerateFees}>Generate Fees</button>
    //   </div>
    //   <div className='generatedFees'>
    //     {generatedFees && <p>{generatedFees}</p>}
    //   </div>
    // </div>

    <form className='create' onSubmit={handleSubmit}>
      <h3>Batch Promotion Form</h3>
      <label>Name:</label>
      <input 
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name} 
      />
      <label>Current Class:</label>
      <input 
        type="text"
        onChange={(e) => setCurrentClass(e.target.value)}
        value={currentClass} 
      />
      <label>Current Session:</label>
      <input 
        type="text"
        onChange={(e) => setCurrentSession(e.target.value)}
        value={currentSession} 
      />
      <label>Current Fees:</label>
      <input 
        type="text"
        onChange={(e) => setCurrentFees(e.target.value)}
        value={currentFees} 
      />
      {/* <label>New Class:</label>
      <input 
        type="text"
        onChange={(e) => setNewClass(e.target.value)}
        value={newClass} 
      />
      <label>New Session:</label>
      <input 
        type="text"
        onChange={(e) => setNewSession(e.target.value)}
        value={newSession} 
      /> */}
      <div className='btn'>
        <button>Generate Fees</button>
      </div>
      <div className='generatedFees'>
        {generatedFees && <p>{generatedFees}</p>}
      </div>
    </form>
  );
};

export default PromotionForm;
