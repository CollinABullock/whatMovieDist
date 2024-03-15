import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion";

export default function RandomMovie({ selectedRuntime  }) {
  const [lastSelectedMovieTitle, setLastSelectedMovieTitle] = useState("");
  const [randomMovie, setRandomMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  // setting up states to control the opening of the image modal as well as the source of the actor's image
  const [actorImageModalOpen, setActorImageModalOpen] = useState(false);
  const [actorImageSrc, setActorImageSrc] = useState('');
  const [actorNameSrc, setActorNameSrc] = useState('');
  const [actorIMDBSrc, setActorIMDBSrc] = useState('');
  const [netflixArray, setNetflixArray] = useState([]);
  const [maxArray, setMaxArray] = useState([]);
  const [primeArray, setPrimeArray] = useState([]);
  const [huluArray, setHuluArray] = useState([]);
  const [peacockArray, setPeacockArray] = useState([]);
  const [appleArray, setAppleArray] = useState([]);
  const [disneyArray, setDisneyArray] = useState([]);
  const [paramountArray, setParamountArray] = useState([]);
  const [criterionArray, setCriterionArray] = useState([]);
  const [tubiArray, setTubiArray] = useState([]);

  
 
  useEffect(() => {
    async function fetchNetflixArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/netflixArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setNetflixArray(data);
      } catch (error) {
        console.error('Error fetching Netflix array:', error);
        setNetflixArray([]);
      }
    }
    fetchNetflixArray();
  }, []);

  

  useEffect(() => {
    async function fetchMaxArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/maxArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setMaxArray(data);
      } catch (error) {
        console.error('Error fetching Max array:', error);
        setMaxArray([]);
      }
    }
    fetchMaxArray();
  }, []);

  useEffect(() => {
    async function fetchPrimeArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/primeArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setPrimeArray(data);
      } catch (error) {
        console.error('Error fetching Max array:', error);
        setPrimeArray([]);
      }
    }
    fetchPrimeArray();
  }, []);

  useEffect(() => {
    async function fetchHuluArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/huluArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setHuluArray(data);
      } catch (error) {
        console.error('Error fetching Max array:', error);
        setHuluArray([]);
      }
    }
    fetchHuluArray();
  }, []);

  useEffect(() => {
    async function fetchPeacockArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/peacockArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setPeacockArray(data);
      } catch (error) {
        console.error('Error fetching Max array:', error);
        setPeacockArray([]);
      }
    }
    fetchPeacockArray();
  }, []);

  useEffect(() => {
    async function fetchAppleArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/appleArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setAppleArray(data);
      } catch (error) {
        console.error('Error fetching Max array:', error);
        setAppleArray([]);
      }
    }
    fetchAppleArray();
  }, []);

  useEffect(() => {
    async function fetchDisneyArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/disneyArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setDisneyArray(data);
      } catch (error) {
        console.error('Error fetching Max array:', error);
        setDisneyArray([]);
      }
    }
    fetchDisneyArray();
  }, []);

  useEffect(() => {
    async function fetchParamountArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/paramountArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setParamountArray(data);
      } catch (error) {
        console.error('Error fetching Max array:', error);
        setPeacockArray([]);
      }
    }
    fetchParamountArray();
  }, []);

  useEffect(() => {
    async function fetchCriterionArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/criterionArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setCriterionArray(data);
      } catch (error) {
        console.error('Error fetching Max array:', error);
        setCriterionArray([]);
      }
    }
    fetchCriterionArray();
  }, []);

  useEffect(() => {
    async function fetchTubiArray() {
      try {
        const response = await fetch('https://whatmoviebackend-91243c1c417b.herokuapp.com/tubiArray');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setTubiArray(data);
      } catch (error) {
        console.error('Error fetching Max array:', error);
        setTubiArray([]);
      }
    }
    fetchTubiArray();
  }, []);


  const moviesArray = [...netflixArray, ...maxArray, ...primeArray, ...huluArray,...disneyArray, ...paramountArray, ...appleArray, ...criterionArray, ...tubiArray, ...peacockArray];

  console.log("movies array:", moviesArray);


  
  // Function to handle opening actor's image modal, and the loading of the various details from the array
  const handleActorImageModalOpen = (imageSrc, nameSrc, IMDBSrc) => {
    setActorImageSrc(imageSrc);
    setActorNameSrc(nameSrc);
    setActorIMDBSrc(IMDBSrc);
    setActorImageModalOpen(true);
  };

  // Function to handle closing actor's image modal and to prombtly clear the image src
  const handleActorImageModalClose = () => {
    setActorImageSrc('');
    setActorNameSrc("");
    setActorIMDBSrc("");
    setActorImageModalOpen(false);
  };

 

  const handleRandomMovie = () => {
    window.scroll(0, 0);
    let filtered = []; // Initialize with an empty array
  
    // Construct the filtered array based on selected services
    const selectedServices = JSON.parse(sessionStorage.getItem('selectedServices'));
    if (selectedServices && selectedServices.length > 0) {
      selectedServices.forEach(service => {
        switch (service) {
          case 'Netflix':
            filtered = filtered.concat(netflixArray);
            break;
          case 'Max':
            filtered = filtered.concat(maxArray);
            break;
          case 'Prime':
            filtered = filtered.concat(primeArray);
            break;
          case 'Hulu':
            filtered = filtered.concat(huluArray);
            break;
          case 'Peacock':
            filtered = filtered.concat(peacockArray);
            break;
          case 'Apple':
            filtered = filtered.concat(appleArray);
            break;
          case 'Disney':
            filtered = filtered.concat(disneyArray);
            break;
          case 'Paramount':
            filtered = filtered.concat(paramountArray);
            break;
          case 'Criterion':
            filtered = filtered.concat(criterionArray);
            break;
          case 'Tubi':
            filtered = filtered.concat(tubiArray);
            break;
          default:
            break;
        }
      });
    } else {
      // If no services are selected, use all movies
      filtered = [...moviesArray];
    }
  
    filtered = filtered.filter(movie => movie.runtime <= selectedRuntime);

    filtered = filtered.filter(movie => movie.title !== lastSelectedMovieTitle);
  
    // Filter based on selected genres to avoid
    const selectedGenres = JSON.parse(sessionStorage.getItem('selectedGenres'));
    if (selectedGenres && selectedGenres.length > 0) {
      filtered = filtered.filter(movie =>
        movie.genre && !selectedGenres.some(genre => movie.genre.includes(genre))
      );
    }
  
    // Filter based on preferred genres
    const preferredGenres = JSON.parse(sessionStorage.getItem('preferredGenres'));
    if (preferredGenres && preferredGenres.length > 0) {
      filtered = filtered.filter(movie =>
        movie.genre && preferredGenres.every(genre => movie.genre.includes(genre))
      );
    }
  
    const selectedDirectors = JSON.parse(sessionStorage.getItem("selectedDirectors"));
    if (selectedDirectors && selectedDirectors.length > 0) {
      filtered = filtered.filter(movie =>
          movie.director && !movie.director.some(dir => selectedDirectors.includes(dir.name))
      );
    }
  
    const selectedActors = JSON.parse(sessionStorage.getItem("selectedActors"));
    if (selectedActors && selectedActors.length > 0) {
      filtered = filtered.filter(movie =>
          movie.actors && !movie.actors.some(act => selectedActors.includes(act.name))
      );
    }
  
    // Filter based on preferred directors
    const preferredDirectors = JSON.parse(sessionStorage.getItem('preferredDirectors'));
    if (preferredDirectors && preferredDirectors.length > 0) {
      filtered = filtered.filter(movie =>
        movie.director && movie.director.some(dir => preferredDirectors.includes(dir.name))
      );
    }
  
    const preferredActors = JSON.parse(sessionStorage.getItem('preferredActors'));
    if (preferredActors && preferredActors.length > 0) {
      filtered = filtered.filter(movie =>
        movie.actors && movie.actors.some(act => preferredActors.includes(act.name))
      );
    }
  
    if (filtered.length > 0) {
      const randomIndex = Math.floor(Math.random() * filtered.length);
      const selectedMovie = filtered[randomIndex];
      setRandomMovie(selectedMovie);
      setLastSelectedMovieTitle(selectedMovie.title);
      setAnimationKey(prevKey => prevKey + 1);
    } else {
      window.alert("No movies meet that criteria, please be less picky");
      setRandomMovie(null);
    }
  };
  
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    const truncated = description.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    return truncated.substring(0, lastSpaceIndex) + '...';
  };
  
  


  
  
  const handleDetails = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const renderWatchOnLink = () => {
    if (!randomMovie || !randomMovie.link) return "No link available";
  
    const { link } = randomMovie;
    const url = new URL(link);
    const { hostname } = url;
  
    if (hostname === 'www.netflix.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.vox-cdn.com/thumbor/pNxD2NFOCjbljnMPUSGdkFWeDjI=/0x0:3151x2048/1400x788/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
            alt="Netflix Logo"
            style={{ width: '100px', height: 'auto' }}
          />
        </a>
      );
    } else if (/^((www|play)\.)?max\.com$/.test(hostname)) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2023/04/879441e7-38a1-4c08-97c6-38b5694f00ea_1920x1080.jpg?fit=1200%2C675&quality=89&ssl=1"
          alt="Max Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    } else if (hostname === 'www.amazon.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://www.shutterstock.com/image-vector/chattogram-bangladesh-may-18-2023-600nw-2304763275.jpg"
          alt="Prime Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    } else if (hostname === 'www.hulu.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://wallpapers.com/images/featured/hulu-fxo5g9d2z5nmrq7p.jpg"
          alt="Hulu Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    } else if (hostname === 'www.peacocktv.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://akns-images.eonline.com/eol_images/Entire_Site/20191131/rs_1024x759-191231151709-1024x759.peacock-logo-lp.123119.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top"
          alt="Peacock Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    } else if (hostname === 'tv.apple.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.vox-cdn.com/thumbor/V5762AmEUyH1T3WNIzVbySZ0Mf4=/0x0:1632x918/1200x800/filters:focal(686x329:946x589)/cdn.vox-cdn.com/uploads/chorus_image/image/65608618/Apple_TV_Plus_logo.0.0.jpg"
          alt="Apple TV Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }  else if (hostname === 'www.disneyplus.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://ca-times.brightspotcdn.com/dims4/default/9336457/2147483647/strip/false/crop/1920x1080+0+0/resize/1486x836!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F52%2Fad%2F65a1ea8a41718ef56032d9e14302%2Fdisney-with-studio-tag-copy.jpg"
          alt="Disney Plus Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }   else if (hostname === 'www.paramountplus.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://www.themanual.com/wp-content/uploads/sites/9/2021/04/paramount-plus-logo-tm.jpg?fit=800%2C800&p=1"
          alt="Paramount Plus Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }    else if (hostname === 'www.criterionchannel.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://vhx.imgix.net/criterionchannelchartersu/assets/0a871ff0-6742-42aa-a6f9-377cefa10b42.jpeg?auto=format%2Ccompress&fit=crop&h=720&q=75&w=1280"
          alt="Criterion Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }     else if (hostname === 'tubitv.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="https://variety.com/wp-content/uploads/2024/02/Tubi-Logo.png?w=1000&h=563&crop=1"
          alt="Tubi Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }
    else {
      return (
        <a href={link} target="_blank" style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}>Watch Now</a>
      );
    }
  };

  return (
    <div className='randomCard' style={{ textAlign: "center" }}>
      {randomMovie ? (
        <motion.div
          key={animationKey}
          initial={{ x: -1000, opacity: 0 }} // initial position off-screen to the left
          animate={{ x: 0, opacity: 1 }} // animate to the center of the screen
          transition={{ duration: 0.3, type: "tween" }} // adjust duration as needed
        >
          <Card className="randomCard" style={{ width: "80%", maxHeight: "100%", backgroundColor: "#EC0B43", color: "whitesmoke", borderRadius: "30px"}}>
            <Card.Body>
              <a href={randomMovie.link}>
            <Card.Img 
  src={randomMovie.poster} 
  // Call handleImageLoad when the image is loaded

  style={{ width: '75%', height: '50%', objectFit: 'cover', margin: '0', padding: '0', marginBottom: "20px" }} 
/></a>
              <Card.Text style={{ textAlign: "start", fontFamily: "SignWood"}}>
                <h4 style={{marginBottom: "10px", fontSize: "2em"}}> {truncateDescription(randomMovie.description, 200)}<span onClick={handleDetails} style={{ cursor: 'pointer', fontFamily: "Signwood", textShadow: "2px 2px 2px black", color: "blue", textDecoration: "underline", fontWeight: "bold" }}>More Details</span>
<br />
                    <div style={{margin: "30px", display: "flex", justifyContent: "space-evenly", alignItems: "stretch"}}>
                    {renderWatchOnLink()} <button onClick={handleRandomMovie} style={{ backgroundColor: "red", color: "white", textShadow: "2px 2px 2px black", fontSize: ".55em", width: "40%" }}>I'm not feeling it, give me another</button>
                    </div>
                </h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      ) : (
        <Card style={{backgroundColor: "#58355E", alignItems: "center"}}>
          <h1 className='movieShould' style={{color: "white", textShadow: "2px 2px 2px black"}}>What movie should you watch tonight?</h1>
          <button className="randomMovie" onClick={handleRandomMovie}>Pick a random movie</button>
        </Card>
      )}
      <Modal show={showModal} onHide={handleModalClose} style={{fontFamily: "Signwood"}}>
        <Modal.Header style={{backgroundColor: "#58355E", color: "#E4C3AD", textShadow: "text-shadow: 2px 2px 2px black;"}}>
          <Modal.Title>{randomMovie ? randomMovie.title : 'Movie Title'}</Modal.Title>
          <div className='modal-details'>
            {randomMovie && randomMovie.runtime && (<p>{randomMovie.runtime} minutes</p>)}
            {randomMovie && randomMovie.mpaa && (<p>{randomMovie.mpaa}</p>)}
            {randomMovie && randomMovie.genre && randomMovie.genre.map((genre, index) => (
              <span key={index}>
                {genre}
                {index !== randomMovie.genre.length - 1 && ', '}
              </span>
            ))}
          </div>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: "#58355E", color: "#E4C3AD", textShadow: "text-shadow: 2px 2px 2px black;"}}>
          <p>{randomMovie ? randomMovie.description : 'No description available'}</p>
          {/* Directors Section */}
          {randomMovie && randomMovie.director && (
            <div>
              <h5>Director:</h5>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {randomMovie.director.map((director, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    
                      <img 
                        src={director.image} 
                        alt={director.name} 
                        style={{ width: '120px', height: '100px', objectFit: 'cover' }} 
                        onClick={() => handleActorImageModalOpen(director.image, director.name, director.IMDB)}
                      />
                      <p style={{ marginTop: '5px', fontSize: '14px' }}>{director.name}</p>
                    
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Actors Section */}
          {randomMovie && randomMovie.actors && (
  <div>
    <h5>Actors:</h5>
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      {randomMovie.actors.map((actor, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <img
            src={actor.image}
            alt={actor.name}
            style={{ width: '100px', height: '80px', objectFit: 'cover', cursor: 'pointer' }}
            onClick={() => handleActorImageModalOpen(actor.image, actor.name, actor.IMDB)}
          />
          <p style={{ marginTop: '5px', fontSize: '14px' }}>{actor.name}</p>
        </div>
      ))}
    </div>
  </div>
)}
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: "#58355E", color: "#E4C3AD", textShadow: "text-shadow: 2px 2px 2px black;"}}>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={actorImageModalOpen} onHide={handleActorImageModalClose}>
      <Modal.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: "center" }}>
    <img src={actorImageSrc} alt="Actor" style={{ maxWidth: '100%', maxHeight: '100%' }} /> <br/>
    <h1 style={{ fontFamily: "SignWood", color: "whitesmoke", textShadow: "2px 2px 2px black" }}>{actorNameSrc}</h1>
    <a href={actorIMDBSrc}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="imdb" style={{width: "25%", height: "25%", margin: "0 auto"}} /></a>
  </div>
</Modal.Body>


</Modal>
    </div>
  );
}
