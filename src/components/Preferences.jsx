import React, { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Modal from 'react-bootstrap/Modal';
import { motion } from 'framer-motion';
import LazyLoadedImage from './lazyLoadedImage';



export default function MoviePreferenceComponent({ onPreferenceChange }) {
  const [runtime, setRuntime] = useState(sessionStorage.getItem('selectedRuntime') || 240);
  const [selectedGenres, setSelectedGenres] = useState(JSON.parse(sessionStorage.getItem('selectedGenres')) || []);
  const [preferredGenres, setPreferredGenres] = useState(JSON.parse(sessionStorage.getItem('preferredGenres')) || []);
  const [preferredDecades, setPreferredDecades] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [uniqueGenres, setUniqueGenres] = useState([]);
  const [isStreamingServicesOpen, setStreamingServicesOpen] = useState(false); // State for streaming services visibility
  const [isRuntimeOpen, setIsRuntimeOpen] = useState(false); 
  const [isPreferredGenresOpen, setIsPreferredGenresOpen] = useState(false);
  const [isPreferredDecadesOpen, setIsPreferredDecadesOpen] = useState(false);
  const [isSelectedGenresOpen, setIsSelectedGenresOpen] = useState(false);
  const [isDirectorOpen, setIsDirectorOpen] = useState(false);
  const [directorBSearch, setDirectorBSearch] = useState('');
  const [isSelectedDirectorOpen, setIsSelectedDirectorOpen] = useState(false);
  const [isSelectedActorOpen, setIsSelectedActorOpen] = useState(false);
  const [isActorOpen, setIsActorOpen] = useState(false);
  const [directorSearch, setDirectorSearch] = useState('');
  const [actorSearch, setActorSearch] = useState('');
  const [actorBSearch, setActorBSearch] = useState('');
  const [filteredDirectors, setFilteredDirectors] = useState([]);
  const [filteredActors, setFilteredActors] = useState([]);
  const [filteredBActors, setFilteredBActors] = useState([]);
  const [filteredBDirectors, setFilteredBDirectors] = useState([]);
  const [preferredDirectors, setPreferredDirectors] = useState([]);
  const [preferredActors, setPreferredActors] = useState([]);
  const [selectedDirectors, setSelectDirectors] = useState([]);
  const [selectedActors, setSelectedActors] = useState([]);
  const [selectedModalDirector, setSelectedModalDirector] = useState(null);
  const [selectedModalActor, setSelectedModalActor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActorModalOpen, setIsActorModalOpen] = useState(false);
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
  const [imagesLoaded, setImagesLoaded] = useState(false);


    
    
    

 

  

  const handleModalDirectorClick = (directorName) => {
    // Set the new director name as the selectedModalDirector
    setSelectedModalDirector(directorName);
    
    // Open the modal
    setIsModalOpen(true);
  };

  const handleModalActorClick = (actorName) => {
    // Set the new director name as the selectedModalDirector
    setSelectedModalActor(actorName);
  
    // Open the modal
    setIsActorModalOpen(true);
  };

 
  const closeActorModal = () => {
    setIsActorModalOpen(false);
    setSelectedModalActor([]);
  };
   
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

  const data = [
    ...netflixArray,
    ...maxArray,
    ...primeArray,
    ...huluArray,
    ...peacockArray,
    ...appleArray,
    ...disneyArray,
    ...paramountArray,
    ...criterionArray,
    ...tubiArray

  ]
  
  const filterMoviesBySelectedModalDirector = () => {
    if (!selectedModalDirector) {
      return []; // Return an empty array if selectedModalDirector is not defined
    }
  
    return data.filter(movie =>
      (movie.director ?? []).some(director => director.name === selectedModalDirector)
    );
  };
  
  const handleActorSearch = (event) => {
    const searchTerm = event.target.value.trim().toLowerCase(); // Remove whitespace and convert to lowercase
    
    const flattenedActors = data.reduce((acc, movie) => {
      if (movie.actors) {
        movie.actors.forEach(actor => {
          acc.push(actor); // Push the entire actor object
        });
      }
      return acc;
    }, []);
  
    const uniqueActors = new Set(); // Set to keep track of unique actors
    const filtered = searchTerm === '' ?
      [] :
      flattenedActors.filter(actor => {
        if (!actor || !actor.name) {
          return false; // Skip this iteration if actor or actor's name is undefined
        }
        const lowerCaseName = actor.name.trim().toLowerCase(); // Remove whitespace and convert to lowercase
        // Check if actor's name includes search term and if it's not already in uniqueActors
        if (lowerCaseName.includes(searchTerm) && !uniqueActors.has(lowerCaseName)) {
          uniqueActors.add(lowerCaseName); // Add actor's name to set
          return true;
        }
        return false;
      });
  
    setFilteredActors(filtered);
    setActorSearch(event.target.value);
  };

  const filterMoviesBySelectedModalActor = () => {
    if (!selectedModalActor) {
      return []; // Return an empty array if selectedModalDirector is not defined
    }
  
    return data.filter(movie =>
      (movie.actors ?? []).some(actor => actor.name === selectedModalActor)
    );
  };

  const filteredActorModalMovies = filterMoviesBySelectedModalActor();

  
  const handleActorBSearch = (event) => {
    const searchTerm = event.target.value.trim().toLowerCase(); // Remove whitespace and convert to lowercase
    
    const flattenedActors = data.reduce((acc, movie) => {
      if (movie.actors) {
        movie.actors.forEach(actor => {
          acc.push(actor); // Push the entire actor object
        });
      }
      return acc;
    }, []);
  
    const uniqueActors = new Set(); // Set to keep track of unique actors
    const filtered = searchTerm === '' ?
      [] :
      flattenedActors.filter(actor => {
        if (!actor || !actor.name) {
          return false; // Skip this iteration if actor or actor's name is undefined
        }
        const lowerCaseName = actor.name.trim().toLowerCase(); // Remove whitespace and convert to lowercase
        // Check if actor's name includes search term and if it's not already in uniqueActors
        if (lowerCaseName.includes(searchTerm) && !uniqueActors.has(lowerCaseName)) {
          uniqueActors.add(lowerCaseName); // Add actor's name to set
          return true;
        }
        return false;
      });
  
    setFilteredBActors(filtered);
    setActorBSearch(event.target.value);
  };
  
  
  



  const filteredModalMovies = filterMoviesBySelectedModalDirector();

  
  const handleDirectorBSearch = (event) => {
    const searchBTerm = event.target.value.trim().toLowerCase(); // Remove whitespace and convert to lowercase
    const flattenedBDirectors = data.reduce((acc, movie) => {
      if (movie.director) {
        acc.push(...movie.director);
      }
      return acc;
    }, []);

  
    const uniqueBDirectors = new Set(); // Set to keep track of unique directors
    const filteredB = searchBTerm === '' ?
      [] :
      flattenedBDirectors.filter(director => {
        const lowerCaseName = director.name.trim().toLowerCase(); // Remove whitespace and convert to lowercase
        // Check if director's name includes search term and if it's not already in uniqueDirectors
        if (lowerCaseName.includes(searchBTerm) && !uniqueBDirectors.has(lowerCaseName)) {
          uniqueBDirectors.add(lowerCaseName); // Add director's name to set
          return true;
        }
        return false;
      });
  
    setFilteredBDirectors(filteredB);
    setDirectorBSearch(event.target.value);
  };

  
  
  const handleDirectorSearch = (event) => {
    const searchTerm = event.target.value.trim().toLowerCase(); // Remove whitespace and convert to lowercase
    const flattenedDirectors = data.reduce((acc, movie) => {
      if (movie.director) {
        acc.push(...movie.director);
      }
      return acc;
    }, []);

  
    const uniqueDirectors = new Set(); // Set to keep track of unique directors
    const filtered = searchTerm === '' ?
      [] :
      flattenedDirectors.filter(director => {
        const lowerCaseName = director.name.trim().toLowerCase(); // Remove whitespace and convert to lowercase
        // Check if director's name includes search term and if it's not already in uniqueDirectors
        if (lowerCaseName.includes(searchTerm) && !uniqueDirectors.has(lowerCaseName)) {
          uniqueDirectors.add(lowerCaseName); // Add director's name to set
          return true;
        }
        return false;
      });
  
    setFilteredDirectors(filtered);
    setDirectorSearch(event.target.value);
  };
  


  useEffect(() => {
    const storedPreferredDirectors = JSON.parse(sessionStorage.getItem('preferredDirectors')) || [];
    setPreferredDirectors(storedPreferredDirectors);
  }, []);

  useEffect(() => {
    const storedPreferredActors = JSON.parse(sessionStorage.getItem('preferredActors')) || [];
    setPreferredActors(storedPreferredActors);
  }, []);

  useEffect(() => {
    const storedSelectedDirectors = JSON.parse(sessionStorage.getItem('selectedDirectors')) || [];
    setSelectDirectors(storedSelectedDirectors);
  }, []);

  useEffect(() => {
    const storedSelectedActors = JSON.parse(sessionStorage.getItem('selectedActors')) || [];
    setSelectedActors(storedSelectedActors);
  }, []);

  // Update sessionStorage whenever preferredDirectors change
  useEffect(() => {
    sessionStorage.setItem('preferredDirectors', JSON.stringify(preferredDirectors));
  }, [preferredDirectors]);

  useEffect(() => {
    sessionStorage.setItem('preferredActors', JSON.stringify(preferredActors));
  }, [preferredActors]);

  useEffect(() => {
    sessionStorage.setItem('selectedDirectors', JSON.stringify(selectedDirectors));
  }, [selectedDirectors]);

  useEffect(() => {
    sessionStorage.setItem('selectedActors', JSON.stringify(selectedActors));
  }, [selectedActors]);
  
  // Define handleDirectorClick function
  const handleDirectorClick = (directorName) => {
    // Toggle director selection
    const isSelected = preferredDirectors.includes(directorName);
    if (isSelected) {
      // Remove director from preferredDirectors array
      const updatedDirectors = preferredDirectors.filter(director => director !== directorName);
      setPreferredDirectors(updatedDirectors);
    } else {
      // Add director to preferredDirectors array
      const updatedDirectors = [...preferredDirectors, directorName];
      setPreferredDirectors(updatedDirectors);
    }
  };



  


  const handleSelectedDirectorClick = (directorName) => {
    // Toggle director selection
    const isSelected = selectedDirectors.includes(directorName);
    if (isSelected) {
      // Remove director from preferredDirectors array
      const updatedSelectedDirectors = selectedDirectors.filter(director => director !== directorName);
      setSelectDirectors(updatedSelectedDirectors);
    } else {
      // Add director to preferredDirectors array
      const updatedSelectedDirectors = [...selectedDirectors, directorName];
      setSelectDirectors(updatedSelectedDirectors);
    }
  };

  const handleSelectedActorClick = (actorName) => {
    // Toggle director selection
    const isSelected = selectedActors.includes(actorName);
    if (isSelected) {
      // Remove director from preferredDirectors array
      const updatedSelectedActors = selectedActors.filter(actor => actor !== actorName);
      setSelectedActors(updatedSelectedActors);
    } else {
      // Add director to preferredDirectors array
      const updatedSelectedActors = [...selectedActors, actorName];
      setSelectedActors(updatedSelectedActors);
    }
  };

  // define handle actor click
  const handleActorClick = (actorName) => {
    // Toggle director selection
    const isSelected = preferredActors.includes(actorName);
    if (isSelected) {
      // Remove actor from preferredActors array
      const updatedActors = preferredActors.filter(actor => actor !== actorName);
      setPreferredActors(updatedActors);
    } else {
      // Add actor to preferredActors array
      const updatedActors = [...preferredActors, actorName];
      setPreferredActors(updatedActors);
    }
  };
  

  useEffect(() => {
    if (data && data.length > 0) {
      onPreferenceChange(runtime, selectedGenres);
      const genresSet = new Set();
      data.forEach(movie => {
        if (movie.genre) {
          movie.genre.forEach(genre => {
            genresSet.add(genre);
          });
        }
      });
      const sortedGenres = Array.from(genresSet).sort();
      setUniqueGenres(sortedGenres);
    }
  }, [data, onPreferenceChange, runtime, selectedGenres]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedGenres(prevSelectedGenres => [...prevSelectedGenres, value]);
      setPreferredGenres(prevPreferredGenres => prevPreferredGenres.filter(genre => genre !== value)); // Remove from preferredGenres if present
    } else {
      setSelectedGenres(prevSelectedGenres => prevSelectedGenres.filter(genre => genre !== value));
    }
  };
  
  const handlePreferredCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setPreferredGenres(prevPreferredGenres => [...prevPreferredGenres, value]);
      setSelectedGenres(prevSelectedGenres => prevSelectedGenres.filter(genre => genre !== value)); // Remove from selectedGenres if present
    } else {
      setPreferredGenres(prevPreferredGenres => prevPreferredGenres.filter(genre => genre !== value));
    }
  };

  const handlePreferredDecadesCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setPreferredDecades(prevPreferredDecades => [...prevPreferredDecades, value]); // Corrected here
      
    } else {
      setPreferredDecades(prevPreferredDecades => prevPreferredDecades.filter(decade => decade !== value)); // Corrected here
    }
  };



  const renderModalWatchOnLink = (movie) => {
    console.log("modal render movie:", movie);
    if (!movie || !movie.link) return "No link available";

  
      const { link } = movie;
      const url = new URL(link);
      const { hostname } = url;
  
  
    if (hostname === 'www.netflix.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src="./images/streamingServices/netflixLogo.jpeg"
            alt="Netflix Logo"
            style={{ width: '100px', height: 'auto' }}
          />
        </a>
      );
    } else if (/^((www|play)\.)?max\.com$/.test(hostname)) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="./images/streamingServices/maxLogo.webp"
          alt="Max Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    } else if (hostname === 'www.amazon.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="./images/streamingServices/primeLogo.webp"
          alt="Prime Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    } else if (hostname === 'www.hulu.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="./images/streamingServices/huluLogo.jpg"
          alt="Hulu Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    } else if (hostname === 'www.peacocktv.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="./images/streamingServices/peacockLogo.avif"
          alt="Peacock Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    } else if (hostname === 'tv.apple.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="./images/streamingServices/appleLogo.png"
          alt="Apple TV Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }  else if (hostname === 'www.disneyplus.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="./images/streamingServices/disneyLogo.jpeg"
          alt="Disney Plus Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }   else if (hostname === 'www.paramountplus.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="./images/streamingServices/paramountLogo.jpg"
          alt="Paramount Plus Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }    else if (hostname === 'www.criterionchannel.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="./images/streamingServices/criterionLogo.webp"
          alt="Criterion Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }     else if (hostname === 'tubitv.com') {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="./images/streamingServices/tubiLogo.jpg"
          alt="Tubi Logo"
          style={{ width: '100px', height: 'auto' }}
        />
        </a>
      );
    }
    else {
      return (
        <a href={link} target="_blank" style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer' }}>Collin messed up.</a>
      );
    }
  };

  
  
  useEffect(() => {
    // Update sessionStorage whenever selectedGenres or preferredGenres change
    sessionStorage.setItem('selectedGenres', JSON.stringify(selectedGenres));
    sessionStorage.setItem('preferredGenres', JSON.stringify(preferredGenres));
    sessionStorage.setItem("preferredDecades", JSON.stringify (preferredDecades));
  }, [selectedGenres, preferredGenres, preferredDecades]);

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setRuntime(value);
    sessionStorage.setItem('selectedRuntime', value);
  };

  

  const streamingServices = [
    { name: 'Netflix', logo: './images/streamingServices/netflixLogo.jpeg'},
    { name: 'Max', logo: './images/streamingServices/maxLogo.webp' },
    { name: 'Prime', logo: './images/streamingServices/primeLogo.webp' },
    { name: 'Hulu', logo: './images/streamingServices/huluLogo.jpg' },
    { name: "Peacock", logo: "./images/streamingServices/peacockLogo.avif" },
    { name: "Apple", logo: "./images/streamingServices/appleLogo.png"},
    { name: "Disney", logo: "./images/streamingServices/disneyLogo.jpeg"},
    { name: "Paramount", logo: "./images/streamingServices/paramountLogo.jpg"} ,
    { name: "Criterion", logo: "./images/streamingServices/criterionLogo.webp"},
    { name: "Tubi", logo: "./images/streamingServices/tubiLogo.jpg"}
  ];

  const decades = [
    "1920's", "1930's", "1940's", "1950's", "1960's", "1970's", "1980's", "1990's", "2000's", "2010's", "2020's"
  ]

  const handleServiceClick = (serviceName) => {
    setSelectedServices(prevSelectedServices => {
      const updatedServices = prevSelectedServices.includes(serviceName) ?
        prevSelectedServices.filter(service => service !== serviceName) :
        [...prevSelectedServices, serviceName];
      
      // Store the updated selectedServices array in sessionStorage
      sessionStorage.setItem('selectedServices', JSON.stringify(updatedServices));
  
      return updatedServices;
    }
    )
    
    ;
  };

 
  
