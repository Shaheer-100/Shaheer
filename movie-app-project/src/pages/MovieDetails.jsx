import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
    
      return (
          <div style={{padding: '2rem', textAlign: 'center'}}>
                <h1>Movie Details</h1>
                      <p>Details for movie ID: {id}</p>
                            <p>🎬 This would show individual movie record</p>
                                  <Link to="/movies">← Back to Movies</Link>
                                      </div>
                                        );
                                        };

                                        export default MovieDetails;