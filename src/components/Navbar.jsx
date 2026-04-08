import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/images/logo.svg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Vitafood Logo" className="logo-img" />
                    </Link>
                </div>

                <div className="desktop-menu">
                    <a href="/#what-we-do" className="nav-link">What We Do</a>
                    <a href="/#products" className="nav-link">Products</a>
                    <a href="/#certifications" className="nav-link">Certifications</a>
                    <a href="/#private-label" className="nav-link">Private Label</a>
                    <a href="/#2u-brand" className="nav-link">Our Brand</a>
                    <a href="/#contact" className="btn btn-primary">
                        Become a Partner <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                    </a>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {isMobileMenuOpen && (
                    <div className="mobile-menu">
                        <a href="/#what-we-do" onClick={() => setIsMobileMenuOpen(false)}>What We Do</a>
                        <a href="/#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
                        <a href="/#certifications" onClick={() => setIsMobileMenuOpen(false)}>Certifications</a>
                        <a href="/#private-label" onClick={() => setIsMobileMenuOpen(false)}>Private Label</a>
                        <a href="/#2u-brand" onClick={() => setIsMobileMenuOpen(false)}>Our Brand</a>
                        <a href="/#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            Become a Partner
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
