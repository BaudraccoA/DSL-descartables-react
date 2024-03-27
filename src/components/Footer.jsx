import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const Footer = () => {
  return (
    <div className="footer-container">
      <p className="copy">Copyright &copy; AJB Website 2024</p>
      <h4 className="footer-title">DSL Descartables</h4>
      <p className="dir">Av Cura Brochero s/n - San Lorenzo - Traslasierras - Córdoba</p>
      <p className="dir">Telefono: 351 - 3300613 </p>
      <div className="social-icons">
        <a href="https://www.facebook.com/profile.php?id=61557573249529" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>
        <a href="https://www.instagram.com/alejandrojavierbaudracco/" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
        <a href="mailto:dsldescartables@gmail.com" target="_blank" rel="noopener noreferrer"><AlternateEmailIcon /></a>
        <a href="https://api.whatsapp.com/send?phone=numero-de-telefono" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
      </div>
    </div>
  );
};
  
