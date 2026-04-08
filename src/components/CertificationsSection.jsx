import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './CertificationsSection.css';
import certificationLogos from '../assets/images/certificationlogos.png';

const CertificationsSection = () => {
    const navigate = useNavigate();

    return (
        <section id="certifications" className="section certifications-home-section">
            <div className="container cert-container">
                <motion.div
                    className="cert-content"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="cert-label">Quality & Trust</span>
                    <h2 className="cert-title">Our Certifications</h2>
                    <p className="cert-desc">
                        At Vitafood, quality is paramount. We adhere to the highest international standards
                        to ensure our products are safe, sustainable, and of the utmost quality.
                        Our comprehensive range of certifications reflects our unwavering commitment to excellence.
                    </p>
                    <button onClick={() => window.scrollTo(0, 0) || navigate('/certifications')} className="btn btn-primary btn-cert">
                        See All Certifications <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </button>
                </motion.div>

                <motion.div
                    className="cert-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <img src={certificationLogos} alt="Certification Logos" className="cert-logos-img" />
                </motion.div>
            </div>
        </section>
    );
};

export default CertificationsSection;
