import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: t('header.home') },
        { path: '/about', label: t('header.about') },
        { path: '/services', label: t('header.services') },
        { path: '/solutions', label: t('header.solutions') },
        { path: '/portfolio', label: t('header.portfolio') },
        { path: '/resources', label: t('header.resources') },
        { path: '/careers', label: t('header.careers') },
        { path: '/contact', label: t('header.contact') }
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <Navbar expand="lg" className="py-3">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="brand">
                        <span className="brand-icon">AI</span>
                        <span className="brand-text">TechVision</span>
                    </Navbar.Brand>

                    <button
                        className="mobile-toggle d-lg-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <Navbar.Collapse id="navbar-nav" className={mobileMenuOpen ? 'show' : ''}>
                        <Nav className="ms-auto align-items-lg-center">
                            {navLinks.map((link) => (
                                <Nav.Link
                                    key={link.path}
                                    as={Link}
                                    to={link.path}
                                    className={`nav-link-custom ${location.pathname === link.path ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Nav.Link>
                            ))}
                            <Link to="/contact" className="btn btn-primary ms-lg-3 mt-3 mt-lg-0">
                                {t('header.getStarted')}
                            </Link>
                            <LanguageSwitcher />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
