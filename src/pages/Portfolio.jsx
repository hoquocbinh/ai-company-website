import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import { portfolioData } from '../data/portfolioData';
import './Portfolio.css';

const Portfolio = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Education', 'Customer Service'];

    const filteredProjects = filter === 'All'
        ? portfolioData
        : portfolioData.filter(project => project.category === filter);

    return (
        <div className="portfolio-page">
            <Hero
                title={t('portfolio.heroTitle')}
                subtitle={t('portfolio.heroSubtitle')}
                primaryButtonText={t('portfolio.startProject')}
                primaryButtonLink="/contact"
                secondaryButtonText={t('portfolio.ourServices')}
                secondaryButtonLink="/services"
            />

            <section className="portfolio-section section-padding">
                <Container>
                    {/* Filter Buttons */}
                    <div className="filter-buttons mb-5" data-aos="fade-up">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${filter === category ? 'active' : ''}`}
                                onClick={() => setFilter(category)}
                            >
                                {t(`data.portfolio.categories.${category}`)}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Grid */}
                    <Row>
                        {filteredProjects.map((project) => (
                            <Col lg={4} md={6} key={project.id} className="mb-4">
                                <div className="portfolio-card" data-aos="fade-up" data-aos-duration="600">
                                    <div className="portfolio-image-wrapper">
                                        <img src={project.image} alt={project.title} className="portfolio-image" />
                                        <div className="portfolio-overlay">
                                            <span className="portfolio-category">{project.category}</span>
                                        </div>
                                    </div>
                                    <div className="portfolio-content">
                                        <h3 className="portfolio-title">{t(`data.portfolio.${project.id}.title`)}</h3>
                                        <p className="portfolio-description">{t(`data.portfolio.${project.id}.desc`)}</p>
                                        <div className="portfolio-tech">
                                            {project.technologies.map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                        <div className="portfolio-results">
                                            <strong>Results:</strong> {t(`data.portfolio.${project.id}.results`)}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-5">
                            <p className="text-muted">{t('portfolio.noProjects')}</p>
                        </div>
                    )}
                </Container>
            </section>
        </div>
    );
};

export default Portfolio;
