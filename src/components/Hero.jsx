import React from 'react';
import { ArrowRight, FileText, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';
import heroImage from '../assets/images/hero.png';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="hero-title">
                        Certified Food Manufacturing & <br />
                        <span className="text-highlight">Healthy Snack Solutions</span>
                    </h1>
                    <p className="hero-subtitle">
                        We produce high-quality cereals, bars, snacks, seeds, and superfoods for international markets — combining strict food safety standards, flexible production, and private label expertise.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary btn-lg">
                            Become a Partner <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                        </a>
                        <a href="#private-label" className="btn btn-secondary btn-lg">
                            Private Label Solutions
                        </a>
                    </div>

                    <div className="certifications-strip">
                        <div className="cert-item"><CheckCircle size={16} /> HACCP</div>
                        <div className="cert-item"><CheckCircle size={16} /> IFS Food v8</div>
                        <div className="cert-item"><CheckCircle size={16} /> ISO 9001</div>
                        <div className="cert-item"><CheckCircle size={16} /> HALAL</div>
                        <div className="cert-item"><CheckCircle size={16} /> SMETA</div>
                        <div className="cert-item"><CheckCircle size={16} /> SEDEX</div>
                        <div className="cert-item"><CheckCircle size={16} /> RFA</div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="hero-image-placeholder">
                        <img src={heroImage} alt="Healthy Food Production" className="hero-main-image" />
                        <div className="abstract-shape"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
