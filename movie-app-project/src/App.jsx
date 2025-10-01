import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Movies from './pages/Movies';
import Navbar from './components/Navbar';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
      <Router>
            <div className="App">
                    <Navbar />
                            <Routes>
                                      <Route path="/" element={<Home />} />
                                                <Route path="/about" element={<About />} />
                                                          <Route path="/contact" element={<Contact />} />
                                                                    <Route path="/movies" element={<Movies />} />
                                                                
                                                                          <Route path="/movie/:id" element={<MovieDetails />} />
                                                                            </Routes>
                                                                                  </div>
                                                                                      </Router>
                                                                                        );
                                                                                        }

                                                                                        export default App;
