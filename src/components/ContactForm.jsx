import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newErrors = {};


        if (formData.name.trim() === '') {
            newErrors.name = 'El nombre es obligatorio';
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Ingrese un correo electrónico válido';
        }

        if (formData.subject.trim() === '') {
            newErrors.subject = 'El asunto es obligatorio';
        }

        if (formData.message.trim() === '') {
            newErrors.message = 'El mensaje es obligatorio';
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:5174/contacto', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)                
                });

                if (response.ok) {
                    console.log('Formulario enviado exitosamente');
                } else {
                    console.error('Error al enviar el formulario');
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
            }
        } else {
            setErrors(newErrors);
        }
    };

    const isValidEmail = (email) => {
        // Validación básica de correo electrónico
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} className="mt-4">
                    <h2 className='text-info mb-4' >Dejanos tu mensaje, solicitá tu cotización</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name" className='mb-3' >
                            <Form.Label className='fw-bold'>Nombre</Form.Label>
                            <Form.Control 
                            type="text" 
                            value={formData.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                            />
                          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="email" className="mb-3">
                            <Form.Label className='fw-bold'>Correo Electrónico</Form.Label>
                            <Form.Control
                             type="email"
                             value={formData.email}
                             onChange={handleChange}
                             isInvalid={!!errors.email}
                             />
                             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="subject"  className='mb-3'>
                            <Form.Label className='fw-bold'>Asunto</Form.Label>
                            <Form.Control
                             type="text" 
                             value={formData.subject}
                             onChange={handleChange}
                             isInvalid={!!errors.subject}
                             />
                             <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="message"  className='mb-3'>
                            <Form.Label className='fw-bold'>Mensaje</Form.Label>
                            <Form.Control
                             as="textarea" 
                             rows={3}
                             placeholder="Dejanos tu consulta aquí..."
                             value={formData.message}
                             onChange={handleChange}
                             isInvalid={!!errors.message}
                             />
                             <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                        </Form.Group>

                        <div className="mt-3 mb-3">
                            <Button variant="primary" type="submit">
                               Enviar Mensaje
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};




