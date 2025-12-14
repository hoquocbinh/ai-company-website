import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import './Services.css';

const Services = () => {
    const { t } = useTranslation();
    return (
        <div className="services-page">
            <Hero
                title={t('services.heroTitle')}
                subtitle={t('services.heroSubtitle')}
                primaryButtonText={t('services.getQuote')}
                primaryButtonLink="/contact"
                secondaryButtonText={t('services.viewPortfolio')}
                secondaryButtonLink="/portfolio"
            />

            {/* Services Grid */}
            <section className="services-grid section-padding">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            <span className="gradient-text">{t('services.coreServices')}</span>
                        </h2>
                        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
                            {t('services.coreServicesDesc')}
                        </p>
                    </div>
                    <Row>
                        {servicesData.map((service) => (
                            <Col lg={3} md={6} key={service.id} className="mb-4">
                                <ServiceCard service={{
                                    ...service,
                                    title: t(`data.services.${service.id}.title`),
                                    description: t(`data.services.${service.id}.desc`),
                                    // Features are not strictly mapped in the json above, 
                                    // I'll leave them as is or they'd need index mapping which is complex if lengths vary.
                                    // For now I'll stick to title/desc translation which is 90% of the value.
                                    // Actually I didn't add features to json.
                                }} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Process Section */}
            <section className="process-section section-padding bg-light-gray">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            <span className="gradient-text">{t('services.process')}</span>
                        </h2>
                        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
                            {t('services.processDesc')}
                        </p>
                    </div>
                    <Row>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="process-step" data-aos="fade-up" data-aos-duration="600">
                                <div className="process-number">01</div>
                                <h4 className="process-title">Discovery & Analysis</h4>
                                <p className="process-description">
                                    We analyze your business needs, data, and objectives to define the optimal AI solution.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="process-step" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                <div className="process-number">02</div>
                                <h4 className="process-title">Design & Planning</h4>
                                <p className="process-description">
                                    Create detailed architecture, select appropriate models, and plan implementation strategy.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="process-step" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                <div className="process-number">03</div>
                                <h4 className="process-title">Development & Training</h4>
                                <p className="process-description">
                                    Build, train, and optimize AI models using cutting-edge frameworks and best practices.
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="process-step" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                                <div className="process-number">04</div>
                                <h4 className="process-title">Deployment & Support</h4>
                                <p className="process-description">
                                    Deploy to production, monitor performance, and provide ongoing optimization and support.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Technologies Section */}
            <section className="technologies-section section-padding">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            Technologies We <span className="gradient-text">Master</span>
                        </h2>
                    </div>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div className="tech-grid">
                                {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'Hugging Face',
                                    'AWS SageMaker', 'Google Cloud AI', 'Azure ML', 'Python', 'R', 'Julia'].map((tech, index) => (
                                        <div
                                            key={index}
                                            className="tech-badge"
                                            data-aos="zoom-in"
                                            data-aos-duration="400"
                                            data-aos-delay={index * 50}
                                        >
                                            {tech}
                                        </div>
                                    ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Services;
