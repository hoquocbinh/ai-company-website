import { Link } from 'react-router-dom';
import {
    FaBrain, FaComments, FaEye, FaChartLine,
    FaLightbulb, FaCog, FaRobot, FaProjectDiagram
} from 'react-icons/fa';
import './ServiceCard.css';

const iconMap = {
    FaBrain: FaBrain,
    FaComments: FaComments,
    FaEye: FaEye,
    FaChartLine: FaChartLine,
    FaLightbulb: FaLightbulb,
    FaCog: FaCog,
    FaRobot: FaRobot,
    FaProjectDiagram: FaProjectDiagram
};

const ServiceCard = ({ service }) => {
    const IconComponent = iconMap[service.icon] || FaBrain;

    return (
        <div className="service-card" data-aos="fade-up" data-aos-duration="600">
            <div className="service-icon">
                <IconComponent />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            {service.features && (
                <ul className="service-features">
                    {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            )}
            {/* <Link to={`/services#${service.id}`} className="service-link">
                Learn More →
            </Link> */}
        </div>
    );
};

export default ServiceCard;
