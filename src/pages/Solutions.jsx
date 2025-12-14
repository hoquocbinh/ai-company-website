import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import './Solutions.css';

const Solutions = () => {
    const { t } = useTranslation();
    const solutions = [
        {
            id: 1,
            title: 'Healthcare AI',
            description: 'Advanced AI solutions for medical diagnosis, patient care, drug discovery, and healthcare operations optimization.',
            features: ['Medical Image Analysis', 'Predictive Diagnostics', 'Patient Monitoring', 'Drug Discovery AI'],
            icon: '🏥'
        },
        {
            id: 2,
            title: 'Financial Services AI',
            description: 'Intelligent systems for fraud detection, risk assessment, algorithmic trading, and customer service automation.',
            features: ['Fraud Detection', 'Risk Analysis', 'Trading Algorithms', 'Credit Scoring'],
            icon: '💰'
        },
        {
            id: 3,
            title: 'Retail & E-commerce AI',
            description: 'Personalization engines, demand forecasting, inventory optimization, and customer behavior analytics.',
            features: ['Recommendation Systems', 'Demand Forecasting', 'Price Optimization', 'Customer Analytics'],
            icon: '🛒'
        },
        {
            id: 4,
            title: 'Manufacturing AI',
            description: 'Smart manufacturing solutions including quality control, predictive maintenance, and production optimization.',
            features: ['Quality Assurance', 'Predictive Maintenance', 'Process Optimization', 'Supply Chain AI'],
            icon: '🏭'
        },
        {
            id: 5,
            title: 'Education Technology',
            description: 'Adaptive learning platforms, student performance prediction, and personalized education experiences.',
            features: ['Adaptive Learning', 'Performance Analytics', 'Content Recommendation', 'Automated Grading'],
            icon: '📚'
        },
        {
            id: 6,
            title: 'Smart Cities & IoT',
            description: 'AI-powered solutions for traffic management, energy optimization, and urban planning.',
            features: ['Traffic Optimization', 'Energy Management', 'Waste Management', 'Public Safety'],
            icon: '🏙️'
        }
    ];

    return (
        <div className="solutions-page">
            <Hero
                title={t('solutions.heroTitle')}
                subtitle={t('solutions.heroSubtitle')}
                primaryButtonText={t('solutions.discussNeeds')}
                primaryButtonLink="/contact"
                secondaryButtonText={t('solutions.viewCaseStudies')}
                secondaryButtonLink="/portfolio"
            />

            <section className="solutions-section section-padding">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            <span className="gradient-text">{t('solutions.industrySolutions')}</span>
                        </h2>
                        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
                            {t('solutions.industrySolutionsDesc')}
                        </p>
                    </div>

                    <Row>
                        {solutions.map((solution, index) => (
                            <Col lg={6} key={solution.id} className="mb-4">
                                <div
                                    className="solution-card"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="solution-icon">{solution.icon}</div>
                                    <div className="solution-content">
                                        <h3 className="solution-title">{t(`data.solutions.${solution.id}.title`)}</h3>
                                        <p className="solution-description">{t(`data.solutions.${solution.id}.desc`)}</p>
                                        <ul className="solution-features">
                                            {(t(`data.solutions.${solution.id}.features`, { returnObjects: true }) || []).map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section section-padding bg-light-gray">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            {t('solutions.whyChoose')} <span className="gradient-text"></span>
                        </h2>
                    </div>
                    <Row>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="benefit-card" data-aos="zoom-in" data-aos-duration="600">
                                <h4 className="benefit-title">{t('solutions.benefits.domain.title')}</h4>
                                <p className="benefit-description">
                                    {t('solutions.benefits.domain.desc')}
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="benefit-card" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
                                <h4 className="benefit-title">{t('solutions.benefits.results.title')}</h4>
                                <p className="benefit-description">
                                    {t('solutions.benefits.results.desc')}
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="benefit-card" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="200">
                                <h4 className="benefit-title">{t('solutions.benefits.scalable.title')}</h4>
                                <p className="benefit-description">
                                    {t('solutions.benefits.scalable.desc')}
                                </p>
                            </div>
                        </Col>
                        <Col lg={3} md={6} className="mb-4">
                            <div className="benefit-card" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
                                <h4 className="benefit-title">{t('solutions.benefits.compliance.title')}</h4>
                                <p className="benefit-description">
                                    {t('solutions.benefits.compliance.desc')}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Solutions;