// Sort directors alphabetically by last name
const directorSet = new Set();

const sortedDirectors = data
  // Filter out movies without directors
  .filter(movie => movie.director && movie.director.length > 0)
  // Extract and sort director names alphabetically by last name
  .flatMap(movie => movie.director)
  .sort((a, b) => {
    const lastNameA = a.name.split(' ').pop(); // Get last name of director A
    const lastNameB = b.name.split(' ').pop(); // Get last name of director B
    return lastNameA.localeCompare(lastNameB); // Compare last names
  })
  // Filter out duplicate director names
  .filter(director => {
    if (!directorSet.has(director.name)) {
      directorSet.add(director.name);
      return true;
    }
    return false;
  });

  const actorSet = new Set();


  // filter actors by last name
  const sortedActors = data
  // Filter out movies without actors
  .filter(movie => movie.actors && movie.actors.length > 0)
  // Extract and sort actor names alphabetically by last name
  .flatMap(movie => movie.actors)
  .filter(actor => actor.name && actor.image) // Filter out actors without name or image
  .sort((a, b) => {
    // Check if name property exists before splitting
    const lastNameA = a.name ? a.name.split(' ').pop() : ''; // Get last name of actor A
    const lastNameB = b.name ? b.name.split(' ').pop() : ''; // Get last name of actor B
    return lastNameA.localeCompare(lastNameB); // Compare last names
  })
  // Filter out duplicate actor names
  .filter(actor => {
    if (!actorSet.has(actor.name)) {
      actorSet.add(actor.name);
      return true;
    }
    return false;
  });




