import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../assets/Logo-HD-CommerceKind.png';
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <div className='parent'>
      <div className='child1'>
        <div className='p1'>
          <div className='email-container'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>info@commercekind.com</span>
          </div>
          <div className='divider'>|</div>
          <div className='phone-container'>
            <FontAwesomeIcon icon={faPhoneVolume} />
            <span>(659) 209-3973</span>
          </div>
        </div>
        <div className='p2'>
          <div className='links'>
            <a href="/careers">Careers</a>
            <a href="/blog">Blog</a>
            <a href="/faqs">FAQs</a>
            <a href="/reviews">Reviews</a>
          </div>
          <div className='divider'>|</div>
          <div className='socials'>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
          </div>
        </div>
      </div>
      <div className='child2'>
        <div className='logo'>
          <img src={Logo} alt="CommerceKind Logo" />
        </div>
        <div className='navigation'>
          <a href="/case-studies">Case Studies</a>
          <a href="/before-after">Before and After</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className='actions'>
          <div className='search'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <button className='try-button'>Try Free</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;