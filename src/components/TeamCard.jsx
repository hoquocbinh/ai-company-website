import { FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import './TeamCard.css';

const TeamCard = ({ member }) => {
    return (
        <div className="team-card" data-aos="fade-up" data-aos-duration="600">
            <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-overlay">
                    <div className="team-social">
                        {member.social.linkedin && (
                            <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                        )}
                        {member.social.twitter && (
                            <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        )}
                        {member.social.github && (
                            <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="team-info">
                <h4 className="team-name">{member.name}</h4>
                <p className="team-position">{member.position}</p>
                <p className="team-bio">{member.bio}</p>
            </div>
        </div>
    );
};

export default TeamCard;
