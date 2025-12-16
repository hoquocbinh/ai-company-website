import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import './AIProjects.css';

const AIProjects = () => {
    const { t } = useTranslation();

    // Projects with category keys matching the translation keys
    const projects = [
        {
            id: 1,
            image: '/assets/projects/HealthChatbot.png',
            category: 'Healthcare'
        },
        {
            id: 2,
            image: '/assets/projects/admissionCounselingChatbot.png',
            category: 'Education'
        },
        {
            id: 3,
            image: '/assets/projects/MCQ.png',
            category: 'Education'
        },
        {
            id: 4,
            image: '/assets/projects/GovernmentSystem.png',
            category: 'Government'
        }
    ];

    return (
        <div className="resources-page">
            <Hero
                title={t('ai_projects.heroTitle')}
                subtitle={t('ai_projects.heroSubtitle')}
                primaryButtonText={t('header.contact')}
                primaryButtonLink="/contact"
            />

            <section className="projects-section section-padding" style={{ padding: '80px 0' }}>
                <Container>
                    <Row>
                        {projects.map((project) => {
                            // Retrieve translated data for the project
                            const projectData = t(`data.ai_projects.${project.id}`, { returnObjects: true });
                            const tags = Array.isArray(projectData.tags) ? projectData.tags : [];

                            return (
                                <Col lg={6} md={6} key={project.id} className="mb-4">
                                    <div className="project-card h-100" data-aos="fade-up" data-aos-duration="600">
                                        <div className="project-image-wrapper">
                                            <img
                                                src={project.image}
                                                alt={projectData.title}
                                                className="project-image"
                                            />
                                            <div className="project-overlay">
                                                <span className="project-category">
                                                    {t(`data.ai_projects.categories.${project.category}`)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="project-content">
                                            <h3 className="project-title">{projectData.title}</h3>
                                            <p className="project-desc">{projectData.desc}</p>

                                            <div className="project-tags">
                                                {tags.map((tag, idx) => (
                                                    <span key={idx} className="tech-tag">{tag}</span>
                                                ))}
                                            </div>

                                            {projectData.results && (
                                                <div className="project-results">
                                                    <strong>Results: </strong>
                                                    {projectData.results}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default AIProjects;
