//Se deja el codigo para usarse con backend:

/*export const ContactForm = () => {
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

    const form = useRef();

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
        
        /*if (Object.keys(newErrors).length === 0) {
            try {
                const response = await fetch('http://localhost:5173/contacto', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)                  
                });
                
                if (response.ok) {
                    console.log('Formulario enviado exitosamente');
                    // Limpiar los campos del formulario y recargar la página
                    clearForm();
                      window.location.reload(); // Esto recargará la página
                } else {
                    console.error('Error al enviar el formulario');
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
            }
        } else {
            setErrors(newErrors);
        }
    };*/

    //Utilizando EmailJS para envio de correo electrónico desde el Frontend

    /*/if (Object.keys(newErrors).length === 0) {
        try {
            await emailjs.sendForm('<contact_service>', '<contact_form>', form.current, '<ASHBDOqqfjQwQwSY_>');
            console.log('Correo electrónico enviado exitosamente');
            clearForm();
            window.location.reload(); // Esto recargará la página
        } catch (error) {
            console.error('Error al enviar el correo electrónico:', error);
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
                    <Form ref={form} onSubmit={handleSubmit}>
                        <Form.Group controlId="name" className='mb-3' >
                            <Form.Label className='fw-bold'>Nombre</Form.Label>
                            <Form.Control 
                            type="text"
                            name= "user_name"
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
                             name="user_mail"
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
                             name="user_message"
                             onChange={handleChange}
                             isInvalid={!!errors.message}
                             />
                             <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                        </Form.Group>

                        <div className="mt-3 mb-3">
                            <Button 
                            variant="primary" 
                            type="submit"
                            value="Send"   
                            >
                               Enviar Mensaje
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};*/

//Codigo utilizando el EmailJS desde el Frontend

import React, { useRef, useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});

    const sendEmail = (e) => {
        e.preventDefault();

        // Validar campos
        const formData = new FormData(form.current);
        const name = formData.get('user_name');
        const email = formData.get('user_email');
        const message = formData.get('message');

        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = 'Nombre es requerido';
        }

        if (!email.trim()) {
            newErrors.email = 'Email es requerido';
        } else if (!isValidEmail(email)) {
            newErrors.email = 'Ingrese un mail válido';
        }

        if (!message.trim()) {
            newErrors.message = 'El mensaje es requerido';
        }

        if (Object.keys(newErrors).length === 0) {
        emailjs
            .sendForm('contact_service', 'contact_form', form.current, {
                publicKey: 'ASHBDOqqfjQwQwSY_',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccessMessage('Su mensaje fue enviado exitosamente, pronto nos pondremos en contacto con usted');
                    form.current.reset(); // Resetear el formulario después de enviarlo
                    setErrors({});
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        } else {
            setErrors(newErrors);
        }
    };
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    return (
        <Container>
            <Row className="justify-content-center">
            <Col xs={12} md={8} className="mt-4">
                    <h2 className='text-info mb-4' >Dejanos tu mensaje, solicitá tu cotización</h2>
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group controlId="user_name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="user_name"
                            isInvalid={!!errors.name} />
                            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="user_email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                             type="email" 
                             name="user_email"
                             isInvalid={!!errors.email} />
                             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="message">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control 
                            as="textarea"
                            name="message" 
                            rows={3} 
                            placeholder="Dejanos tu consulta aquí..."
                            isInvalid={!!errors.message}
                             />
                             <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                        </Form.Group>

                        <div className="mt-3 mb-3">
                            <Button 
                            variant="primary" 
                            type="submit"
                            value="Send"   
                            >
                               Enviar Mensaje
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};


