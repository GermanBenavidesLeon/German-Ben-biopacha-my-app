import React from 'react'
import 'bootstrap'
import { BsShop, BsTelephone, BsEnvelope, BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";
import './Footer.css'


export const Footer = () => {
    return (
        <footer className='footer'>
            <section className='sectionFooter'>
                <div>
                    <h5>Productos</h5>
                        <li>Dietetica Natural</li>
                        <li>Produstos sin gluten</li>
                        <li>Herboristeria</li>
                        <li>Comidas vegetarianas y veganas</li>
                        <li>Semillas cereales y frutos secos</li>   
                </div>
                <div className='mediafooter'>
                    <ul className='ulMedia'>
                        <h5>Contacto</h5>
                        <li><BsTelephone />  011 1110000</li>
                        <li><BsShop />  Mariano pelliza 2642 Olivos</li>
                        <li><BsEnvelope />  info@biopacha.com</li>
                    </ul>
                </div>
                <div className='mediafooter'>
                    <ul className='ulMedia'>
                        <h5>Redes</h5>
                        <li><BsInstagram /> Instagram</li>
                        <li><BsFacebook /> Facebook</li>
                        <li><BsWhatsapp /> Whatsapp</li>
                    </ul>
                </div> 
            </section>
            <div class="text-center text-dark p-2 copy">
            © 2020 Copyright:
            <a className="text-dark" href="#!"> Biopacha.com</a>
            </div>
        </footer>
    )
}
