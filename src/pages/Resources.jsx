import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import './Resources.css';

const Resources = () => {
    const { t } = useTranslation();

    const blogPosts = [
        {
            id: 1,
            title: t('data.blog.1.title'),
            excerpt: t('data.blog.1.excerpt'),
            category: t('data.blog.1.category'),
            date: 'Dec 10, 2024',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
        },
        {
            id: 2,
            title: t('data.blog.2.title'),
            excerpt: t('data.blog.2.excerpt'),
            category: t('data.blog.2.category'),
            date: 'Dec 8, 2024',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop'
        },
        {
            id: 3,
            title: t('data.blog.3.title'),
            excerpt: t('data.blog.3.excerpt'),
            category: t('data.blog.3.category'),
            date: 'Dec 5, 2024',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
        },
        {
            id: 4,
            title: t('data.blog.4.title'),
            excerpt: t('data.blog.4.excerpt'),
            category: t('data.blog.4.category'),
            date: 'Dec 1, 2024',
            image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=600&h=400&fit=crop'
        },
        {
            id: 5,
            title: t('data.blog.5.title'),
            excerpt: t('data.blog.5.excerpt'),
            category: t('data.blog.5.category'),
            date: 'Nov 28, 2024',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
        },
        {
            id: 6,
            title: t('data.blog.6.title'),
            excerpt: t('data.blog.6.excerpt'),
            category: t('data.blog.6.category'),
            date: 'Nov 25, 2024',
            image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop'
        }
    ];

    return (
        <div className="resources-page">
            <Hero
                title={t('resources.heroTitle')}
                subtitle={t('resources.heroSubtitle')}
                primaryButtonText={t('resources.subscribe')}
                primaryButtonLink="/contact"
                secondaryButtonText={t('resources.viewAll')}
                secondaryButtonLink="#blog"
            />

            <section className="blog-section section-padding" id="blog">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            {t('resources.latestArticles')}
                        </h2>
                        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
                            {t('resources.latestArticlesDesc')}
                        </p>
                    </div>

                    <Row>
                        {blogPosts.map((post, index) => (
                            <Col lg={4} md={6} key={post.id} className="mb-4">
                                <div
                                    className="blog-card"
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="blog-image-wrapper">
                                        <img src={post.image} alt={post.title} className="blog-image" />
                                        <span className="blog-category">{post.category}</span>
                                    </div>
                                    <div className="blog-content">
                                        <div className="blog-meta">
                                            <span className="blog-date">{post.date}</span>
                                        </div>
                                        <h3 className="blog-title">{post.title}</h3>
                                        <p className="blog-excerpt">{post.excerpt}</p>
                                        <Link to={`/resources/${post.id}`} className="blog-link">
                                            {t('resources.readMore')}
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Newsletter Section */}
            <section className="newsletter-section section-padding bg-light-red">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="newsletter-box text-center" data-aos="zoom-in">
                                <h2 className="newsletter-title">{t('resources.stayUpdated')}</h2>
                                <p className="newsletter-description">
                                    {t('resources.newsletterDesc')}
                                </p>
                                <form className="newsletter-form">
                                    <input
                                        type="email"
                                        placeholder={t('resources.emailPlaceholder')}
                                        className="newsletter-input"
                                    />
                                    <button type="submit" className="btn btn-primary">
                                        {t('resources.subscribeBtn')}
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Resources;
