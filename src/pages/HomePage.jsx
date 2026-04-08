import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import ProductCategories from '../components/ProductCategories';
import WhyVitafood from '../components/WhyVitafood';
import PrivateLabel from '../components/PrivateLabel';
import Brand2U from '../components/Brand2U';
import MarketPresence from '../components/MarketPresence';
import CallToAction from '../components/CallToAction';
import CertificationsSection from '../components/CertificationsSection';

const HomePage = () => {
    return (
        <>
            <Hero />
            <WhatWeDo />
            <ProductCategories />
            <WhyVitafood />
            <PrivateLabel />
            <Brand2U />
            <MarketPresence />
            <CertificationsSection />
            <CallToAction />
        </>
    );
};

export default HomePage;
