import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import TeamCard from '../components/TeamCard';
import { teamData } from '../data/teamData';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './About.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="about-page">
            <Hero
                title={t('about.heroTitle')}
                subtitle={t('about.heroSubtitle')}
                primaryButtonText={t('about.joinTeam')}
                primaryButtonLink="/careers"
                secondaryButtonText={t('about.ourWork')}
                secondaryButtonLink="/portfolio"
            />

            {/* Company Story */}
            <section className="company-story section-padding">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-4 mb-lg-0">
                            <div className="story-content" data-aos="fade-right">
                                <h2 className="section-title">
                                    <span className="gradient-text">{t('about.ourStory')}</span>
                                </h2>
                                <p className="section-description">
                                    {t('about.storyText1')}
                                </p>
                                <p className="section-description">
                                    {t('about.storyText2')}
                                </p>
                                <p className="section-description">
                                    {t('about.storyText3')}
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="story-image" data-aos="fade-left">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                                    alt="Our Team"
                                    className="img-fluid rounded shadow-custom"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mission, Vision, Values */}
            <section className="mvv-section section-padding bg-light-gray">
                <Container>
                    <Row>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="mvv-card" data-aos="fade-up" data-aos-duration="600">
                                <div className="mvv-icon">
                                    <FaBullseye />
                                </div>
                                <h3 className="mvv-title">{t('about.mission')}</h3>
                                <p className="mvv-description">
                                    {t('about.missionDesc')}
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="mvv-card" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                                <div className="mvv-icon">
                                    <FaEye />
                                </div>
                                <h3 className="mvv-title">{t('about.vision')}</h3>
                                <p className="mvv-description">
                                    {t('about.visionDesc')}
                                </p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} className="mb-4">
                            <div className="mvv-card" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                                <div className="mvv-icon">
                                    <FaHeart />
                                </div>
                                <h3 className="mvv-title">{t('about.values')}</h3>
                                <p className="mvv-description">
                                    {t('about.valuesDesc')}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Team Section */}
            <section className="team-section section-padding">
                <Container>
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title" data-aos="fade-up">
                            <span className="gradient-text">{t('about.meetTeam')}</span>
                        </h2>
                        <p className="section-description" data-aos="fade-up" data-aos-delay="100">
                            {t('about.teamDesc')}
                        </p>
                    </div>

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                        className="team-swiper"
                    >
                        {teamData.map((member) => (
                            <SwiperSlide key={member.id} className="h-auto">
                                <TeamCard member={{
                                    ...member,
                                    position: t(`data.team.${member.id}.pos`),
                                    bio: t(`data.team.${member.id}.bio`)
                                }} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </section>


        </div >
    );
};

export default About;
