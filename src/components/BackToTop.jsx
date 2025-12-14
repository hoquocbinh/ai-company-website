import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="back-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="back-to-top-btn">
                    <FaArrowUp />
                </div>
            )}
        </div>
    );
};

export default BackToTop;
