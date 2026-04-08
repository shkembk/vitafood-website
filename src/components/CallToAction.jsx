import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <section id="contact" className="section cta-section">
            <div className="container">
                <motion.div
                    className="cta-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="cta-content">
                        <h2 className="cta-title">Let’s Work Together</h2>
                        <p className="cta-text">
                            Whether you are a distributor, retailer, or brand owner, Vitafood is your reliable partner for certified food manufacturing and private label solutions.
                        </p>
                        <div className="cta-buttons">
                            <a href="mailto:catalog@vitafood.com" className="btn btn-primary btn-lg">
                                <FileText size={20} style={{ marginRight: '10px' }} />
                                Request Product Catalogue
                            </a>
                            <a href="mailto:export@vitafood.com" className="btn btn-outline">
                                <Mail size={20} style={{ marginRight: '10px' }} />
                                Contact Our Export Team
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
