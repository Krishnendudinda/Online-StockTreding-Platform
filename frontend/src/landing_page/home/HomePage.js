import react from 'react';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Hero from './Hero';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function HomePage() {
    return (
        <>
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        </>
    );
}