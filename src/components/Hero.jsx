import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = ({
    title,
    subtitle,
    primaryButtonText = "Get Started",
    primaryButtonLink = "/contact",
    secondaryButtonText = "Learn More",
    secondaryButtonLink = "/about",
    showSecondaryButton = true,
    backgroundImage = null
}) => {
    return (
        <section className="hero" style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="hero-title" data-aos="fade-up" data-aos-duration="800">
                                {title}
                            </h1>
                            <p className="hero-subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                {subtitle}
                            </p>
                            <div className="hero-buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                <Link to={primaryButtonLink} className="btn btn-primary btn-lg">
                                    {primaryButtonText} <FaArrowRight className="ms-2" />
                                </Link>
                                {showSecondaryButton && (
                                    <Link to={secondaryButtonLink} className="btn btn-outline-primary btn-lg">
                                        <FaPlay className="me-2" /> {secondaryButtonText}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </section>
    );
};

export default Hero;
