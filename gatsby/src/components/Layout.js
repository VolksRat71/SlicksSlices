import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typeography';

export default function Layout({ children }) {
    return (
        <div>
            <GlobalStyles />
            <Typography />
            <Nav />
            {children}
            <Footer />
        </div>
    )
};