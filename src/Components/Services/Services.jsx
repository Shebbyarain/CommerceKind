import React from "react";
import "./Services.css";
import SerImage1 from '../../assets/Services-image1.png';
import SerImage2 from '../../assets/Services-image2.png';
import SerImage3 from '../../assets/Services-image3.png';
import SerImage4 from '../../assets/Services-image4.png';
import SerImage5 from '../../assets/Services-image5.png';
import SerImage6 from '../../assets/Services-image6.png';

const Services = () => {
    return (
        <div className="services-component">
            {/* Heading Section */}
            <div className="services-component__TOP">
                <div className="services-component__upper-container">
                    <h2 className="services-component__title">How May We Help You?</h2>
                    <h1 className="services-component__subtitle">
                        We Don’t Just Manage Amazon, We <br /> Master It for You!
                    </h1>
                </div>

                {/* Services Section */}
                <section className="services-component__services-section">
                    <div className="services-component__cards-container">
                        <div className="services-component__card">
                            <h2>Amazon PPC</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage1} alt="Amazon PPC Management" className="services-component__card-image" />
                            </div>
                            <p>
                                Optimize your Amazon journey with CommerceKind. Our tailored solutions boost visibility, maximize profitability, and empower your e-commerce success with expertise and excellence.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>Listings SEO</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage2} alt="E-commerce Growth" className="services-component__card-image" />
                            </div>
                            <p>
                                Enhance your product rankings with our specialized SEO strategies, ensuring your listings reach the right audience. We optimize content based on customer psychology, driving engagement and conversions.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>Listings Creatives</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage3} alt="Shopify Optimization" className="services-component__card-image" />
                            </div>
                            <p>
                                Captivate customers with compelling visuals and descriptions. Our creative approach is designed to align with customer psychology, making your product more appealing and increasing conversions.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>CTR% Improvement</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage4} alt="Shopify Optimization" className="services-component__card-image" />
                            </div>
                            <p>
                                Increase your Click-Through Rate with data-driven strategies. We refine your listings with high-performing keywords, compelling creatives, and persuasive copy that encourage more clicks.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>CVR% Improvement</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage5} alt="Shopify Optimization" className="services-component__card-image" />
                            </div>
                            <p>
                                Boost your Conversion Rate by optimizing every touchpoint with customer psychology in mind. We refine content, visuals, and engagement strategies to turn visitors into loyal buyers.
                            </p>
                        </div>

                        <div className="services-component__card">
                            <h2>Platform Management</h2>
                            <div className="services-component__card-image-div">
                                <img src={SerImage6} alt="Shopify Optimization" className="services-component__card-image" />
                            </div>
                            <p>
                                Effortlessly manage your Amazon operations with our expert platform management. From inventory tracking to order fulfillment, we streamline processes for seamless growth and efficiency.
                            </p>
                        </div>
                    </div>
                    <a href="#">
                        <div className="services-component__btn">
                            <button>Contact Us Now</button>
                        </div>
                    </a>
                </section>
            </div>
        </div>
    );
};

export default Services;
