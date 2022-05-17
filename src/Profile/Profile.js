import './Profile.css'
import React from 'react'
import { Link } from 'react-router-dom';

function Profile() {
    return (
        <div>
            <title>Profile</title>
            <nav class="navbar text-light fixed-top py-3" style={{ background: "#3A0514" }}>
                <div class="container">
                    <Link to="/">
                        <img src="https://www.dulhn.com/assets-home/images/logo.png" alt="#" width="142px" height="40px" />
                    </Link>
                    <div class="d-flex">
                        <div class="navbar-nav">
                            <Link to="/" class="nav-link px-4 header_option1" style={{ textDecoration: "none", color: "#C8A47E", fontSize: "18px" }}>Home</Link>
                            <Link to="/" class="nav-link px-4 header_option2" style={{ textDecoration: "none", color: "#C8A47E", fontSize: "18px" }}>Matches</Link>
                            <Link to="/" class="nav-link px-4 header_option3" style={{ textDecoration: "none", color: "#C8A47E", fontSize: "18px" }}>Gallery</Link>
                            <Link to="/" class="nav-link px-4 header_option4" style={{ textDecoration: "none", color: "#C8A47E", fontSize: "18px" }}>Explore</Link>
                            <Link to="/" class="nav-link px-4 header_option5" style={{ textDecoration: "none", color: "#C8A47E", fontSize: "18px" }}>Folder</Link>
                            <Link to="/" class="nav-link px-4 header_option6" style={{ textDecoration: "none", color: "#C8A47E", fontSize: "18px" }}>Messages</Link>
                            <Link to="/" class="nav-link px-4 header_option7" style={{ textDecoration: "none", color: "#C8A47E", fontSize: "18px" }}>Online</Link>
                        </div>
                        <i class="fa fa-bell mx-2" style={{ fontSize: "24px" }}></i>
                        <div class="dropdown">
                            <button class="btn p-0 mx-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-user" style={{ color: "white", fontSize: "24px" }}></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link to="/" class="dropdown-item">My Profile</Link></li>
                                <li><Link to="/" class="dropdown-item">Settings</Link></li>
                                <li><Link to="/" class="dropdown-item">Edit Matches</Link></li>
                                <li><Link to="/" class="dropdown-item">Near Me</Link></li>
                                <li><Link to="/" class="dropdown-item">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <h3 className='text-center mb-4' style={{ marginTop: "70px" }}>My Profile</h3>

            <div class="card mx-3 profile_data">
                <div class="card-body">
                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <img src="https://www.dulhn.com/upload/profile/maledefault.jpg" alt="#" className='img-fluid user_profile' />
                        </div>
                        <div className="col-12 col-lg-9 bg-light">
                            <div className="row mt-md-5">
                                <div className="col-12 col-md-5 text-center">
                                    <div className="container">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbl_hcvIZdemfoM9CdN1rnKAIkqd33JLSDzJVvM911ITLoiMd2eEQpt6R4_8RwjIvhUos&usqp=CAU" alt="#" className='img-fluid' />
                                        <h4>Profile Completed 30%</h4>
                                        <input type="text" value="https://www.dulhn.com/profile/DL1110125" style={{ width: "100%" }} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-7">
                                    <h6>Profile Link</h6>
                                    <div className="row">
                                        <div className="col-6"> ID:</div>
                                        <div className="col-6">DL1110125</div>
                                        <div className="col-6">Gender:</div>
                                        <div className="col-6">Male</div>
                                        <div className="col-6">Religion:</div>
                                        <div className="col-6">Hindu</div>
                                        <div className="col-6">Sector:</div>
                                        <div className="col-6">Rajput</div>
                                        <div className="col-6">Reside In:</div>
                                        <div className="col-6">India</div>
                                        <div className="col-6">Education:</div>
                                        <div className="col-6">Masters</div>
                                        <div className="col-6">Profession:</div>
                                        <div className="col-6">Business</div>
                                        <div className="col-6">Marital Status:</div>
                                        <div className="col-6">Single</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <div className="row px-3">
                                <div className="col-4 p-2" style={{ background: "#3A0514", color: "white" }}>Matches</div>
                                <div className="col-4 p-2" style={{ background: "white" }}>Online</div>
                                <div className="col-4 p-2" style={{ background: "white" }}></div>

                                <div class="card bg-light">
                                    <div class="card-body">
                                        <div className="row py-2" style={{ borderBottom: "1px solid black" }}>
                                            <div className="col-3">
                                                <img src="https://www.dulhn.com/upload/profile/lock-bg.jpg" alt="#" className='img-fluid' />
                                            </div>
                                            <div className="col-9">
                                                <h6>riya.gupta</h6>
                                                <h6>24 Yrs, Hindu</h6>
                                            </div>
                                        </div>
                                        <div className="row py-2" style={{ borderBottom: "1px solid black" }}>
                                            <div className="col-3">
                                                <img src="https://www.dulhn.com/upload/profile/lock-bg.jpg" alt="#" className='img-fluid' />
                                            </div>
                                            <div className="col-9">
                                                <h6>riya.gupta</h6>
                                                <h6>24 Yrs, Hindu</h6>
                                            </div>
                                        </div>
                                        <div className="row py-2" style={{ borderBottom: "1px solid black" }}>
                                            <div className="col-3">
                                                <img src="https://www.dulhn.com/upload/profile/lock-bg.jpg" alt="#" className='img-fluid' />
                                            </div>
                                            <div className="col-9">
                                                <h6>riya.gupta</h6>
                                                <h6>24 Yrs, Hindu</h6>
                                            </div>
                                        </div>
                                        <div className="row py-2" style={{ borderBottom: "1px solid black" }}>
                                            <div className="col-3">
                                                <img src="https://www.dulhn.com/upload/profile/lock-bg.jpg" alt="#" className='img-fluid' />
                                            </div>
                                            <div className="col-9">
                                                <h6>riya.gupta</h6>
                                                <h6>24 Yrs, Hindu</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9">
                            <div className="row px-3">
                                <div className="col-2 p-2" style={{ background: "#3A0514", color: "white" }}>Matches</div>
                                <div className="col-10 p-2" style={{ background: "#EEDCC4" }}>Partner</div>
                            </div>
                            <h5>Description</h5>
                            <textarea rows="15" style={{ width: "100%" }}></textarea>
                        </div>
                    </div>

                    <br />

                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <h6 className='text-center pt-5 px-5 bg-light' style={{ height: "100%" }}>Advertisement</h6>
                            <br /><br /><br /><br />
                        </div>
                        <div className="col-12 col-lg-9">
                            <h5>Personal Detail</h5>
                            <div className="row">
                                <div className="col-12 col-lg-6 px-3">
                                    <div className="row bg-light pb-5">
                                        <div className="col-6 mb-2">Age:</div>
                                        <div className="col-6 mb-2">21 Yrs</div>
                                        <div className="col-6 mb-2">Height:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Weight:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Lookwise:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Bodywise:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Skin Color:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Hair:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Eye:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Drink:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Smoke:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Diet:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Marital:</div>
                                        <div className="col-6 mb-2">Single</div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 px-3">
                                    <div className="row bg-light pb-5">
                                        <div className="col-6 mb-2">Want Children:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Marry Within:</div>
                                        <div className="col-6 mb-2">This year</div>
                                        <div className="col-6 mb-2">Siblings:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Nationality:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Grew Up:</div>
                                        <div className="col-6 mb-2">India</div>
                                        <div className="col-6 mb-2">State:</div>
                                        <div className="col-6 mb-2">Madhya Pradesh</div>
                                        <div className="col-6 mb-2">City:</div>
                                        <div className="col-6 mb-2">Badoda</div>
                                        <div className="col-6 mb-2">Visa Status:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Living:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Relocate:</div>
                                        <div className="col-6 mb-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-12 col-lg-3">
                            <div className="row px-3">
                                <div className="col-4 p-2" style={{ background: "#3A0514", color: "white" }}>Matches</div>
                                <div className="col-4 p-2" style={{ background: "white" }}>Online</div>
                                <div className="col-4 p-2" style={{ background: "white" }}></div>

                                <div class="card bg-light">
                                    <div class="card-body">
                                        <div className="row py-2" style={{ borderBottom: "1px solid black" }}>
                                            <div className="col-3">
                                                <img src="https://www.dulhn.com/upload/profile/lock-bg.jpg" alt="#" className='img-fluid' />
                                            </div>
                                            <div className="col-9">
                                                <h6>riya.gupta</h6>
                                                <h6>24 Yrs, Hindu</h6>
                                            </div>
                                        </div>
                                        <div className="row py-2" style={{ borderBottom: "1px solid black" }}>
                                            <div className="col-3">
                                                <img src="https://www.dulhn.com/upload/profile/lock-bg.jpg" alt="#" className='img-fluid' />
                                            </div>
                                            <div className="col-9">
                                                <h6>riya.gupta</h6>
                                                <h6>24 Yrs, Hindu</h6>
                                            </div>
                                        </div>
                                        <div className="row py-2" style={{ borderBottom: "1px solid black" }}>
                                            <div className="col-3">
                                                <img src="https://www.dulhn.com/upload/profile/lock-bg.jpg" alt="#" className='img-fluid' />
                                            </div>
                                            <div className="col-9">
                                                <h6>riya.gupta</h6>
                                                <h6>24 Yrs, Hindu</h6>
                                            </div>
                                        </div>
                                        <div className="row py-2" style={{ borderBottom: "1px solid black" }}>
                                            <div className="col-3">
                                                <img src="https://www.dulhn.com/upload/profile/lock-bg.jpg" alt="#" className='img-fluid' />
                                            </div>
                                            <div className="col-9">
                                                <h6>riya.gupta</h6>
                                                <h6>24 Yrs, Hindu</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-9">
                            <h5>Professional & Religious</h5>
                            <div className="row">
                                <div className="col-12 col-lg-6 px-3">
                                    <div className="row bg-light pb-5">
                                        <div className="col-6 mb-2">Age:</div>
                                        <div className="col-6 mb-2">21 Yrs</div>
                                        <div className="col-6 mb-2">Height:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Weight:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Lookwise:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Bodywise:</div>
                                        <div className="col-6 mb-2"></div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 px-3">
                                    <div className="row bg-light pb-5">
                                        <div className="col-6 mb-2">Want Children:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Marry Within:</div>
                                        <div className="col-6 mb-2">This year</div>
                                        <div className="col-6 mb-2">Siblings:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Nationality:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Grew Up:</div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-12 col-lg-6 px-3">
                                    <div className="row bg-light pb-5">
                                        <div className="col-6 mb-2">Age:</div>
                                        <div className="col-6 mb-2">21 Yrs</div>
                                        <div className="col-6 mb-2">Height:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Weight:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Lookwise:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Bodywise:</div>
                                        <div className="col-6 mb-2"></div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 px-3">
                                    <div className="row bg-light pb-5">
                                        <div className="col-6 mb-2">Want Children:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Marry Within:</div>
                                        <div className="col-6 mb-2">This year</div>
                                        <div className="col-6 mb-2">Siblings:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Nationality:</div>
                                        <div className="col-6 mb-2"></div>
                                        <div className="col-6 mb-2">Grew Up:</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                </div>
            </div>
            <br />
        </div>
    );
}
export default Profile;



