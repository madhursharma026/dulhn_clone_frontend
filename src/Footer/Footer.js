import './Footer.css'
import React from 'react'

function Footer() {
    return (
        <div className="bg-dark py-5" style={{ color: '#C8A47E' }}>
            <div className="container">
                <div className='row'>
                    <div className="col-12 col-md-3">
                        <ul className='footer_ul_tag'>
                            <h5 style={{ borderBottom: "1px solid orange" }}>Site</h5>
                            <li>Register</li>
                            <li>Login</li>
                            <li>Men</li>
                            <li>Women</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <ul className='footer_ul_tag'>
                            <h5 style={{ borderBottom: "1px solid orange" }}>Terms</h5>
                            <li>About Us</li>
                            <li>Terms of Use</li>
                            <li>Privacy</li>
                            <li>Code of Conduct</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <ul className='footer_ul_tag'>
                            <h5 style={{ borderBottom: "1px solid orange" }}>Info</h5>
                            <li>Help and Support</li>
                            <li>Submit Bug</li>
                            <li>Success Story</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-3">
                        <ul className='footer_ul_tag'>
                            <h5 style={{ borderBottom: "1px solid orange" }}>Connect Us</h5>
                            <li>General</li>
                            <li>Members</li>
                            <li>Media</li>
                            <li>Careers</li>
                        </ul>
                    </div >
                </div >
                <h5 className='text-center'>Spread the Word dulhn.com</h5>
                <div className="footer_social_tags">
                    <div className="row pb-3" style={{ borderBottom: "1px solid orange" }}>
                        <div className="col-2">
                            <i class="fa fa-facebook-f" style={{ fontSize: "26px" }}></i>
                        </div>
                        <div className="col-2">
                            <i class="fa fa-twitter" style={{ fontSize: "26px" }}></i>
                        </div>
                        <div className="col-2">
                            <i class="fa fa-pinterest" style={{ fontSize: "26px" }}></i>
                        </div>
                        <div className="col-2">
                            <i class="fa fa-linkedin" style={{ fontSize: "26px" }}></i>
                        </div>
                        <div className="col-2">
                            <i class="fa fa-instagram" style={{ fontSize: "26px" }}></i>
                        </div>
                        <div className="col-2">
                            <i class="fa fa-youtube" style={{ fontSize: "26px" }}></i>
                        </div>
                    </div>
                    <p className='text-center'>Copyright © 2020 Dulhn All rights reserved.</p>
                </div>
            </div >
        </div >
    );
}
export default Footer;




