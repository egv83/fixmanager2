import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
            <div className="footer-left">
                <span>© {currentYear} FixManager. Todos los derechos reservados.</span>
            </div>
            <div className="footer-right">
                <div className="footer-links">
                    <a href="/privacy" className="footer-link">Privacidad</a>
                    <a href="/terms" className="footer-link">Términos</a>
                    <a href="/help" className="footer-link">Ayuda</a>
                    <a href="/contact" className="footer-link">Contacto</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;