import './Homepage.css'
import React, { useState } from 'react'
import { Carousel } from 'react-carousel-minimal';
import { BrowserRouter as Router, Link } from "react-router-dom"
import Footer from '../Footer/Footer';

function Homepage() {

    const [mySidebarStyle, setmySidebarStyle] = useState("0px")

    const data = [
        {
            image: "https://www.dulhn.com/assets/images/banner/tempbanner4.jpg"
        },
        {
            image: "https://www.dulhn.com/assets/images/banner/tempbanner3.jpg"
        },
        {
            image: "https://www.dulhn.com/assets-home/images/bannerdulhna20.jfif"
        }
    ];

    function openNav() {
        setmySidebarStyle("250px")
    }

    function closeNav() {
        setmySidebarStyle("0px")
    }
    return (
        <>
            <title>Dulhn - Free matrimony matchmaking website, Find your perfect life partner Bride/Groom Free Registeration, send recieve personalised messages to anyone for free</title>
            <div className="homepage_before_sm_screen">
                <Carousel
                    data={data}
                    time={4000}
                    width="100%"
                    height="100vh"
                    radius="0"
                    slideNumber={false}
                    captionPosition="bottom"
                    automatic={true}
                    dots={false}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={false}
                />
                <div className="header fixed-top">
                    <div className="header_logo">
                        <img src="https://www.dulhn.com/assets-home/images/logo.png" alt="#" width="142px" height="40px" />
                    </div>
                    <div class="login_signup_btn">
                        <button type="button" class="btn mx-3 text-warning px-4 mt-2" style={{ background: "#3A0514" }}>Login</button>
                        <button type="button" class="btn mx-3 text-warning px-4 mt-2" style={{ background: "#3A0514" }}>Register</button>
                    </div>
                </div>

                <div className="my-5 container-md">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3 text-center mt-3">
                            <div className="suggestion_box p-3">
                                <img src="https://www.dulhn.com/assets-home/images/signupicon1.png" alt="#" />
                                <p style={{ fontSize: "20px" }}>Register and create profile for free</p></div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 text-center mt-3">
                            <div className="suggestion_box p-3">
                                <img src="https://www.dulhn.com/assets-home/images/browseicon1.png" alt="#" />
                                <p style={{ fontSize: "20px" }}>Browse profiles of various backgrounds</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 text-center mt-3">
                            <div className="suggestion_box p-3">
                                <img src="https://www.dulhn.com/assets-home/images/findicon1.png" alt="#" />
                                <p style={{ fontSize: "20px" }}>Upgrade Membership to Communicate</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3 text-center mt-3">
                            <div className="suggestion_box p-3">
                                <img src="https://www.dulhn.com/assets-home/images/upgrade%20icon1.png" alt="#" />
                                <p style={{ fontSize: "20px" }}>Find life partner of your dreams and enjoy life.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="marquee_tag">
                    <div className="container-md">
                        <marquee width="100%" direction="left" height="80px" style={{ color: "#B8860B" }}>
                            <h2 className='pt-3'>Treat Women with Respect Say Big NO to the Word Dowry Help your Wife with Chores</h2>
                        </marquee>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6" style={{ marginTop: '100px' }}>
                            <p>Our Matrimony website Dulhn.com is launched with a mission to create new relationship which should be for life , we are providing a platform for singles across religions and sectors to find soulmate of their choice through online interactions , We wish all members to find lasting love , Try us should you be seriously interested in creating beautiful family by building long lasting relationship .</p>
                            <button type="button" class="btn text-warning px-4" style={{ background: "#3A0514", borderRadius: "0" }}>Join Now</button>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="https://www.dulhn.com/assets-home/images/box-img1.png" class="img-fluid" alt="#" />
                        </div>
                    </div>
                </div>

                <div className="row mx-1 mt-3">
                    <div className="col-12 col-xl-7">
                        <img src="https://www.dulhn.com/assets-home/images/couple1.png" class="img-fluid love_and_happiness_image_area" alt="#" />
                    </div>
                    <div className="col-12 col-xl-5 text-center pt-5 love_and_happiness_area">
                        <h1 class="main_heading_love_and_happiness">LOVE &amp; HAPPINESS </h1>
                        <br />
                        <p class="heading-img-box" style={{ marginTop: "-15px", color: "mahroon", fontSize: "17px" }}> Love is the breeze of two or more lives.</p>
                        <p class="heading-img-box" style={{ marginTop: "-15px", color: "mahroon", fontSize: "17px" }}>Love is the only flower of joy which blossoms in every season.</p>
                        <p class="heading-img-box" style={{ marginTop: "-15px", color: "mahroon", fontSize: "17px" }}> Relationships are build on these strong factors which are basics of love.</p>
                        <p class="heading-img-box" style={{ marginTop: "-15px", color: "mahroon", fontSize: "17px" }}> Cherish every special moments of joy as life has no second chance.</p>
                    </div>
                </div>

                <div className="mobile_app_info py-3" style={{ background: "#F7F7F7" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6" style={{ textAlign: "right" }}>
                                <img src="https://www.dulhn.com/assets/images/mobile-app1.jpg.png" alt="#" className='img-fluid' />
                            </div>
                            <div className="col-12 col-md-6" style={{ color: "#3A0514", paddingTop: "100px" }}>
                                <h2>Mobile App coming soon</h2>
                                <p>Browsing profiles and Xchanging Messages is lot easier and faster when using an app You can download app any time anywhere with just a click of a button on your cell phone Designed and Build on a Safe and secure platform to be compatible for both ios and android Download for free and find your compatible life partner now</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Browse_profiles text-center pt-5 py-4" style={{ color: "#3A0514" }}>
                    <h2>Browse Profiles</h2>
                    <ul className="browse_profile_ul_tag">
                        <li className='browse_profile_options_heading'><h6 style={{ fontSize: "15px" }}>Country:</h6></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>India</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>UAE</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>UK</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>USA</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Canada</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Malaysia</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Singapore</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Australia</Link></li>
                        <li className='browse_profile_more_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>More </Link></li>
                    </ul>
                    <ul className="browse_profile_ul_tag">
                        <li className='browse_profile_options_heading'><h6 style={{ fontSize: "15px" }}>State:</h6></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Jammu N kashmir</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Punjab</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Gujarat</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Rajasthan</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Madhya Pradesh</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Uttar Pradesh</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>HimachalPradesh</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Orissa</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>West bengal</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Telangana</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Tamilnadu</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Kerala</Link></li>
                        <li className='browse_profile_more_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>More </Link></li>
                    </ul>
                    <ul className="browse_profile_ul_tag">
                        <li className='browse_profile_options_heading'><h6 style={{ fontSize: "15px" }}>City:</h6></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Srinagar</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Chandigarh</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Lucknow</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Jaipur</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Ahmedabad</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Itanagar</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Panaji</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Bhopal</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Hyderabad</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Mumbai</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Bengaluru</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Chennai</Link></li>
                        <li className='browse_profile_more_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>More </Link></li>
                    </ul>
                    <ul className="browse_profile_ul_tag">
                        <li className='browse_profile_options_heading'><h6 style={{ fontSize: "15px" }}>Sector:</h6></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Sunni</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Shia</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Brahmin</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Rajput</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Agrawal</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Gupta</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Sharma</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Mishra</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Khatri</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Jat</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Arora</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Baniya</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Shudras</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Sheikh</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Qureshi</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Memon</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Reddy</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Rao</Link></li>
                        <li className='browse_profile_more_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>More </Link></li>
                    </ul>
                    <ul className="browse_profile_ul_tag">
                        <li className='browse_profile_options_heading'><h6 style={{ fontSize: "15px" }}>Languages:</h6></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Hindi</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Urdu</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Kashmiri</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Sindhi</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Punjabi</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Gujarati</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Oriya</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Konkani</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Marathi</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Manipuri</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Bhojpuri</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Tamil</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Telugu</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Malayalam</Link></li>
                        <li className='browse_profile_more_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>More </Link></li>
                    </ul>
                    <ul className="browse_profile_ul_tag">
                        <li className='browse_profile_options_heading'><h6 style={{ fontSize: "15px" }}>Religion:</h6></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Muslim</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Christian</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Hindu</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Sikh</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Jain</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Buddhist</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Jews</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Khoja</Link></li>
                        <li className='browse_profile_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>Bhora</Link></li>
                        <li className='browse_profile_more_options px-2'><Link to="/" style={{ textDecoration: "none", color: "#3A0514", fontSize: "12px" }}>More </Link></li>
                    </ul>
                </div>
                <Footer />
            </div>

            <div className="homepage_after_sm_screen">
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://m.dulhn.com/assets/images/tempbanner2.jpg" class="d-block w-100" style={{ height: '100vh' }} alt="#" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://m.dulhn.com/assets/images/tempbanner1.jpg" class="d-block w-100" style={{ height: '100vh' }} alt="#" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://m.dulhn.com/assets/images/tempbanner2.jpg" class="d-block w-100" style={{ height: '100vh' }} alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="https://m.dulhn.com/assets/images/tempbanner1.jpg" class="d-block w-100" style={{ height: '100vh' }} alt="#" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="header fixed-top">
                    <div className="header_logo">
                        <img src="https://www.dulhn.com/assets-home/images/logo.png" alt="#" width="142px" height="40px" />
                    </div>
                    <div class="sidebar_btn_after_sm_scrn">
                        <span style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => openNav()}>&#9776;</span>
                        <div id="mySidenav" class="sidenav" style={{ width: mySidebarStyle }}>
                            <h6 className='sidebar_link_tag' class="closebtn" onClick={() => closeNav()}>&times;</h6>
                            <Link className='sidebar_link_tag' to="#"><i class="fa fa-home sidebar_options_logo"></i>&ensp;Home</Link>
                            <Link className='sidebar_link_tag' to="#"><i class="fa fa-male sidebar_options_logo"></i>&ensp;Men</Link>
                            <Link className='sidebar_link_tag' to="#"><i class="fa fa-female sidebar_options_logo"></i>&ensp;Women</Link>
                            <Link className='sidebar_link_tag' to="#"><i class="fa fa-qrcode sidebar_options_logo"></i>&ensp;Code of conduct</Link>
                            <Link className='sidebar_link_tag' to="#"><i class="fa fa-question sidebar_options_logo"></i>&ensp;Help and Support</Link>
                            <Link className='sidebar_link_tag' to="#"><i class="fa fa-file-text sidebar_options_logo"></i>&ensp;Terms & Conditions</Link>
                            <Link className='sidebar_link_tag' to="#"><i class="fa fa-lock sidebar_options_logo"></i>&ensp;Privacy</Link>
                            <Link className='sidebar_link_tag' to="#"><i class="fa fa-phone sidebar_options_logo"></i>&ensp;Contact Us</Link>
                            <Link className='sidebar_link_tag' to="#"><i class="fa fa-bug sidebar_options_logo"></i>&ensp;Submit Bug</Link>
                            <div className="sidebar_logo text-center mt-5">
                                <img src="https://www.dulhn.com/assets-home/images/logo.png" alt="#" className='img-fluid' width="70px" height="18px" />
                            </div>
                            <div className="sidebar_social_tags">
                                <div className="row mt-3">
                                    <div className="col-2">
                                        <i class="fa fa-facebook-f" style={{ fontSize: "20px", color: "orange" }}></i>
                                    </div>
                                    <div className="col-2">
                                        <i class="fa fa-twitter" style={{ fontSize: "20px", color: "orange" }}></i>
                                    </div>
                                    <div className="col-2">
                                        <i class="fa fa-pinterest" style={{ fontSize: "20px", color: "orange" }}></i>
                                    </div>
                                    <div className="col-2">
                                        <i class="fa fa-linkedin" style={{ fontSize: "20px", color: "orange" }}></i>
                                    </div>
                                    <div className="col-2">
                                        <i class="fa fa-instagram" style={{ fontSize: "20px", color: "orange" }}></i>
                                    </div>
                                    <div className="col-2">
                                        <i class="fa fa-youtube" style={{ fontSize: "20px", color: "orange" }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="login_and_signup_btn_after_sm_scrn px-5">
                    <button type="button" class="btn btn-dark w-100 mb-2">Register Free</button>
                    <button type="button" class="btn btn-light w-100">Login Here</button>
                </div>
                <p className='text-center text-warning' style={{ background: "#F1F1F1", fontSize: "18px" }}>Copyright © 2020 Dulhn All rights reserved.</p>
            </div>
        </>
    );
}
export default Homepage;

