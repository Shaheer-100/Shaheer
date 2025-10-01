import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav style={navStyle}>
            <h2>🎬 MovieApp</h2>
                  <div style={linkContainer}>
                          <Link to="/" style={linkStyle}>Home</Link>
                                  <Link to="/about" style={linkStyle}>About</Link>
                                          <Link to="/movies" style={linkStyle}>Movies</Link>
                                                  <Link to="/contact" style={linkStyle}>Contact</Link>
                                                        </div>
                                                            </nav>
                                                              );
                                                              };

                                                              const navStyle = {
                                                                display: 'flex',
                                                                  justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                      padding: '1rem 2rem',
                                                                        backgroundColor: '#2c3e50',
                                                                          color: 'white'
                                                                          };

                                                                          const linkContainer = {
                                                                            display: 'flex',
                                                                              gap: '2rem'
                                                                              };

                                                                              const linkStyle = {
                                                                                color: 'white',
                                                                                  textDecoration: 'none',
                                                                                    fontSize: '1.1rem',
                                                                                      fontWeight: 'bold'
                                                                                      };

                                                                                      export default Navbar;