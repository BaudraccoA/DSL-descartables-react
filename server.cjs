const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5174;
console.log(PORT)

// Middleware para permitir el análisis de JSON
app.use(express.json());

// Middleware de CORS
app.use(cors()); // Habilita CORS para todas las solicitudes

// Ruta para manejar el envío del formulario
app.post('/contacto', (req, res) => {
    console.log(req.body)
    console.log('Solicitud POST recibida en /contacto');
    const { name, email, subject, message } = req.body;
    console.log('Datos recibidos:', { name, email, subject, message });
     

    // Configuración de nodemailer para enviar correos electrónicos
    /*const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'dsldescartables@gmail.com',
            pass: 'Alan02-24'
        }
    });

    const mailOptions = {
        from: 'dsldescartables@gmail.com',
        to: 'dsldescartables@gmail.com',
        subject: subject,
        text: `Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`
    };*/
   

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico:', error);
            res.status(500).json({ error: 'Error al enviar el correo electrónico' });
        } else {
            console.log('Correo electrónico enviado:', info.response);
            res.status(200).json({ message: 'Correo electrónico enviado exitosamente' });
        }
    });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
