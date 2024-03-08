import './App.css';
import NavBar from './components/navbar';
import RandomMovie from './components/randomMovieCard';
import Footer from './components/footer';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { moviesArray } from './components/movieArray';
import MoviePreferenceComponent from './components/Preferences';

function App() {
  const [selectedRuntime, setSelectedRuntime] = useState(null);
  const [selectedGenres, setSelectedGenres] = useState(null);
  const [preferredGenres, setPreferredGenres] = useState([]); // Change to an empty array
  const [uniqueGenres, setUniqueGenres] = useState([]); // Add uniqueGenres state

  useEffect(() => {
    const genresSet = new Set();
    moviesArray.forEach(movie => {
      if (movie.genre) {
        movie.genre.forEach(genre => {
          genresSet.add(genre);
        });
      }
    });
    const sortedGenres = Array.from(genresSet).sort();
    setUniqueGenres(sortedGenres);
  }, []);

  const handlePreferenceChange = (runtime, genres, preferredGenres) => {
    setSelectedRuntime(runtime);
    setSelectedGenres(genres);
    setPreferredGenres(preferredGenres); // Set preferredGenres state
  };


  return (
    <>



      <NavBar
        data={moviesArray}
        onPreferenceChange={handlePreferenceChange}
        uniqueGenres={uniqueGenres} // Pass uniqueGenres
      />
    
      <div className="container">
        <RandomMovie selectedRuntime={selectedRuntime} selectedGenres={selectedGenres} preferredGenres={preferredGenres} /> {/* Pass preferredGenres */}
      </div>
      <Footer />
    </>
  )
}

export default App;
