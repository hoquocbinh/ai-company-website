import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import { FaCheckCircle } from 'react-icons/fa';
import './Courses.css';

const Courses = () => {
    const { t } = useTranslation();

    const courses = [
        {
            id: 1,
            image: '/assets/courses/1_AITool.png'
        },
        {
            id: 2,
            image: '/assets/courses/2_IntroDataScience.png'
        },
        {
            id: 3,
            image: '/assets/courses/3_ApplyMachineLearning.png'
        },
        {
            id: 4,
            image: '/assets/courses/4_Visualization.png'
        }
    ];

    return (
        <div className="careers-page">
            <Hero
                title={t('courses.heroTitle')}
                subtitle={t('courses.heroSubtitle')}
                primaryButtonText={t('courses.enrollNow')}
                primaryButtonLink="/contact"
            />

            {/* Header Section */}
            <section className="section-padding bg-light" style={{ padding: '80px 0 40px' }}>
                <Container>
                    <div className="section-header text-center">
                        <h2 className="section-title mb-3">
                            <span className="gradient-text">{t('courses.viewCourses')}</span>
                        </h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
                            {t('courses.heroSubtitle')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* Courses List - Full Width Sections */}
            <div className="courses-list w-100">
                {courses.map((course, index) => {
                    const features = t(`data.courses.${course.id}.features`, { returnObjects: true });
                    const hasFeatures = Array.isArray(features);
                    const isEven = index % 2 === 0;

                    // Alternating backgrounds: Custom requested "light grey"
                    // Using existing variables or fallbacks
                    const bgColor = isEven ? 'var(--light-gray, #F9FAFB)' : 'var(--white, #FFFFFF)';

                    return (
                        <section
                            key={course.id}
                            className="course-section section-padding py-5"
                            style={{ backgroundColor: bgColor }}
                        >
                            <Container>
                                <Row className="align-items-start">
                                    {/* Image Column */}
                                    <Col lg={6} className={`mb-4 mb-lg-0 ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
                                        <div className="course-image pe-lg-4" data-aos={isEven ? "fade-right" : "fade-left"} data-aos-duration="800">
                                            <img
                                                src={course.image}
                                                alt={t(`data.courses.${course.id}.title`)}
                                                className="img-fluid rounded shadow-lg"
                                                style={{ width: '100%', objectFit: 'cover', minHeight: '300px' }}
                                            />
                                        </div>
                                    </Col>

                                    {/* Content Column */}
                                    <Col lg={6} className={isEven ? 'order-lg-2' : 'order-lg-1'}>
                                        <div className="course-content ps-lg-4" data-aos={isEven ? "fade-left" : "fade-right"} data-aos-duration="800">
                                            <h3 className="course-title fw-bold text-danger mb-3 fs-3">
                                                {t(`data.courses.${course.id}.title`)}
                                            </h3>
                                            <p className="course-description text-muted mb-4 fs-6" style={{ lineHeight: '1.7' }}>
                                                {t(`data.courses.${course.id}.desc`)}
                                            </p>

                                            {hasFeatures && (
                                                <div className="course-features mt-4">
                                                    <h5 className="mb-3 fw-bold">{t('courses.courseContent')}</h5>
                                                    <ul className="list-unstyled">
                                                        {features.map((feature, idx) => (
                                                            <li key={idx} className="mb-2 d-flex align-items-center text-dark">
                                                                <FaCheckCircle className="text-danger me-3 flex-shrink-0" size={18} />
                                                                <span>{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    );
                })}
            </div>
        </div>
    );
};

export default Courses;
