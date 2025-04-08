import React from 'react';
import './Footer.css';
import frame1 from '../../assets/Footer-Frame.png';
import frame2 from '../../assets/facebook.png';
import frame3 from '../../assets/twitter.png';
import frame4 from '../../assets/insta.png';
import frame5 from '../../assets/linkedin.png';

const Footer = () => {
    return (
        <div>
            <div className='Footer-main'>
            <div className='Footerpt-1'>
                <div>
                    <img className='image-1' src={frame1} alt="" />
                </div>
                <p>
                    CommerceKind is your trusted partner for Amazon’s success. We empower businesses to grow their stores and accounts with tailored solutions and proven expertise.
                </p>
                <div className='Footerpt-1-images'>
                    <a href="">
                        <img src={frame2} alt="FCAEBOOK_IMAGE" />
                    </a>
                    <a href="">
                        <img src={frame3} alt="TWITTER_IMAGE" />
                    </a>
                    <a href="">
                        <img src={frame4} alt="INSTAGRAM_IMAGE" />
                    </a>
                    <a href="">
                        <img src={frame5} alt="LINKEDIN_IMAGE" />
                    </a>
                </div>
            </div>
            <div className='Footerpt-2'>
                <div className='Company'>
                    <h4>Company</h4>
                    <a href=""><p>Home</p></a>
                    <a href=""><p>Case Studies</p></a>
                    <a href=""><p>Before and After</p></a>
                    <a href=""><p>Services</p></a>
                    <a href=""><p>Contact</p></a>
                </div>
                <div className='Quicklink'>
                    <h4>Quick Links</h4>
                    <a href=""><p>Careers</p></a>
                    <a href=""><p>Blogs</p></a>
                    <a href=""><p>FAQ's</p></a>
                    <a href=""><p>Reviews</p></a>
                </div>
                <div className='Newsletter'>
                    <h4>Others</h4>
                    <a href=""><p>Terms & Conditions</p></a>
                    <a href=""><p>Privacy Policy</p></a>
                </div>
            </div>
            <div className='Footerpt-3'>
                <h4>Newsletter</h4>
                <div className="Footer-input-wrapper">
                    <input type="text" placeholder="Enter Your Email" className="input-field" />
                    <button type="button">Subscribe</button>
                </div>
                <h4>Phone: </h4>
                <p>(659) 209-3973</p>
                <h4>Address: </h4>
                <p>7628 103rd St Jacksonville, FL 32210</p>
            </div>
        </div>

        <div className="Footer-bottom">
                <span className='Footer-bottom-text'>Copyright © 2025 CommerceKind | Powered By <a href="www.google.com">Develtro</a></span>
            </div>
        </div>
    );
}

export default Footer;