const closeModal = () => {
  setIsModalOpen(false);
  setSelectedModalDirector([]);
};

return (
  <div style={{ width: '100%', padding: '0 10px' }}>
  {/* Collapsible streaming services section */}
  <div style={{ marginBottom: '30px', width: "100%", border: '1px solid #ccc', padding: '15px' }}>
  <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }} onClick={() => setStreamingServicesOpen(!isStreamingServicesOpen)}>
<h4 style={{ marginRight: '5px' }}>Which streaming services do you currently have?</h4>
{isStreamingServicesOpen ? <BsChevronUp style={{"boxShadow": "5px 5px 5px green", "margin": "10px"}}/> : <BsChevronDown style={{"boxShadow": "5px 5px 5px gred", "margin": "10px"}} />} {/* Display the arrow icon based on the state */}
</div>

  {isStreamingServicesOpen && (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
      {streamingServices.map(service => (
        <div style={{ position: 'relative', display: 'inline-block' }} key={service.name}>
          {/* Streaming service items */}
          <img
            className='streaming-service-img'
            src={service.logo}
            alt={service.name}
            style={{
              width: '100%',
              maxWidth: '220px',
              height: '100px',
              objectFit: "cover",
              cursor: "pointer",
              filter: selectedServices.includes(service.name) ? "none" : "sepia(100%) hue-rotate(90deg)"
            }}
            onClick={() => handleServiceClick(service.name)}
          />
          {selectedServices.includes(service.name) && (
            <div style={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              backgroundColor: 'green',
              borderRadius: '50%',
              padding: '3px',
              zIndex: '1'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )}
</div>

<div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
  <div
    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }}
    onClick={() => setIsRuntimeOpen(!isRuntimeOpen)}
  >
    <h4 style={{ marginRight: '5px' }}>What's the longest movie you're down to watch?</h4>
    {isRuntimeOpen ? <BsChevronUp style={{ boxShadow: '5px 5px 5px green', margin: '10px' }} /> : <BsChevronDown style={{ boxShadow: '5px 5px 5px gred', margin: '10px' }} />}
    {/* Display the arrow icon based on the state */}
  </div>
  {isRuntimeOpen && (
    <div>
      <p>{runtime} minutes</p>
      <input
        type="range"
        id="runtimeSlider"
        name="runtime"
        min="90"
        max="240"
        step="15"
        value={runtime}
        onChange={handleSliderChange}
      />
    </div>
  )}
</div>

{/* start selected genre section */}

<div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
<div
    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }}
    onClick={() => setIsPreferredDecadesOpen(!isPreferredDecadesOpen)}
  >
  <h4>Any decade you'd like to see a movie from?</h4>
  {isPreferredDecadesOpen ? <BsChevronUp style={{ boxShadow: '5px 5px 5px green', margin: '10px' }} /> : <BsChevronDown style={{ boxShadow: '5px 5px 5px gred', margin: '10px' }} />}
  </div>
  {isPreferredDecadesOpen && (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
  {decades.map(decade => (
    <label key={decade} style={{ display: 'flex', alignItems: 'center', fontSize: "2em"}}>
      <input
        type="checkbox"
        value={decade}
        checked={preferredDecades.includes(decade)}
        onChange={handlePreferredDecadesCheckboxChange}
      />
      {decade}
    </label>
  ))}
</div>
  )}
</div>

<div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
<div
    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }}
    onClick={() => setIsPreferredGenresOpen(!isPreferredGenresOpen)}
  >
  <h4>What kind of movie <span style={{ color: 'red', fontSize: '1.2em', textDecoration: 'underline' }}>DO</span> you want to see?</h4>
  {isPreferredGenresOpen ? <BsChevronUp style={{ boxShadow: '5px 5px 5px green', margin: '10px' }} /> : <BsChevronDown style={{ boxShadow: '5px 5px 5px gred', margin: '10px' }} />}
  </div>
  {isPreferredGenresOpen && (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
  {uniqueGenres.map(genre => (
    <label key={genre} style={{ display: 'flex', alignItems: 'center'}}>
      <input
        type="checkbox"
        value={genre}
        checked={preferredGenres.includes(genre)}
        onChange={handlePreferredCheckboxChange}
      />
      {genre}
    </label>
  ))}
</div>
  )}
