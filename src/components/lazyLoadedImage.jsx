import React, { useState, useEffect } from 'react';

const LazyLoadedImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const preLoadImage = new Image();
    preLoadImage.src = './loadingImage.jpg';
    preLoadImage.onload = () => {
      setIsLoading(false);
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {isLoading && (
        <img
          src="./loadingImage.jpg" // Render preloaded loading image
          alt="Loading"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
      )}
      {!isLoaded && (
        <img
          src={`${src}?w=50`} // Render low-quality image initially
          alt={alt}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            filter: 'blur(20px)',
            visibility: isLoading ? 'hidden' : 'visible', // Hide low-quality image if loading image is still being displayed
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        style={{
          width: '100%',
          height: '100%',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in',
          visibility: isLoading ? 'hidden' : 'visible', // Hide actual image until it's loaded
        }}
      />
    </div>
  );
};

export default LazyLoadedImage;
