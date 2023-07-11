import './index.css';
import Employee from './components/Employee.js';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: 'Darboe',
      role: 'developer',
      img: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      name: 'Bove',
      role: 'QA',
      img: 'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      name: 'Matic',
      role: 'UI/UX',
      img: 'https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      name: 'Ibanez',
      role: 'software enginer',
      img: 'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
  ]);

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
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee 
                  key={uuidv4()}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img} 
                />);
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
