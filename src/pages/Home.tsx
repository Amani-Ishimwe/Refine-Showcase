import React from 'react';
import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import HowIWork from '../components/HowIWork';
import Writing from '../components/Writing';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';

const Home: React.FC = () => {
    return (
        <>
            <Navigation />
            <Layout>
                <Hero />
                <SelectedWork />
                <HowIWork />
                <Services />
                <Writing />
                <About />
                <Contact />
            </Layout>
        </>
    );
};

export default Home;
