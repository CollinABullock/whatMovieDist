// LazyLoadedImage.js

import React, { useState } from 'react';

const LazyLoadedImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!isLoaded && (
        <img
          src={`${src}?w=50`} // Render low-quality image initially
          alt={alt}
          style={{ position: 'absolute', width: '100%', height: '100%', filter: 'blur(20px)' }}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        style={{ width: '100%', height: '100%', opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
      />
    </div>
  );
};

export default LazyLoadedImage;
