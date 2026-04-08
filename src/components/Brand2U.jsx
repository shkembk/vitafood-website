import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import './Brand2U.css';
import brand2uImage from '../assets/images/brand2u.png';

const Brand2U = () => {
    return (
        <section id="2u-brand" className="section brand-section">
            <div className="container brand-container">
                <motion.div
                    className="brand-content"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="brand-label">Our Consumer Brand</span>
                    <h2 className="brand-title">2U — Healthy Living</h2>
                    <p className="brand-desc">
                        2U is Vitafood’s consumer-facing brand, offering healthy, great-tasting foods developed and produced using the same quality, safety, and sourcing standards we apply to all our manufacturing operations.
                    </p>
                    <a href="#" className="btn btn-outline-white">
                        Visit the 2U Website <ExternalLink size={16} style={{ marginLeft: '8px' }} />
                    </a>
                </motion.div>

                <motion.div
                    className="brand-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="product-showcase">
                        <div className="product-item p1">
                            <img src={brand2uImage} alt="2U Brand" />
                        </div>
                        <div className="product-item p2">
                            <img src={brand2uImage} alt="2U Brand" />
                        </div>
                        <div className="product-item p3">
                            <img src={brand2uImage} alt="2U Brand" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Brand2U;
