import {Footer} from '../components/Footer';
import {Header} from '../components/Header';
import {Main} from '../components/Main';
import React from 'react';
import { Navbar } from '../components/NavBar';

export const  Home =() => {
    return (
        <div className="home">
       
           
        <Header />
       
        <Main />
        <Footer />
        </div>
    );
}
