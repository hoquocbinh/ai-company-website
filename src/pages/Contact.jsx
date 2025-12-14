import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <div className="contact-page">
            <Hero
                title={t('contact.heroTitle')}
                subtitle={t('contact.heroSubtitle')}
                primaryButtonText={t('contact.callUs')}
                primaryButtonLink="tel:+15551234567"
                secondaryButtonText={t('contact.ourLocations')}
                secondaryButtonLink="#locations"
                showSecondaryButton={false}
            />

            <section className="contact-section section-padding">
                <Container>
                    <Row>
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="contact-info" data-aos="fade-right">
                                <h2 className="section-title mb-4">
                                    <span className="gradient-text">{t('contact.conversation')}</span>
                                </h2>
                                <p className="section-description mb-4">
                                    {t('contact.conversationDesc')}
                                </p>

                                <div className="contact-details">
                                    <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
                                        <div className="contact-item-icon">
                                            <FaMapMarkerAlt />
                                        </div>
                                        <div className="contact-item-content">
                                            <h5>{t('contact.officeLocation')}</h5>
                                            <p>123 AI Street, Tech City, TC 12345</p>
                                        </div>
                                    </div>

                                    <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
                                        <div className="contact-item-icon">
                                            <FaPhone />
                                        </div>
                                        <div className="contact-item-content">
                                            <h5>{t('contact.phoneNumber')}</h5>
                                            <p>+1 (555) 123-4567</p>
                                        </div>
                                    </div>

                                    <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
                                        <div className="contact-item-icon">
                                            <FaEnvelope />
                                        </div>
                                        <div className="contact-item-content">
                                            <h5>{t('contact.emailAddress')}</h5>
                                            <p>info@aitechvision.com</p>
                                        </div>
                                    </div>

                                    <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
                                        <div className="contact-item-icon">
                                            <FaClock />
                                        </div>
                                        <div className="contact-item-content">
                                            <h5>{t('contact.businessHours')}</h5>
                                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div data-aos="fade-left">
                                <ContactForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Map Section */}
            <section className="map-section" id="locations">
                <Container>
                    <div className="map-placeholder" data-aos="fade-up">
                        <div className="map-content">
                            <h3>{t('contact.globalOffices')}</h3>
                            <p>{t('contact.globalOfficesDesc')}</p>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Contact;
