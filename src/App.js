import './App.css';
import Employee from './components/employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
              type='text'
              onChange={(e) => {
                setRole(e.target.value);
              }}
           />
          <Employee name='Dhian' role='mother' />
          <Employee name='Alea' role={role } />
          <Employee name='Annisa' />
          <Employee name='Areta' />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
