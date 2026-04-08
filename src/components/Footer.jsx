import React from 'react';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import './Footer.css';
import logo from '../assets/images/logowhite.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <img src={logo} alt="Vitafood" className="logo-img" />
                    <p className="footer-desc">
                        Certified food manufacturing and private label solutions for international markets.
                    </p>
                    <div className="social-icons">
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#what-we-do">What We Do</a></li>
                        <li><a href="#products">Product Categories</a></li>
                        <li><a href="#private-label">Private Label</a></li>
                        <li><a href="#2u-brand">2U Brand</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Contact</h4>
                    <ul className="footer-contact">
                        <li><strong>Headquarters:</strong><br />Vitafood Sh.P.K<br />123 Industrial Zone, Europe</li>
                        <li><strong>Phone:</strong><br />+383 44 123 456</li>
                        <li><strong>Email:</strong><br />contact@vitafood.com</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Export</h4>
                    <p className="footer-text">
                        For international distribution and partnership inquiries:
                    </p>
                    <a href="mailto:export@vitafood.com" className="footer-email">export@vitafood.com</a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Vitafood Sh.P.K. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
