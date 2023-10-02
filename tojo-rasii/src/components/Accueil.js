import { Component } from 'react';
import React, { useState } from 'react';

import Navbar from '../pages/Navbar'
import Body_home from '../pages/Body_home'
import Main_home from '../pages/Main_home'
import Footer_home from '../pages/Footer_home'
import Footer from '../pages/Footer'
import Skills from '../pages/Skills'

export class Accueil extends Component {
    render() {
        return (
            <>
                <div>
                    <Navbar />
                    <Body_home />
                    <Main_home />
                    <Skills />
                    <Footer_home />
                    <Footer />
                </div>
            </>
        )
    }
}

export default Accueil
