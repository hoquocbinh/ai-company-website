import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useTranslation, Trans } from 'react-i18next';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import './Home.css';

const Home = () => {
    const { t } = useTranslation();
    const featuredServices = servicesData.slice(0, 4);

    return (
        <div className="home-page">
            <Hero
                title={t('hero.title')}
                subtitle={t('hero.subtitle')}
                primaryButtonText={t('hero.cta')}
                secondaryButtonText={t('hero.ctaSecondary')}
                secondaryButtonLink="/portfolio"
            />

            {/* Stats Section */}


            {/* About Preview Section */}
            <section className="about-preview section-padding bg-light-gray">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="about-image" data-aos="fade-right" data-aos-duration="800">
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
                                    alt="AI Technology"
                                    className="img-fluid rounded shadow-custom"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about-content" data-aos="fade-left" data-aos-duration="800">
                                <h2 className="section-title">
                                    <Trans i18nKey="home.aboutPreview.title" components={{ 1: <span className="gradient-text" /> }} />
                                </h2>
                                <p className="section-description">
                                    {t('home.aboutPreview.desc1')}
                                </p>
                                <p className="section-description">
                                    {t('home.aboutPreview.desc2')}
                                </p>
                                <Link to="/about" className="btn btn-primary mt-3">
                                    {t('home.aboutPreview.btn')}
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Services Section */}
            <section className="services-section section-padding">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            <Trans i18nKey="home.services.title" components={{ 1: <span className="gradient-text" /> }} />
                        </h2>
                        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
                            {t('home.services.subtitle')}
                        </p>
                    </div>
                    <Row>
                        {featuredServices.map((service, index) => (
                            <Col lg={3} md={6} key={service.id} className="mb-4">
                                <ServiceCard service={{
                                    ...service,
                                    title: t(`data.services.${service.id}.title`),
                                    description: t(`data.services.${service.id}.desc`),
                                    features: t(`data.services.${service.id}.features`, { returnObjects: true })
                                }} />
                            </Col>
                        ))}
                    </Row>
                    <div className="text-center mt-5" data-aos="fade-up">
                        <Link to="/services" className="btn btn-outline-primary btn-lg">
                            {t('home.services.btn')}
                        </Link>
                    </div>
                </Container>
            </section>

            {/* Why Choose Us Section */}
            <section className="why-choose-us section-padding bg-light-red">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            <Trans i18nKey="home.whyChoose.title" components={{ 1: <span className="gradient-text" /> }} />
                        </h2>
                        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
                            {t('home.whyChoose.subtitle')}
                        </p>
                    </div>
                    <Row>
                        {[1, 2, 3, 4, 5, 6].map((num, index) => (
                            <Col lg={4} md={6} className="mb-4" key={num}>
                                <div className="feature-box" data-aos="fade-up" data-aos-duration="600" data-aos-delay={index * 100}>
                                    <div className="feature-number">0{num}</div>
                                    <h4 className="feature-title">{t(`home.whyChoose.features.${num}.title`)}</h4>
                                    <p className="feature-description">
                                        {t(`home.whyChoose.features.${num}.desc`)}
                                    </p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="cta-section section-padding">
                <Container>
                    <div className="cta-box" data-aos="zoom-in" data-aos-duration="800">
                        <Row className="align-items-center">
                            <Col lg={8} className="mb-4 mb-lg-0">
                                <h2 className="cta-title">{t('home.cta.title')}</h2>
                                <p className="cta-description">
                                    {t('home.cta.desc')}
                                </p>
                            </Col>
                            <Col lg={4} className="text-lg-end">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    {t('home.cta.btn')}
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;
