import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import config from '../config';
import './ContactForm.css';

const ContactForm = () => {
    const GOOGLE_FORM_ACTION_URL = config.googleForm.actionUrl;
    const GOOGLE_FORM_ENTRY_IDS = config.googleForm.entryIds;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);

        // Construct FormData for Google Forms
        const form = new FormData();
        form.append(GOOGLE_FORM_ENTRY_IDS.name, formData.name);
        form.append(GOOGLE_FORM_ENTRY_IDS.email, formData.email);
        form.append(GOOGLE_FORM_ENTRY_IDS.subject, formData.subject);
        form.append(GOOGLE_FORM_ENTRY_IDS.message, formData.message);

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Forms
                body: form
            });

            setLoading(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setSubmitted(false), 5000);
        } catch (err) {
            console.error(err);
            setLoading(false);
            // Even if it fails (CORS error usually), we often assume success for Google Forms no-cors
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        }
    };

    return (
        <div className="contact-form-wrapper">
            {/* Instructions for Developer (Hidden in UI if configured, or could be kept comments) */}
            {GOOGLE_FORM_ACTION_URL.includes("YOUR_FORM_ID") && (
                <Alert variant="warning" className="mb-4">
                    <strong>Developer Setup Needed:</strong> Please configure the Google Form URL and Entry IDs in <code>src/components/ContactForm.jsx</code>.
                </Alert>
            )}

            {submitted && (
                <Alert variant="success" className="mb-4">
                    Thank you for your message! We'll get back to you soon.
                </Alert>
            )}

            <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-4">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                        placeholder="Your full name"
                        className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                        placeholder="your.email@example.com"
                        className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        isInvalid={!!errors.subject}
                        placeholder="How can we help you?"
                        className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.subject}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label>Message *</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                        placeholder="Tell us more about your project..."
                        className="form-control-custom"
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button
                    type="submit"
                    className="btn-primary w-100"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
