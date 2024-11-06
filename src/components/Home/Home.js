import React from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar';
function  Home() {
  return(
    <div className={styles.Home}>
      <header>
      <Navbar/>
      </header>
      <main>
      Home Component
      </main>
  </div>
  )
}
  ;

export default Home;
