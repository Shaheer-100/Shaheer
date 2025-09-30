import React, { useState } from 'react';
import './App.css';

function App() {
  // 1. Employee data in state (array of objects)
    const [employees, setEmployees] = useState([
        {
              name: "Mohammed shaheer",
                    age: 24,
                          salary: 50000,
                                designation: "junior devoloper"
                                    },
                                        {
                                              name: "Jane Smith", 
                                                    age: 32,
                                                          salary: 75000,
                                                                designation: "Senior Developer"
                                                                    },
                                                                        {
                                                                              name: "Mike Johnson",
                                                                                    age: 45,
                                                                                          salary: 90000,
                                                                                                designation: "Project Manager"
                                                                                                    },
                                                                                                        {
                                                                                                              name: "Sarah Wilson",
                                                                                                                    age: 26,
                                                                                                                          salary: 45000,
                                                                                                                                designation: "Junior Developer"
                                                                                                                                    }
                                                                                                                                      ]);

                                                                                                                                        return (
                                                                                                                                            <div className="App">
                                                                                                                                                  <h1>Employee Database</h1>
                                                                                                                                                        
                                                                                                                                                              {/* Display data in UI */}
                                                                                                                                                                    <div className="employee-container">
                                                                                                                                                                            {employees.map((employee, index) => (
                                                                                                                                                                                      <div key={index} className="employee-card">
                                                                                                                                                                                                  <h3>{employee.name}</h3>
                                                                                                                                                                                                              <p><strong>Age:</strong> {employee.age}</p>
                                                                                                                                                                                                                          <p><strong>Salary:</strong> ${employee.salary}</p>
                                                                                                                                                                                                                                      <p><strong>Designation:</strong> {employee.designation}</p>
                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                        ))}
                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                    export default App;
  
