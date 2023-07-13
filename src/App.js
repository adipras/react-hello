import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Darboe',
      role: 'developer',
      img: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      name: 'Bove',
      role: 'QA',
      img: 'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      name: 'Matic',
      role: 'UI/UX',
      img: 'https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      name: 'Ibanez',
      role: 'software enginer',
      img: 'https://images.pexels.com/photos/1573324/pexels-photo-1573324.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
  ]);
  
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return {...employee, name: newName, role: newRole};
      }

      return employee;
    });
    
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
     const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
     }
     setEmployees([...employees, newEmployee])
  }

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
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee 
                  key={employee.id}
                  id={employee.id }
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img}
                  editEmployee={editEmployee}
                />);
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
