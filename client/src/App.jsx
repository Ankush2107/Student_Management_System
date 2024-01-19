// src/App.js
import StudentTable from './pages/StudentsTable/StudentsTable.jsx';
import PromotionForm from './pages/PromotionForm/PromotionForm.jsx';
import './App.css'

const App = () => {
  return (
      <div className='allfields'>
        <div>
          <StudentTable />
        </div>
        <div>
          <PromotionForm />
        </div>
      </div>
  );
};

export default App;

