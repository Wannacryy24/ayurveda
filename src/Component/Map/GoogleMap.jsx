import React, { useRef, useEffect, useState, useCallback } from 'react';

const AdvancedMap = () => {
  const mapRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false);
  const apiLoadLock = useRef(false);

  // 1. Singleton API loader
  const loadGoogleMapsAPI = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (window.google?.maps?.marker?.AdvancedMarkerElement) {
        resolve();
        return;
      }

      if (apiLoadLock.current) {
        const checkInterval = setInterval(() => {
          if (window.google?.maps?.marker?.AdvancedMarkerElement) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 100);
        return;
      }

      apiLoadLock.current = true;

      const cleanup = () => {
        delete window.initMap;
        if (script && document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }&libraries=marker&v=beta&loading=async&map_ids=${
        import.meta.env.VITE_GOOGLE_MAPS_MAP_ID
      }&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        cleanup();
        reject(new Error('Failed to load Google Maps API'));
      };

      window.initMap = () => {
        if (!window.google?.maps?.marker?.AdvancedMarkerElement) {
          cleanup();
          reject(new Error('AdvancedMarkerElement not available'));
          return;
        }
        cleanup();
        resolve();
      };

      document.head.appendChild(script);
    });
  }, []);

  // 2. Initialize map
  useEffect(() => {
    let map;
    let advancedMarker;

    const initializeMap = async () => {
      try {
        await loadGoogleMapsAPI();

        map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 29.939806509097536, lng: 77.56117075467412 },
          zoom: 15,
          mapId: import.meta.env.VITE_GOOGLE_MAPS_MAP_ID,
        });

        advancedMarker = new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: 29.939806509097536, lng: 77.56117075467412 },
          content: createUniquePinElement(),
        });

        setMapLoaded(true);
      } catch (error) {
        console.error('Map initialization failed:', error);
      }
    };

    initializeMap();

    return () => {
      if (advancedMarker) advancedMarker.map = null;
      if (map) {
        // Properly clean up map instance
        const maps = window.google?.maps;
        if (maps?.event) {
          maps.event.clearInstanceListeners(map);
        }
      }
    };
  }, [loadGoogleMapsAPI]);

const createUniquePinElement = () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
<path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"></path><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"></path><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"></path><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"></path><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"></path>
</svg>
  `;
  return container.firstElementChild;
};


  return (
    <div style={{ position: 'relative', }} className='google_map'>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      {!mapLoaded && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Loading map...
        </div>
      )}
    </div>
  );
};

export default AdvancedMap;