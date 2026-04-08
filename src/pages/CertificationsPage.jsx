import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './CertificationsPage.css';
import mockThumb from '../assets/certificates_thumbnails/mock_certificate.png';
import halalThumb from '../assets/certificates_thumbnails/halal_thumbnail.png';
import haccpThumb from '../assets/certificates_thumbnails/haccp_thumbnail.png';
import iso9001Thumb from '../assets/certificates_thumbnails/iso9001_thumbnail.png';
import ifsThumb from '../assets/certificates_thumbnails/ifs_thumbnail.png';
import rfaThumb from '../assets/certificates_thumbnails/rfa_thumbnail.png';

const certificates = [
    { id: 1, name: 'SGS (ISO 9001)', pdf: '/certificates/iso9001_certificate.pdf', image: iso9001Thumb },
    { id: 2, name: 'RFA', pdf: '/certificates/rfa_certificate.pdf', image: rfaThumb },
    { id: 3, name: 'HACCP', pdf: '/certificates/haccp_certificate.pdf', image: haccpThumb },
    { id: 4, name: 'IFS', pdf: '/certificates/ifs_certificate.pdf', image: ifsThumb },
    { id: 5, name: 'Halal', pdf: '/certificates/halal_certificate.pdf', image: halalThumb },
    { id: 6, name: 'Orthodox Union', pdf: '/certificates/mock_certificate.pdf', image: mockThumb },
];

const CertificationsPage = () => {
    // Scroll to top when loading page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="cert-page">
            <div className="container cert-page-container">
                <motion.div
                    className="cert-page-header"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="cert-page-title">Certifications</h1>
                    <p className="cert-page-subtitle">Click the thumbnail to open PDF.</p>
                </motion.div>

                <div className="cert-grid">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            className="cert-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <a href={cert.pdf} target="_blank" rel="noopener noreferrer" className="cert-link">
                                <div className="cert-image-wrapper">
                                    <img src={cert.image} alt={cert.name} className="cert-image" />
                                    <div className="cert-overlay">
                                        <span>View PDF</span>
                                    </div>
                                </div>
                                <h3 className="cert-name">{cert.name}</h3>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CertificationsPage;
