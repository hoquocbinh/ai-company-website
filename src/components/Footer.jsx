import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import config from '../config';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: t('header.home') },
        { path: '/about', label: t('header.about') },
        { path: '/services', label: t('header.services') },
        { path: '/portfolio', label: t('header.portfolio') }
    ];

    const services = [
        { path: '/services', label: t('data.services.1.title') },
        { path: '/services', label: t('data.services.2.title') },
        { path: '/services', label: t('data.services.3.title') },
        { path: '/services', label: t('data.services.4.title') }
    ];

    const resources = [
        { path: '/resources', label: t('footer.blog') },
        { path: '/resources', label: t('footer.caseStudies') },
        { path: '/careers', label: t('header.careers') },
        { path: '/contact', label: t('footer.contact') }
    ];

    return (
        <footer className="footer">
            <Container>
                <Row className="footer-main">
                    <Col lg={4} md={6} className="mb-4 mb-lg-0">
                        <div className="footer-brand">
                            <div className="brand">
                                <span className="brand-icon">AI</span>
                                <span className="brand-text">VTech</span>
                            </div>
                            <p className="footer-description">
                                {t('footer.desc')}
                            </p>
                            <div className="social-links">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </Col>

                    <Col lg={2} md={6} className="mb-4 mb-lg-0">
                        <h5 className="footer-title">{t('footer.quickLinks')}</h5>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg={2} md={6} className="mb-4 mb-lg-0">
                        <h5 className="footer-title">{t('footer.services')}</h5>
                        <ul className="footer-links">
                            {services.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg={2} md={6} className="mb-4 mb-lg-0">
                        <h5 className="footer-title">{t('footer.resources')}</h5>
                        <ul className="footer-links">
                            {resources.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </Col>

                    <Col lg={2} md={12}>
                        <h5 className="footer-title">{t('footer.contact')}</h5>
                        <ul className="footer-contact">
                            <li>
                                <FaMapMarkerAlt />
                                <span>{config.contact.address}</span>
                            </li>
                            <li>
                                <FaPhone />
                                <span>{config.contact.phone}</span>
                            </li>
                            <li>
                                <FaEnvelope />
                                <span>{config.contact.email}</span>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <div className="footer-bottom">
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
                            <p className="copyright">
                                {t('footer.rights', { year: currentYear })}
                            </p>
                        </Col>
                        <Col md={6} className="text-center text-md-end">
                            <div className="footer-bottom-links">
                                <Link to="/privacy">{t('footer.privacy')}</Link>
                                <span className="separator">|</span>
                                <Link to="/terms">{t('footer.terms')}</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
