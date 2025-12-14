import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import { FaMapMarkerAlt, FaBriefcase, FaUsers, FaHeart } from 'react-icons/fa';
import './Careers.css';

const Careers = () => {
    const { t } = useTranslation();
    const openPositions = [
        {
            id: 1,
            title: 'Senior Machine Learning Engineer',
            location: 'San Francisco, CA',
            type: 'Full-time',
            department: 'Engineering'
        },
        {
            id: 2,
            title: 'AI Research Scientist',
            location: 'New York, NY',
            type: 'Full-time',
            department: 'Research'
        },
        {
            id: 3,
            title: 'Data Scientist',
            location: 'Remote',
            type: 'Full-time',
            department: 'Data Science'
        },
        {
            id: 4,
            title: 'NLP Engineer',
            location: 'Boston, MA',
            type: 'Full-time',
            department: 'Engineering'
        },
        {
            id: 5,
            title: 'Computer Vision Engineer',
            location: 'Seattle, WA',
            type: 'Full-time',
            department: 'Engineering'
        },
        {
            id: 6,
            title: 'AI Product Manager',
            location: 'San Francisco, CA',
            type: 'Full-time',
            department: 'Product'
        }
    ];

    const benefits = [
        {
            icon: <FaBriefcase />,
            title: 'Competitive Salary',
            description: 'Industry-leading compensation packages with equity options'
        },
        {
            icon: <FaUsers />,
            title: 'Great Team',
            description: 'Work with world-class AI researchers and engineers'
        },
        {
            icon: <FaHeart />,
            title: 'Health & Wellness',
            description: 'Comprehensive health insurance and wellness programs'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Flexible Work',
            description: 'Remote-friendly with flexible working hours'
        }
    ];

    return (
        <div className="careers-page">
            <Hero
                title={t('careers.heroTitle')}
                subtitle={t('careers.heroSubtitle')}
                primaryButtonText={t('careers.viewPositions')}
                primaryButtonLink="#positions"
                secondaryButtonText={t('careers.ourCulture')}
                secondaryButtonLink="#culture"
            />

            {/* Culture Section */}
            <section className="culture-section section-padding" id="culture">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="culture-content" data-aos="fade-right">
                                <h2 className="section-title">
                                    <span className="gradient-text">{t('careers.cultureTitle')}</span>
                                </h2>
                                <p className="section-description">
                                    {t('careers.cultureText1')}
                                </p>
                                <p className="section-description">
                                    {t('careers.cultureText2')}
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="culture-image" data-aos="fade-left">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                    alt="Team Culture"
                                    className="img-fluid rounded shadow-custom"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section section-padding bg-light-gray">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            <span className="gradient-text">{t('careers.whyWork')}</span>
                        </h2>
                    </div>
                    <Row>
                        {benefits.map((benefit, index) => (
                            <Col lg={3} md={6} key={index} className="mb-4">
                                <div
                                    className="benefit-card"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <h4 className="benefit-title">{t(`data.careers.benefits.${index + 1}.title`)}</h4>
                                    <p className="benefit-description">{t(`data.careers.benefits.${index + 1}.desc`)}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Open Positions Section */}
            <section className="positions-section section-padding" id="positions">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            <span className="gradient-text">{t('careers.openPositions')}</span>
                        </h2>
                        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
                            {t('careers.openPositionsDesc')}
                        </p>
                    </div>

                    <Row>
                        {openPositions.map((position, index) => (
                            <Col lg={6} key={position.id} className="mb-4">
                                <div
                                    className="position-card"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    data-aos-delay={index * 50}
                                >
                                    <div className="position-header">
                                        <h3 className="position-title">{t(`data.careers.positions.${position.id}.title`)}</h3>
                                        <span className="position-type">{t(`data.careers.positions.${position.id}.type`)}</span>
                                    </div>
                                    <div className="position-meta">
                                        <span className="position-location">
                                            <FaMapMarkerAlt /> {t(`data.careers.positions.${position.id}.loc`)}
                                        </span>
                                        <span className="position-department">{t(`data.careers.positions.${position.id}.dept`)}</span>
                                    </div>
                                    <Link to="/contact" className="btn btn-outline-primary mt-3">
                                        {t('careers.applyNow')}
                                    </Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Careers;
