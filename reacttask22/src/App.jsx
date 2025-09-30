import { useState } from 'react'
import './App.css'

function App() {
  // 1. Array of objects in state
    const [users, setUsers] = useState([
        { id: 1, name: 'Mohammed shaheer', role: 'Developer' },
            { id: 2, name: 'Bob', role: 'Designer' },
                { id: 3, name: 'Charlie', role: 'Manager' },
                    { id: 4, name: 'Diana', role: 'Tester' }
                      ])

                        // Function to update second index (index 1)
                          const updateSecondUser = () => {
                              const updatedUsers = [...users] // Create copy
                                  updatedUsers[1] = { 
                                        ...updatedUsers[1], 
                                              name: 'mazin', 
                                                    role: 'junior Designer' 
                                                        }
                                                            setUsers(updatedUsers)
                                                              }

                                                                return (
                                                                    <div className="App">
                                                                          <h1>Array Update Example</h1>
                                                                                <p><strong>Task 22.1:</strong> Update second index of array</p>
                                                                                      
                                                                                            <button onClick={updateSecondUser} className="update-btn">
                                                                                                    Update Second User (Index 1)
                                                                                                          </button>

                                                                                                                <div className="user-list">
                                                                                                                        {users.map((user, index) => (
                                                                                                                                  <div key={user.id} className="user-card">
                                                                                                                                              <h3>{user.name}</h3>
                                                                                                                                                          <p><strong>Role:</strong> {user.role}</p>
                                                                                                                                                                      <p><strong>Array Index:</strong> {index}</p>
                                                                                                                                                                                  <p><strong>ID:</strong> {user.id}</p>
                                                                                                                                                                                            </div>
                                                                                                                                                                                                    ))}
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                )
                                                                                                                                                                                                                }

                                                                                                                                                                                                                export default App 