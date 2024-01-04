import React from 'react';
import styles from './footer.module.css'
import GoogleMap from './MapContent/map';
import CallButton from './CallButton/call';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
library.add(faInstagram,faWhatsapp);

const Footer = () => {
const instagramLink = 'https://tel-ran.de/new-de/imprint';
  return (
    <footer>
      <p className={styles.contact}>Contact</p>
      <div className={styles.footer_container}>
        <div className={styles.content_phone}>
       <CallButton />
       </div>
       <div className={styles.vertical}>
        <p className={styles.text}>Socials</p> <a className={styles.instagramButton} href={instagramLink} target="_blank" rel="noopener noreferrer">
          {/* nooper atribut nedaet dostup k svojstvu. norefer atribut ukazivaet brauzeru ne otpravliat zaholovok = nuzhni dlia ogranichenia atak iz vne*/}
      <FontAwesomeIcon className={styles.instagramButton} icon={['fab', 'instagram']} />
      <FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a>
      </div>
      <div className={styles.content_adress}>
        <p className={styles.text}>Address</p>
        <p className={styles.text_adress}>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
</p>
        </div>
        <div className={styles.vertical}>
          <p className={styles.text}>Working Hours
</p>
<p className={styles.text_adress}>24 hours a day</p>
        </div>
      </div>
    <br />
      <GoogleMap />
    </footer>
  );
};

export default Footer;