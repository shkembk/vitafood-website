import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import './WhyVitafood.css';
import factoryImage from '../assets/images/factory.jpg';

const WhyVitafood = () => {
    const benefits = [
        "Established food manufacturer serving international markets since 2020",
        "Certified to meet global food safety and quality requirements",
        "Premium ingredients sourced from trusted suppliers",
        "Flexible production volumes and adaptable product formulations",
        "Continuous product development and innovation",
        "Commitment to ethical standards and sustainable practices"
    ];

    return (
        <section className="section why-vitafood-section">
            <div className="container why-container">
                <div className="why-content">
                    <h2 className="section-title">Why Choose Vitafood</h2>
                    <p className="section-intro">
                        Partnering with Vitafood means choosing reliability, quality, and a team dedicated to your market success.
                    </p>

                    <ul className="benefits-list">
                        {benefits.map((benefit, index) => (
                            <motion.li
                                key={index}
                                className="benefit-item"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="check-icon"><Check size={20} /></span>
                                {benefit}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="why-image-wrapper">
                    <div className="why-image-placeholder">
                        <img src={factoryImage} alt="Vitafood Factory" className="why-main-image" />
                        <div className="why-visual-content">
                            <span>Trusted Manufacturing</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyVitafood;
