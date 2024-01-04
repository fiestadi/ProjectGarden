import React from 'react';

const GoogleMap = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090427798437!2d13.37246977664433!3d52.50793613712265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2scz!4v1703797615386!5m2!1sru!2scz"; 

  return (
    <div>
      <iframe
        width='100%'
        height="350"
        loading="lazy"
        allowFullScreen
        src={mapUrl}
        title="Google Map"
      />
    </div>
  );
};

export default GoogleMap;