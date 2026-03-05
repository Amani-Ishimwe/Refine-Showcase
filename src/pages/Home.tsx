import React from 'react';
import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Services from '../components/Services';
import Layout from '../components/Layout';




const Home: React.FC<{ toggleTheme: () => void; currentTheme: 'light' | 'dark' }> = ({ toggleTheme, currentTheme }) => {
    return (
        <>
            <Navigation toggleTheme={toggleTheme} currentTheme={currentTheme} />
            <Layout>
                <Hero />
                <SelectedWork />
                <Services />
                <About />
                <Contact />
            </Layout>

        </>
    );
};


export default Home;