</div>



{/* Starting selected genres section */}

<div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
<div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }} onClick={() => setIsSelectedGenresOpen(!isSelectedGenresOpen)}>
  <h4>What kind of movie <span style={{ color: 'red', fontSize: '1.2em', textDecoration: 'underline' }}>DON'T</span> you want to see?</h4>
  {isSelectedGenresOpen ? <BsChevronUp style={{"boxShadow": "5px 5px 5px green", "margin": "10px"}}/> : <BsChevronDown style={{"boxShadow": "5px 5px 5px gred", "margin": "10px"}} />} {/* Display the arrow icon based on the state */}
  </div>
  {isSelectedGenresOpen && (
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
    {uniqueGenres.filter(genre => !preferredGenres.includes(genre)).map(genre => (
      <label key={genre} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          value={genre}
          checked={selectedGenres.includes(genre)}
          onChange={handleCheckboxChange}
        />
        {genre}
      </label>
    ))}
  </div>
  )}
</div>
  <div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }} onClick={() => setIsDirectorOpen(!isDirectorOpen)}>
    <h4>Any directors you<span style={{ color: 'red', fontSize: '1.2em', textDecoration: 'underline' }}> ARE</span>  fond of?</h4>
      {isDirectorOpen ? <BsChevronUp style={{ boxShadow: '5px 5px 5px green', margin: '10px' }} /> : <BsChevronDown style={{ boxShadow: '5px 5px 5px red', margin: '10px' }} />}
    </div>
    {isDirectorOpen && (
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <input
          type="text"
          placeholder="Search directors..."
          value={directorSearch}
          onChange={handleDirectorSearch}
          style={{ marginBottom: '10px' }}
        />
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', maxWidth: "80%", margin: "0 auto", justifyContent: "center" }}>
        {(!directorSearch || filteredDirectors.length === 0) ? (
            // Check if directors array is not empty before rendering
            sortedDirectors.map(director => (
              <motion.div
              key={director.name}
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Slide in from the left
              transition={{ duration: 1 }}
              style={{ marginBottom: '20px' }} // Add margin bottom to create spacing between rows
              staggerChildren={0.1} // Stagger the animation of the children elements
            >
              <div
                className='filtered-director-item'
                key={director.name}
                style={{ textAlign: 'center' }}
              >
                <div style={{ position: 'relative', display: 'inline-block', maxWidth: "100%" }}>
                  {/* Image rendering */}
                  {director.image && (
                    <React.Fragment>
           
                      <div style={{display: "flex", alignItems: "center"}}>
                      <img
                        className='filtered-director-img'
                        src={director.image}
                        alt={director.name}
                        onClick={() => handleDirectorClick(director.name)}
                        style={{ width: '170px', height: '150px', objectFit: "cover", margin: "0 auto" }}
                      />
                      {/* Conditional rendering for the checkmark */}
                      {preferredDirectors.includes(director.name) && (
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                          padding: '3px',
                          zIndex: '1'
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        </div>
                        
                      )}
                      </div>
                     
                    </React.Fragment>
                  )}
                  {/* Display director's name */}
                  <p onClick={() => handleDirectorClick(director.name)} style={{ margin: '0', color: preferredDirectors.includes(director.name) ? 'green' : 'gray' }}>{director.name}</p>
                </div>
                <p
        style={{ margin: '5px', color: 'gray', cursor: 'pointer' }}
        onClick={() => handleModalDirectorClick(director.name)}
      >
        Their Films
      </p>
      
              </div>
              </motion.div>
            ))
            
          ) : (
            // Render filtered directors based on search query
            filteredDirectors.map(director => (
              
              <div
                className='filtered-director-item'
                
                key={director.name}
                style={{ textAlign: 'center', margin: "20px"}}
              >
                <div style={{ position: 'relative', display: 'inline-block', maxWidth: "100%" }}>
                  {/* Image rendering */}
                  {director.image && (
                    <React.Fragment>
                      <img
                      onClick={() => handleDirectorClick(director.name)}
                        className='filtered-director-img'
                        src={director.image}
                        alt={director.name}
                        style={{ width: '200px', height: '150px', objectFit: "cover", marginBottom: '10px' }}
                      />
                      {/* Conditional rendering for the checkmark */}
                      {preferredDirectors.includes(director.name) && (
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                          padding: '3px',
                          zIndex: '1'
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                  {/* Display director's name */}
                  <p onClick={() => handleDirectorClick(director.name)} style={{ margin: '0', color: preferredDirectors.includes(director.name) ? 'green' : 'gray' }}>{director.name}</p>
                 
                </div>
                <p
        style={{ margin: '0', color: 'gray', cursor: 'pointer' }}
        onClick={() => handleModalDirectorClick(director.name)}
      >
        Their Films
      </p>
              </div>
              
            ))
          )}
        </div>
      </div>
      </div>
    )}
      
      </div>

      {/* START OF SELECTED DIRECTORS SECTION, DIRECTORS THEY WANT TO AVOID */}

      <div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
      <div>

      <Modal show={isModalOpen} style={{ color: "#E4C3AD", textShadow: "2px 2px 2px black", fontFamily: "Signwood", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0 auto", textAlign: "center"}}>
      <div style={{backgroundColor: "#58355E"}}>
  <h1>{selectedModalDirector}</h1>
  <div className="movie-grid" >
    {filteredModalMovies
      .slice() // Create a copy of the array to avoid mutating the original
      .sort((a, b) => {
        // Function to check if a year is valid
        const isValidYear = year => /^\d+$/.test(year);
        
        // Sort movies by year of release, handling missing or invalid years
        if (isValidYear(a.year) && isValidYear(b.year)) {
          return parseInt(a.year) - parseInt(b.year);
        } else if (isValidYear(a.year)) {
          return -1; // Place movies with missing years at the end
        } else if (isValidYear(b.year)) {
          return 1; // Place movies with missing years at the end
        } else {
          return 0; // Keep the order unchanged if both years are missing
        }
      })
      .reduce((acc, movie) => {
        // Filtering out duplicates based on title
        const key = movie.title.toLowerCase(); // Using lowercase for case-insensitive comparison
        if (!acc.seenTitles.has(key)) {
          acc.seenTitles.add(key);
          acc.uniqueMovies.push(movie);
        }
        return acc;
      }, { seenTitles: new Set(), uniqueMovies: [] })
      .uniqueMovies
      .map(movie => (
        <div style={{ width: "100%", padding: "10px" }} key={movie.title}>
        <div style={{ border: "5px solid black", borderRadius: "10px", overflow: "hidden" }}>
          <a href={movie.link} target="_blank" rel="noopener noreferrer">
            <LazyLoadedImage src={movie.poster} alt={movie.title} style={{ width: "100%", height: "auto" }} />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a href={movie.link} target="_blank" rel="noopener noreferrer">
              <h2 style={{ margin: '10px' }}>{movie.title} on </h2>
            </a>
            {renderModalWatchOnLink(movie)}
          </div>
        </div>
      </div>
      ))}
  </div>
  <button onClick={closeModal}>Close</button>
  </div>
</Modal>

<Modal show={isActorModalOpen} style={{ color: "#E4C3AD", textShadow: "2px 2px 2px black", fontFamily: "Signwood", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0 auto", textAlign: "center"}}>
  <div style={{backgroundColor: "#58355E"}}>
  <h1>{selectedModalActor}</h1>
  <div className="movie-grid"  >
    {filteredActorModalMovies
            .slice() // Create a copy of the array to avoid mutating the original
            .sort((a, b) => {
              // Function to check if a year is valid
              const isValidYear = year => /^\d+$/.test(year);
              
              // Sort movies by year of release, handling missing or invalid years
              if (isValidYear(a.year) && isValidYear(b.year)) {
                return parseInt(a.year) - parseInt(b.year);
              } else if (isValidYear(a.year)) {
                return -1; // Place movies with missing years at the end
              } else if (isValidYear(b.year)) {
                return 1; // Place movies with missing years at the end
              } else {
                return 0; // Keep the order unchanged if both years are missing
              }
            })
            .reduce((acc, movie) => {
              // Filtering out duplicates based on title
              const key = movie.title.toLowerCase(); // Using lowercase for case-insensitive comparison
              if (!acc.seenTitles.has(key)) {
                acc.seenTitles.add(key);
                acc.uniqueMovies.push(movie);
              }
              return acc;
            }, { seenTitles: new Set(), uniqueMovies: [] })
            .uniqueMovies
            .map(movie => (
              <div style={{ width: "100%", padding: "10px" }} key={movie.title}>
              <div style={{ border: "5px solid black", borderRadius: "10px", overflow: "hidden" }}>
                <a href={movie.link} target="_blank" rel="noopener noreferrer">
                  <LazyLoadedImage src={movie.poster} alt={movie.title} style={{ width: "100%", height: "auto" }} />
                </a>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <a href={movie.link} target="_blank" rel="noopener noreferrer">
                    <h2 style={{ margin: '10px' }}>{movie.title} on </h2>
                  </a>
                  {renderModalWatchOnLink(movie)}
                </div>
              </div>
            </div>
              
            ))}
  </div>
  <button onClick={closeActorModal}>Close</button>
  </div>
</Modal> 
  </div>

  {/* start selectedDirector section */}

    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }} onClick={() => setIsSelectedDirectorOpen(!isSelectedDirectorOpen)}>
    <h4>Any Directors you<span style={{ color: 'red', fontSize: '1.2em', textDecoration: 'underline' }}> ARE NOT</span>  fond of?</h4>
      {isSelectedDirectorOpen ? <BsChevronUp style={{ boxShadow: '5px 5px 5px green', margin: '10px' }} /> : <BsChevronDown style={{ boxShadow: '5px 5px 5px red', margin: '10px' }} />}
    </div>
    {isSelectedDirectorOpen && (
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <input
          type="text"
          placeholder="Search Directors..."
          value={directorBSearch}
          onChange={handleDirectorBSearch}
          style={{ marginBottom: '10px' }}
        />
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', maxWidth: "80%", margin: "0 auto", justifyContent: "center" }}>
        {(!directorBSearch || filteredBDirectors.length === 0) ? (
            // Check if directors array is not empty before rendering
            sortedDirectors.map(director => (
              <motion.div
              key={director.name}
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Slide in from the left
              transition={{ duration: 1 }}
              style={{ marginBottom: '20px' }} // Add margin bottom to create spacing between rows
              staggerChildren={0.1} // Stagger the animation of the children elements
            >
              <div
                className='filtered-director-item'
                onClick={() => handleSelectedDirectorClick(director.name)}
                key={director.name}
                style={{ textAlign: 'center' }}
              >
                <div style={{ position: 'relative', display: 'inline-block', maxWidth: "100%" }}>
                  {/* Image rendering */}
                  {director.image && (
                    <React.Fragment>
                      <img
                      onClick={() => handleSelectedDirectorClick(director.name)}
                        className='filtered-director-img'
                        src={director.image}
                        alt={director.name}
                        style={{ width: '170px', height: '150px', objectFit: "cover", marginBottom: '10px' }}
                      />
                      {/* Conditional rendering for the checkmark */}
                      {selectedDirectors.includes(director.name) && (
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                          padding: '3px',
                          zIndex: '1'
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                  {/* Display director's name */}
                  <p onClick={() => handleSelectedDirectorClick(director.name)} style={{ margin: '0', color: preferredDirectors.includes(director.name) ? 'green' : 'gray' }}>{director.name}</p>
                  
                </div>
                <p
        style={{ margin: '0', color: 'gray', cursor: 'pointer' }}
        onClick={() => handleModalDirectorClick(director.name)}
      >
        Their Films
      </p>
      
              </div>
              
              </motion.div>


              
            ))
            
            
          ) : (
            // Render filtered directors based on search query
            filteredBDirectors.map(director => (
              
              <div
                className='filtered-director-item'
               
                key={director.name}
                style={{ textAlign: 'center', margin: "20px" }}
              >
                <div style={{ position: 'relative', display: 'inline-block', maxWidth: "100%" }}>
                  {/* Image rendering */}
                  {director.image && (
                    <React.Fragment>
                      <img
                       onClick={() => handleSelectedDirectorClick(director.name)}
                        className='filtered-director-img'
                        src={director.image}
                        alt={director.name}
                        style={{ width: '200px', height: '150px', objectFit: "cover", marginBottom: '10px' }}
                      />
                      {/* Conditional rendering for the checkmark */}
                      {selectedDirectors.includes(director.name) && (
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                          padding: '3px',
                          zIndex: '1'
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                  {/* Display director's name */}
                  <p  onClick={() => handleSelectedDirectorClick(director.name)} style={{ margin: '0', color: selectedDirectors.includes(director.name) ? 'green' : 'gray' }}>{director.name}</p>
                </div>
                <p
        style={{ margin: '0', color: 'gray', cursor: 'pointer' }}
        onClick={() => handleModalDirectorClick(director.name)}
      >
        Their Films
      </p>
              </div>
            ))

          )}
        </div>
        
      </div>
      </div>
    )}
    
    
      </div>

      

      {/* end selected directors section */}
      {/* start preferred actors section, the section for actors they want to include */}

      <div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }} onClick={() => setIsActorOpen(!isActorOpen)}>
    <h4>Any actors you<span style={{ color: 'red', fontSize: '1.2em', textDecoration: 'underline' }}> ARE</span>  fond of?</h4>
      {isActorOpen ? <BsChevronUp style={{ boxShadow: '5px 5px 5px green', margin: '10px' }} /> : <BsChevronDown style={{ boxShadow: '5px 5px 5px red', margin: '10px' }} />}
    </div>
    {isActorOpen && (
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <input
          type="text"
          placeholder="Search actors..."
          value={actorSearch}
          onChange={handleActorSearch} 
          style={{ marginBottom: '10px' }}
        />
        </div>
        
 
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', maxWidth: "80%", margin: "0 auto" }}>
        {(!actorSearch || filteredActors.length === 0) ? (
            // Check if actors array is not empty before rendering
            sortedActors.map(actor => (
              <motion.div
              key={actor.name}
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Slide in from the left
              transition={{ duration: 1 }}
              style={{ marginBottom: '20px' }} // Add margin bottom to create spacing between rows
              staggerChildren={0.1} // Stagger the animation of the children elements
            >
              <div
                className='filtered-actor-item'
                key={actor.name}
                style={{ textAlign: 'center' }}
              >
                <div style={{ position: 'relative', display: 'inline-block', maxWidth: "100%" }}>
                  {/* Image rendering */}
                  {actor.image && (
                    <React.Fragment>
                      <div style={{display: "flex", alignItems: "center"}}>
                      <img
                        className='filtered-actor-img'
                        onClick={() => handleActorClick(actor.name)}
                        src={actor.image}
                        alt={actor.name}
                        style={{ width: '170px', height: '150px', objectFit: "cover", marginBottom: '10px', margin: "0 auto" }}
                      />
                      {/* Conditional rendering for the checkmark */}
                      {preferredActors.includes(actor.name) && (
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                          padding: '3px',
                          zIndex: '1'
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        </div>
                        
                      )}
                      </div>
                    </React.Fragment>
                  )}
                  {/* Display actor's name */}
                  <p  onClick={() => handleActorClick(actor.name)} style={{ margin: '0', color: preferredActors.includes(actor.name) ? 'green' : 'gray' }}>{actor.name}</p>
                </div>
                <p
        style={{ margin: '0', color: 'gray', cursor: 'pointer' }}
        onClick={() => handleModalActorClick(actor.name)}
      >
        Their Films
      </p>
              </div>
              </motion.div>
            ))
            
          ) : (
            // Render filtered actors based on search query
            filteredActors.map(actor => (
              <motion.div
              key={actor.name}
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Slide in from the left
              transition={{ duration: 1 }}
              style={{ marginBottom: '20px' }} // Add margin bottom to create spacing between rows
              staggerChildren={0.1} // Stagger the animation of the children elements
            >
              <div
                className='filtered-actor-item'
                key={actor.name}
                style={{ textAlign: 'center' }}
              >
                <div style={{ position: 'relative', display: 'inline-block', maxWidth: "100%", margin: "20px" }}>
                  {/* Image rendering */}
                  {actor.image && (
                    <React.Fragment>
                      <img
                        className='filtered-director-img'
                        onClick={() => handleActorClick(actor.name)}
                        src={actor.image}
                        alt={actor.name}
                        style={{ width: '200px', height: '150px', objectFit: "cover", marginBottom: '10px' }}
                      />
                      {/* Conditional rendering for the checkmark */}
                      {preferredActors.includes(actor.name) && (
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                          padding: '3px',
                          zIndex: '1'
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        </div>

                      )}
                    </React.Fragment>
                  )}
                  {/* Display actor's name */}
                  <p onClick={() => handleActorClick(actor.name)} style={{ margin: '0', color: preferredActors.includes(actor.name) ? 'green' : 'gray' }}>{actor.name}</p>
                </div>
                <p
        style={{ margin: '0', color: 'gray', cursor: 'pointer' }}
        onClick={() => handleModalActorClick(actor.name)}
      >
        Their Films
      </p>
              </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    )}
  
    
      </div>

      {/* start selected actors sections, where they put in actors they'd prefer not to see*/}

      <div  style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
    <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginBottom: '10px' }} onClick={() => setIsSelectedActorOpen(!isSelectedActorOpen)}>
    <h4>Any Actors you<span style={{ color: 'red', fontSize: '1.2em', textDecoration: 'underline' }}> ARE NOT</span>  fond of?</h4>
      {isSelectedActorOpen ? <BsChevronUp style={{ boxShadow: '5px 5px 5px green', margin: '10px' }} /> : <BsChevronDown style={{ boxShadow: '5px 5px 5px red', margin: '10px' }} />}
    </div>
    {isSelectedActorOpen && (
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        <input
          type="text"
          placeholder="Search Actors..."
          onChange={handleActorBSearch}
          style={{ marginBottom: '10px' }}
        />
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', maxWidth: "80%", margin: "0 auto", justifyContent: "center" }}>
        {(!actorBSearch || filteredBActors.length === 0) ? (
            // Check if directors array is not empty before rendering
            sortedActors.map(actor => (
              
              
              <div
                className='filtered-director-item'
              
                key={actor.name}
                style={{ textAlign: 'center' }}
              >
                          
   
      
   
                <div style={{ position: 'relative', display: 'inline-block', maxWidth: "100%" }}>
                  {/* Image rendering */}
                  {actor.image && (
                    <React.Fragment>
                      <img
                        onClick={() => handleSelectedActorClick(actor.name)}
                        className='filtered-director-img'
                        src={actor.image}
                        alt={actor.name}
                        style={{ width: '170px', height: '150px', objectFit: "cover", marginBottom: '10px' }}
                      />
                      {/* Conditional rendering for the checkmark */}
                      {selectedActors.includes(actor.name) && (
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                          padding: '3px',
                          zIndex: '1'
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                  {/* Display director's name */}
                  <p   onClick={() => handleSelectedActorClick(actor.name)} style={{ margin: '0', color: selectedActors.includes(actor.name) ? 'green' : 'gray' }}>{actor.name}</p>
                </div>
                <p
        style={{ margin: '0', color: 'gray', cursor: 'pointer' }}
        onClick={() => handleModalActorClick(actor.name)}
      >
        Their Films
      </p>
              </div>
            ))
            
          ) : (
            // Render filtered directors based on search query
            filteredBActors.map(actor => (
              
              <div
                className='filtered-director-item'
                key={actor.name}
                style={{ textAlign: 'center' }}
              >
                <div style={{ position: 'relative', display: 'inline-block', maxWidth: "100%" }}>
                  {/* Image rendering */}
                  {actor.image && (
                    <React.Fragment>
                      <img
                       onClick={() => handleSelectedActorClick(actor.name)}
                        className='filtered-director-img'
                        src={actor.image}
                        alt={actor.name}
                        style={{ width: '200px', height: '150px', objectFit: "cover", marginBottom: '10px' }}
                      />
                      {/* Conditional rendering for the checkmark */}
                      {selectedActors.includes(actor.name) && (
                        <div style={{
                          position: 'absolute',
                          top: '-10px',
                          right: '-10px',
                          backgroundColor: 'green',
                          borderRadius: '50%',
                          padding: '3px',
                          zIndex: '1'
                        }}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="#FFFFFF" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                          </svg>
                        </div>
                      )}
                    </React.Fragment>
                  )}
                  {/* Display director's name */}
                  <p  onClick={() => handleSelectedActorClick(actor.name)} style={{ margin: '0', color: selectedActors.includes(actor.name) ? 'green' : 'gray' }}>{actor.name}</p>
                </div>
                <p
        style={{ margin: '0', color: 'gray', cursor: 'pointer' }}
        onClick={() => handleModalActorClick(actor.name)}
      >
        Their Films
      </p>
              </div>
            ))
          )}
        </div>
        
   
      </div>
      </div>
    )}
    
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button
    onClick={() => {
      sessionStorage.clear();
      setSelectedGenres([]);
      setPreferredGenres([]);
      setIsPreferredDecadesOpen([]);
      setPreferredDecades([]);
      setRuntime(240);
      setSelectedServices([]);
      setPreferredDirectors([]);
      setPreferredActors([]);
      setIsActorOpen(false);
      setIsDirectorOpen(false);
      setIsSelectedActorOpen(false);
      setIsSelectedDirectorOpen(false);
      setActorBSearch("");
      setActorSearch("");
      setDirectorBSearch("");
      setDirectorSearch("");
      window.alert("Preferences have been reset. Happy viewing!");
      window.location.reload();
    }}
    style={{ fontSize: "2em", backgroundColor: "red" }}
  >
    Reset Preferences
  </Button>
</div>
      </div>);

   

}