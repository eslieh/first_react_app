import React from 'react';
import PropTypes from 'prop-types';
import styles from './Errorpage.module.css';
import { useRouteError } from 'react-router-dom';
import Navbar from '../Navbar';
function Errorpage(){
  const error = useRouteError();
  console.log(error)
  return(
    <div className={styles.Errorpage}>
      <header>
        <Navbar/>
      </header>
      <main>
        <h1>Whoops! Something went wrong, try again later</h1>
      </main>
  </div>
  )
};


export default Errorpage;
