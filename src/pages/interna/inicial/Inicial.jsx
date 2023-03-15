import React, { useState, useEffect } from "react";
import Slider from "react-slick";


const Inicial = () => {
   var settings = {
      dots: false,
      nav: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };
   
   var settingsDoctor = {
      dots: false,
      nav: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
   };
   
    return (
        <>
            <nav role="navigation" className="hc-offcanvas-nav hc-nav-1 nav-levels-overlap nav-position-left disable-body" aria-hidden="true" aria-labelledby="hc-nav-1">
               <div className="nav-container">
                  <div className="nav-wrapper nav-wrapper-0" data-level="0" data-index="0">
                     <div className="nav-content">
                        <h2>Dactorapp</h2>
                        <ul role="menu" aria-level="1" className="second-nav" aria-label="Dactorapp">
                           <li className="osahan-user-profile bg-primary">
                              <div className="nav-item-wrapper">
                                 <span className="nav-item">
                                    <div className="d-flex align-items-center gap-2">
                                       <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/favorite/favorite-4.jpg' alt="" className="rounded-pill img-fluid" />
                                       <div className="ps-1">
                                          <h6 className="fw-bold text-white mb-0">Hey, Samantha!</h6>
                                          <p className="text-white-50 m-0 small">+91 12345-67890</p>
                                       </div>
                                    </div>
                                 </span>
                              </div>
                           </li>
                           <li className="nav-close">
                              <div className="nav-item-wrapper">
                                 <a href="#" role="menuitem" tabIndex="0">Close <span></span>
                                 </a>
                              </div>
                           </li>
                           <li>
                              <div className="nav-item-wrapper">
                                 <a href="index.html" className="nav-item" tabIndex="0" role="menuitem">
                                 <span className="mdi mdi-cellphone me-3"></span>Splash </a>
                              </div>
                           </li>
                           <li className="nav-parent">
                              <input type="checkbox" id="hc-nav-1-1-0" className="hc-chk" tabIndex="-1" data-level="1" data-index="0" value="rwit2uq2ebk" />
                              <div className="nav-item-wrapper">
                                 <a href="#" className="nav-item" tabIndex="0" role="menuitem" aria-controls="menu-rwit2uq2ebk" aria-haspopup="true" aria-expanded="false">
                                 <span className="mdi mdi-login me-3"></span>Authentication <span className="nav-next"></span>
                                 </a>
                              </div>
                              <div className="nav-wrapper nav-wrapper-1" data-level="1" data-index="0">
                                 <div className="nav-content">
                                    <h2>Authentication</h2>
                                    <ul role="menu" aria-level="2" aria-label="Authentication" aria-labelledby="menu-rwit2uq2ebk">
                                       <li className="nav-back">
                                          <div className="nav-item-wrapper">
                                             <a href="#" role="menuitem" tabIndex="0">Dactorapp <span></span>
                                             </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="landing.html" className="nav-item" tabIndex="0" role="menuitem">Landing</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="welcome.html" className="nav-item" tabIndex="0" role="menuitem">Welcome</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="sign-up.html" className="nav-item" tabIndex="0" role="menuitem">Sign up</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="sign-in.html" className="nav-item" tabIndex="0" role="menuitem">Sign in</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="sign-in-email.html" className="nav-item" tabIndex="0" role="menuitem">Sign in with email</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="forget-password.html" className="nav-item" tabIndex="0" role="menuitem">Forget Password</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="reset-password.html" className="nav-item" tabIndex="0" role="menuitem">Reset Password</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="verify.html" className="nav-item" tabIndex="0" role="menuitem">Verify</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="congrats.html" className="nav-item" tabIndex="0" role="menuitem">Congrats</a>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div className="nav-item-wrapper">
                                 <a href="notification.html" className="nav-item" tabIndex="0" role="menuitem">
                                 <span className="mdi mdi-bell-outline me-3"></span>Notification </a>
                              </div>
                           </li>
                           <li>
                              <div className="nav-item-wrapper">
                                 <a href="home.html" className="nav-item" tabIndex="0" role="menuitem">
                                 <span className="mdi mdi-home-variant-outline me-3"></span>Homepage </a>
                              </div>
                           </li>
                           <li className="nav-parent">
                              <input type="checkbox" id="hc-nav-1-1-1" className="hc-chk" tabIndex="-1" data-level="1" data-index="1" value="pdl8lx20a4" />
                              <div className="nav-item-wrapper">
                                 <a href="#" className="nav-item" tabIndex="0" role="menuitem" aria-controls="menu-pdl8lx20a4" aria-haspopup="true" aria-expanded="false">
                                 <span className="mdi mdi-magnify me-3"></span>Doctors <span className="nav-next"></span>
                                 </a>
                              </div>
                              <div className="nav-wrapper nav-wrapper-1" data-level="1" data-index="1">
                                 <div className="nav-content">
                                    <h2>Doctors</h2>
                                    <ul role="menu" aria-level="2" aria-label="Doctors" aria-labelledby="menu-pdl8lx20a4">
                                       <li className="nav-back">
                                          <div className="nav-item-wrapper">
                                             <a href="#" role="menuitem" tabIndex="0">Dactorapp <span></span>
                                             </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="search.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-magnify me-3"></span>Doctor List </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="doctor-profile.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-account-supervisor-outline me-3"></span>Doctor Profile </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="request-appointment.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-calendar-check me-3"></span>Request Appointment </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="book-appointment.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-calendar-plus me-3"></span>Book Appointment </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="visit-info.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-information-outline me-3"></span>Visit Info </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="overview.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-file-table-box-outline me-3"></span>Checkout </a>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li className="nav-parent">
                              <input type="checkbox" id="hc-nav-1-1-2" className="hc-chk" tabIndex="-1" data-level="1" data-index="2" value="qx3l4crx3l" />
                              <div className="nav-item-wrapper">
                                 <a href="#" className="nav-item" tabIndex="0" role="menuitem" aria-controls="menu-qx3l4crx3l" aria-haspopup="true" aria-expanded="false">
                                 <span className="mdi mdi-account-outline me-3"></span>My Profile <span className="nav-next"></span>
                                 </a>
                              </div>
                              <div className="nav-wrapper nav-wrapper-1" data-level="1" data-index="2">
                                 <div className="nav-content">
                                    <h2>My Profile</h2>
                                    <ul role="menu" aria-level="2" aria-label="My Profile" aria-labelledby="menu-qx3l4crx3l">
                                       <li className="nav-back">
                                          <div className="nav-item-wrapper">
                                             <a href="#" role="menuitem" tabIndex="0">Dactorapp <span></span>
                                             </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="my-profile.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-account-outline me-3"></span>My Account </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="my-appointment-upcoming.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-calendar-clock me-3"></span>My Upcoming Appointment </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="my-appointment.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-calendar-range me-3"></span>My Appointments </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="history.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-history me-3"></span>History </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="favorite-doctor.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-cards-heart-outline me-3"></span>Favorites Doctor </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="change-profile.html" className="nav-item" tabIndex="0" role="menuitem">
                                             <span className="mdi mdi-square-edit-outline me-3"></span>Edit Profile </a>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div className="nav-item-wrapper">
                                 <a href="video.html" className="nav-item" tabIndex="0" role="menuitem">
                                 <span className="mdi mdi-video-outline me-3"></span>Video Consultation </a>
                              </div>
                           </li>
                           <li className="nav-parent">
                              <input type="checkbox" id="hc-nav-1-1-3" className="hc-chk" tabIndex="-1" data-level="1" data-index="3" value="n0h2xppv5g" />
                              <div className="nav-item-wrapper">
                                 <a href="#" className="nav-item" tabIndex="0" role="menuitem" aria-controls="menu-n0h2xppv5g" aria-haspopup="true" aria-expanded="false">
                                 <span className="mdi mdi-phone-outline me-3"></span>Doctor Call <span className="nav-next"></span>
                                 </a>
                              </div>
                              <div className="nav-wrapper nav-wrapper-1" data-level="1" data-index="3">
                                 <div className="nav-content">
                                    <h2>Doctor Call</h2>
                                    <ul role="menu" aria-level="2" aria-label="Doctor Call" aria-labelledby="menu-n0h2xppv5g">
                                       <li className="nav-back">
                                          <div className="nav-item-wrapper">
                                             <a href="#" role="menuitem" tabIndex="0">Dactorapp <span></span>
                                             </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="call.html" className="nav-item" tabIndex="0" role="menuitem">Call</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="call-doctor.html" className="nav-item" tabIndex="0" role="menuitem">Call Doctor</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="call-end.html" className="nav-item" tabIndex="0" role="menuitem">Call End</a>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li className="nav-parent">
                              <input type="checkbox" id="hc-nav-1-1-4" className="hc-chk" tabIndex="-1" data-level="1" data-index="4" value="nvrf2v10hx" />
                              <div className="nav-item-wrapper">
                                 <a href="#" className="nav-item" tabIndex="0" role="menuitem" aria-controls="menu-nvrf2v10hx" aria-haspopup="true" aria-expanded="false">
                                 <span className="mdi mdi-record-circle-outline me-3"></span>Doctor Recordings <span className="nav-next"></span>
                                 </a>
                              </div>
                              <div className="nav-wrapper nav-wrapper-1" data-level="1" data-index="4">
                                 <div className="nav-content">
                                    <h2>Doctor Recordings</h2>
                                    <ul role="menu" aria-level="2" aria-label="Doctor Recordings" aria-labelledby="menu-nvrf2v10hx">
                                       <li className="nav-back">
                                          <div className="nav-item-wrapper">
                                             <a href="#" role="menuitem" tabIndex="0">Dactorapp <span></span>
                                             </a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="recording.html" className="nav-item" tabIndex="0" role="menuitem">Recording 1</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="recording-2.html" className="nav-item" tabIndex="0" role="menuitem">Recording 2</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="play-recording.html" className="nav-item" tabIndex="0" role="menuitem">Play Recording 1</a>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="nav-item-wrapper">
                                             <a href="play-recording-2.html" className="nav-item" tabIndex="0" role="menuitem">Play Recording 2</a>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li>
                              <div className="nav-item-wrapper">
                                 <a href="message.html" className="nav-item" tabIndex="0" role="menuitem">
                                 <span className="mdi mdi-message-processing-outline me-3"></span>Message </a>
                              </div>
                           </li>
                           <li>
                              <div className="nav-item-wrapper">
                                 <a href="chat.html" className="nav-item" tabIndex="0" role="menuitem">
                                 <span className="mdi mdi-chat-processing-outline me-3"></span>Chat </a>
                              </div>
                           </li>
                           <li>
                              <div className="nav-item-wrapper">
                                 <a href="review.html" className="nav-item" tabIndex="0" role="menuitem">
                                 <span className="mdi mdi-star-half-full me-3"></span>Doctor Review </a>
                              </div>
                           </li>
                        </ul>
                        <ul role="menu" aria-level="1" className="bottom-nav">
                           <li className="home">
                              <div className="nav-item-wrapper">
                                 <a href="home.html" className="nav-item" tabIndex="0" role="menuitem">
                                    <p className="h5 m-0">
                                       <span className="mdi mdi-home-variant-outline"></span>
                                    </p>
                                    Home
                                 </a>
                              </div>
                           </li>
                           <li className="find">
                              <div className="nav-item-wrapper">
                                 <a href="search.html" className="nav-item" tabIndex="0" role="menuitem">
                                    <p className="h5 m-0">
                                       <span className="mdi mdi-magnify"></span>
                                    </p>
                                    Search
                                 </a>
                              </div>
                           </li>
                           <li className="more">
                              <div className="nav-item-wrapper">
                                 <a href="my-profile.html" className="nav-item" tabIndex="0" role="menuitem">
                                    <p className="h5 m-0">
                                       <span className="mdi mdi-account-circle-outline"></span>
                                    </p>
                                    Profile
                                 </a>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </nav>
            <div className="home d-flex flex-column vh-100">
               <div className="bg-white shadow-sm">
                  <div className="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
                     <div className="d-flex align-items-center gap-2 me-auto">
                        <a href="doctor-profile.html">
                        <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/favorite/favorite-4.jpg' alt="" className="img-fluid rounded-circle icon" />
                        </a>
                        <div className="ps-1">
                           <p className="text-orange m-0 small">Welcome</p>
                           <p className="fw-bold mb-0 text-primary fw-bold">Hey, Samantha!</p>
                        </div>
                     </div>
                     <div className="d-flex align-items-center gap-2">
                        <a href="favorite-doctor.html" className="bg-white shadow rounded-circle icon">
                        <span className="mdi mdi-cards-heart-outline mdi-18px text-primary"></span>
                        </a>
                        <a href="notification.html" className="bg-white shadow rounded-circle icon">
                        <span className="mdi mdi-bell-outline mdi-18px text-primary"></span>
                        </a>
                        <a className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center hc-nav-trigger hc-nav-1" href="#" role="button" aria-controls="hc-nav-1">
                        <i className="bi bi-list text-primary fs-5 d-flex"></i>
                        </a>
                     </div>
                  </div>
                  <div className="px-3 pb-3">
                     <form className="jose">
                        <div className="input-group rounded-4 shadow py-1 px-3 bg-light">
                           <span className="input-group-text bg-transparent text-muted border-0 p-0" id="search">
                           <span className="mdi mdi-magnify mdi-24px text-primary"></span>
                           </span>
                           <input type="text" className="form-control bg-transparent text-muted rounded-0 border-0 px-3" placeholder="Find your suitable doctor!" aria-label="Search" aria-describedby="search" />
                           <a href="#" className="input-group-text bg-transparent text-muted border-0 border-start pe-0" id="search">
                           <span className="mdi mdi-filter-outline mdi-18px"></span>
                           </a>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
                  <div className="mb-0 pt-3">
                     <Slider {...settings} className="available-doctor ps-2 ms-1">
                        <div class="bg-primary text-white rounded-4 p-3 doctor-book-back"><h1 class="mb-1 doctor-book-back-title">Book Your Next <span class="h4 text-warning overflow-hidden rounded-4 m-0 bg-white"><b class="bg-light-subtle text-primary px-1 rounded">Appointment</b><b class="bg-info fw-normal text-white px-1 rounded">Online!</b></span></h1><p class="mb-2 text-white-50 small">Book Now and Get 30% OFF</p><a href="request-appointment.html" class="btn btn-sm btn-book btn-secondary">BOOK NOW <i class="bi bi-arrow-right"></i></a><div class="doctor-book-img"><img src="https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/available-doctor-1.png" alt="" class="img-fluid" /></div></div>
                        <div class="bg-primary text-white rounded-4 p-3 doctor-book-back"><h1 class="mb-1 doctor-book-back-title">Book Your Next <span class="h4 text-warning overflow-hidden rounded-4 m-0 bg-white"><b class="bg-light-subtle text-primary px-1 rounded">Appointment</b><b class="bg-info fw-normal text-white px-1 rounded">Online!</b></span></h1><p class="mb-2 text-white-50 small">Book Now and Get 30% OFF</p><a href="request-appointment.html" class="btn btn-sm btn-book btn-secondary">BOOK NOW <i class="bi bi-arrow-right"></i></a><div class="doctor-book-img"><img src="https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/available-doctor-1.png" alt="" class="img-fluid" /></div></div>
                     </Slider>
                  </div>
                  <div className="p-3 mb-2">
                     <div className="row row-cols-4 g-2">
                        <div className="col">
                           <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                              <a href="search.html" className="link-dark">
                                 <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/doctor.png' alt='' className="img-fluid px-2" />
                                 <p className="text-truncate small pt-2 m-0">Doctor</p>
                              </a>
                           </div>
                        </div>
                        <div className="col">
                           <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                              <a href="request-appointment.html" className="link-dark">
                                 <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/schedule.png' alt='' className="img-fluid px-2" />
                                 <p className="text-truncate small pt-2 m-0">Appointment</p>
                              </a>
                           </div>
                        </div>
                        <div className="col">
                           <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                              <a href="search.html" className="link-dark">
                                 <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/prescription.png' alt='' className="img-fluid px-2" />
                                 <p className="text-truncate small pt-2 m-0">Prescription</p>
                              </a>
                           </div>
                        </div>
                        <div className="col">
                           <div className="bg-white text-center rounded-4 p-2 shadow-sm">
                              <a href="search.html" className="link-dark">
                                 <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/medicine.png' alt='' className="img-fluid px-2" />
                                 <p className="text-truncate small pt-2 m-0">Medicine</p>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mb-3">
                     <h6 className="mb-2 pb-1 fw-bold px-3 text-black">Top Doctor</h6>
                     <Slider {...settingsDoctor} className="top-doctors ps-2 ms-1">
                        <div>
                           <a href="book-appointment.html" className="link-dark">
                              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                                 <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/top-doctor-1.jpg' className="card-img-top top-doctor-img" alt="..." />
                                 <div className="card-body small p-3 osahan-card-body">
                                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Taylor Samaro</p>
                                    <p className="card-text text-muted small m-0">Dental Sargon</p>
                                 </div>
                              </div>
                           </a>
                        </div>
                        <div>
                           <a href="book-appointment.html" className="link-dark">
                              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                                 <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/top-doctor-2.jpg' className="card-img-top top-doctor-img" alt="..." />
                                 <div className="card-body small p-3 osahan-card-body">
                                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Iker Bureau</p>
                                    <p className="card-text text-muted small m-0">Dental Sargon</p>
                                 </div>
                              </div>
                           </a>
                        </div>
                        <div>
                           <a href="book-appointment.html" className="link-dark">
                              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                                 <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/top-doctor-3.jpg' className="card-img-top top-doctor-img" alt="..." />
                                 <div className="card-body small p-3 osahan-card-body">
                                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Edwin Carli</p>
                                    <p className="card-text text-muted small m-0">Dental Sargon</p>
                                 </div>
                              </div>
                           </a>
                        </div>
                        <div>
                           <a href="book-appointment.html" className="link-dark">
                              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                                 <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/top-doctor-2.jpg' className="card-img-top top-doctor-img" alt="..." />
                                 <div className="card-body small p-3 osahan-card-body">
                                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Iker Bureau</p>
                                    <p className="card-text text-muted small m-0">Dental Sargon</p>
                                 </div>
                              </div>
                           </a>
                        </div>
                        <div>
                           <a href="book-appointment.html" className="link-dark">
                              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                                 <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/home/top-doctor-3.jpg' className="card-img-top top-doctor-img" alt="..." />
                                 <div className="card-body small p-3 osahan-card-body">
                                    <p className="card-title fw-semibold mb-0 text-truncate fs-14">Dr. Edwin Carli</p>
                                    <p className="card-text text-muted m-0">Dental Sargon</p>
                                 </div>
                              </div>
                           </a>
                        </div>
                     </Slider>
                  </div>
                  <div className="p-3">
                     <h6 className="mb-2 pb-2 fw-bold text-black">Available Doctor</h6>
                     <div className="row row-cols-2 g-3">
                        <div className="col">
                           <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                              <div className="position-absolute m-2">
                                 <span className="badge text-bg-success rounded-pill float-end">ONLINE</span>
                              </div>
                              <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/video/available-doctor-1.jpg' alt="" className="card-img-top top-doctor-img" />
                              <div className="card-body small p-3 osahan-card-body">
                                 <h6 className="card-title fs-14 mb-1">Dr. Taylor Samaro</h6>
                                 <p className="card-text text-muted mb-1">MBBS, BCS</p>
                                 <div className="d-flex align-items-center gap-3 small mb-3">
                                    <div className="jose">
                                       <span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)
                                    </div>
                                    <div className="jose">
                                       <span className="mdi mdi-medical-bag text-primary me-1"></span>4+ Years
                                    </div>
                                 </div>
                                 <h6 className="mb-0">$199 <span className="text-muted small ms-1">Inc.VAT</span>
                                 </h6>
                              </div>
                              <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                                 <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                                 <span className="small">SEE DOCTOR NOW</span>
                                 <span className="mdi mdi-video-outline mdi-18px"></span>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                              <div className="position-absolute m-2">
                                 <span className="badge text-bg-success rounded-pill float-end">ONLINE</span>
                              </div>
                              <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/video/available-doctor-2.jpg' alt="" className="card-img-top top-doctor-img" />
                              <div className="card-body small p-3 osahan-card-body">
                                 <h6 className="card-title fs-14 mb-1">Dr. Leabow</h6>
                                 <p className="card-text text-muted mb-1">MBBS, BCS</p>
                                 <div className="d-flex align-items-center gap-3 small mb-3">
                                    <div className="jose">
                                       <span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)
                                    </div>
                                    <div className="jose">
                                       <span className="mdi mdi-medical-bag text-primary me-1"></span>4+ Years
                                    </div>
                                 </div>
                                 <h6 className="mb-0">$199 <span className="text-muted small ms-1">Inc.VAT</span>
                                 </h6>
                              </div>
                              <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                                 <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                                 <span className="small">SEE DOCTOR NOW</span>
                                 <span className="mdi mdi-video-outline mdi-18px"></span>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                              <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/video/available-doctor-3.jpg' alt="" className="card-img-top top-doctor-img" />
                              <div className="card-body small p-3 osahan-card-body">
                                 <h6 className="card-title fs-14 mb-1">Dr. Morgan</h6>
                                 <p className="card-text text-muted mb-1">MBBS, BCS</p>
                                 <div className="d-flex align-items-center gap-3 small mb-3">
                                    <div className="jose">
                                       <span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)
                                    </div>
                                    <div className="jose">
                                       <span className="mdi mdi-medical-bag text-primary me-1"></span>4+ Years
                                    </div>
                                 </div>
                                 <h6 className="mb-0">$199 <span className="text-muted small ms-1">Inc.VAT</span>
                                 </h6>
                              </div>
                              <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                                 <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                                 <span className="small">SEE DOCTOR NOW</span>
                                 <span className="mdi mdi-video-outline mdi-18px"></span>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                              <div className="position-absolute m-2">
                                 <span className="badge text-bg-success rounded-pill float-end">ONLINE</span>
                              </div>
                              <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/video/available-doctor-4.jpg' alt="" className="card-img-top top-doctor-img" />
                              <div className="card-body small p-3 osahan-card-body">
                                 <h6 className="card-title fs-14 mb-1">Dr. Cayden Stack</h6>
                                 <p className="card-text text-muted mb-1">MBBS, BCS</p>
                                 <div className="d-flex align-items-center gap-3 small mb-3">
                                    <div className="jose">
                                       <span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)
                                    </div>
                                    <div className="jose">
                                       <span className="mdi mdi-medical-bag text-primary me-1"></span>4+ Years
                                    </div>
                                 </div>
                                 <h6 className="mb-0">$199 <span className="text-muted small ms-1">Inc.VAT</span>
                                 </h6>
                              </div>
                              <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                                 <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                                 <span className="small">SEE DOCTOR NOW</span>
                                 <span className="mdi mdi-video-outline mdi-18px"></span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="p-3">
                     <h6 className="mb-2 pb-2 fw-bold text-black">Available Doctor</h6>
                     <div className="row row-cols-2 g-3">
                        <div className="col">
                           <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                              <div className="position-absolute m-2">
                                 <span className="badge text-bg-success rounded-pill float-end">ONLINE</span>
                              </div>
                              <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/video/available-doctor-1.jpg' alt="" className="card-img-top top-doctor-img" />
                              <div className="card-body small p-3 osahan-card-body">
                                 <h6 className="card-title fs-14 mb-1">Dr. Taylor Samaro</h6>
                                 <p className="card-text text-muted mb-1">MBBS, BCS</p>
                                 <div className="d-flex align-items-center gap-3 small mb-3">
                                    <div className="jose">
                                       <span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)
                                    </div>
                                    <div className="jose">
                                       <span className="mdi mdi-medical-bag text-primary me-1"></span>4+ Years
                                    </div>
                                 </div>
                                 <h6 className="mb-0">$199 <span className="text-muted small ms-1">Inc.VAT</span>
                                 </h6>
                              </div>
                              <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                                 <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                                 <span className="small">SEE DOCTOR NOW</span>
                                 <span className="mdi mdi-video-outline mdi-18px"></span>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                              <div className="position-absolute m-2">
                                 <span className="badge text-bg-success rounded-pill float-end">ONLINE</span>
                              </div>
                              <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/video/available-doctor-2.jpg' alt="" className="card-img-top top-doctor-img" />
                              <div className="card-body small p-3 osahan-card-body">
                                 <h6 className="card-title fs-14 mb-1">Dr. Leabow</h6>
                                 <p className="card-text text-muted mb-1">MBBS, BCS</p>
                                 <div className="d-flex align-items-center gap-3 small mb-3">
                                    <div className="jose">
                                       <span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)
                                    </div>
                                    <div className="jose">
                                       <span className="mdi mdi-medical-bag text-primary me-1"></span>4+ Years
                                    </div>
                                 </div>
                                 <h6 className="mb-0">$199 <span className="text-muted small ms-1">Inc.VAT</span>
                                 </h6>
                              </div>
                              <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                                 <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                                 <span className="small">SEE DOCTOR NOW</span>
                                 <span className="mdi mdi-video-outline mdi-18px"></span>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                              <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/video/available-doctor-3.jpg' alt="" className="card-img-top top-doctor-img" />
                              <div className="card-body small p-3 osahan-card-body">
                                 <h6 className="card-title fs-14 mb-1">Dr. Morgan</h6>
                                 <p className="card-text text-muted mb-1">MBBS, BCS</p>
                                 <div className="d-flex align-items-center gap-3 small mb-3">
                                    <div className="jose">
                                       <span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)
                                    </div>
                                    <div className="jose">
                                       <span className="mdi mdi-medical-bag text-primary me-1"></span>4+ Years
                                    </div>
                                 </div>
                                 <h6 className="mb-0">$199 <span className="text-muted small ms-1">Inc.VAT</span>
                                 </h6>
                              </div>
                              <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                                 <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                                 <span className="small">SEE DOCTOR NOW</span>
                                 <span className="mdi mdi-video-outline mdi-18px"></span>
                                 </a>
                              </div>
                           </div>
                        </div>
                        <div className="col">
                           <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                              <div className="position-absolute m-2">
                                 <span className="badge text-bg-success rounded-pill float-end">ONLINE</span>
                              </div>
                              <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/video/available-doctor-4.jpg' alt="" className="card-img-top top-doctor-img" />
                              <div className="card-body small p-3 osahan-card-body">
                                 <h6 className="card-title fs-14 mb-1">Dr. Cayden Stack</h6>
                                 <p className="card-text text-muted mb-1">MBBS, BCS</p>
                                 <div className="d-flex align-items-center gap-3 small mb-3">
                                    <div className="jose">
                                       <span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)
                                    </div>
                                    <div className="jose">
                                       <span className="mdi mdi-medical-bag text-primary me-1"></span>4+ Years
                                    </div>
                                 </div>
                                 <h6 className="mb-0">$199 <span className="text-muted small ms-1">Inc.VAT</span>
                                 </h6>
                              </div>
                              <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                                 <a href="call-doctor.html" className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                                 <span className="small">SEE DOCTOR NOW</span>
                                 <span className="mdi mdi-video-outline mdi-18px"></span>
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer mt-auto p-3 fix-osahan-footer">
                  <div className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
                     <a href="home.html" className="col footer-bottom-nav active">
                     <span className="mdi mdi-home-variant-outline mdi-24px"></span>
                     <span>Home</span>
                     </a>
                     <a href="search.html" className="col footer-bottom-nav">
                     <span className="mdi mdi-magnify mdi-24px"></span>
                     <span>Search</span>
                     </a>
                     <a href="video.html" className="col footer-bottom-nav">
                     <span className="mdi mdi-video-outline mdi-24px"></span>
                     <span>Video</span>
                     </a>
                     <a href="message.html" className="col footer-bottom-nav">
                     <span className="mdi mdi-message-processing-outline mdi-24px"></span>
                     <span>Chat</span>
                     </a>
                     <a href="my-profile.html" className="col footer-bottom-nav">
                     <span className="mdi mdi-account-outline mdi-24px"></span>
                     <span>Profile</span>
                     </a>
                  </div>
               </div>
            </div>
            <nav id="main-nav" className="hc-nav-original hc-nav-1">
               <ul className="second-nav">
                  <li className="osahan-user-profile bg-primary">
                     <div className="d-flex align-items-center gap-2">
                        <img src='https://appdoutoroficial.github.io/appdoutor-pessoas/img/favorite/favorite-4.jpg' alt="" className="rounded-pill img-fluid" />
                        <div className="ps-1">
                           <h6 className="fw-bold text-white mb-0">Hey, Samantha!</h6>
                           <p className="text-white-50 m-0 small">+91 12345-67890</p>
                        </div>
                     </div>
                  </li>
                  <li>
                     <a href="index.html">
                     <span className="mdi mdi-cellphone me-3"></span>Splash </a>
                  </li>
                  <li>
                     <a href="#">
                     <span className="mdi mdi-login me-3"></span>Authentication </a>
                     <ul>
                        <li>
                           <a href="landing.html">Landing</a>
                        </li>
                        <li>
                           <a href="welcome.html">Welcome</a>
                        </li>
                        <li>
                           <a href="sign-up.html">Sign up</a>
                        </li>
                        <li>
                           <a href="sign-in.html">Sign in</a>
                        </li>
                        <li>
                           <a href="sign-in-email.html">Sign in with email</a>
                        </li>
                        <li>
                           <a href="forget-password.html">Forget Password</a>
                        </li>
                        <li>
                           <a href="reset-password.html">Reset Password</a>
                        </li>
                        <li>
                           <a href="verify.html">Verify</a>
                        </li>
                        <li>
                           <a href="congrats.html">Congrats</a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="notification.html">
                     <span className="mdi mdi-bell-outline me-3"></span>Notification </a>
                  </li>
                  <li>
                     <a href="home.html">
                     <span className="mdi mdi-home-variant-outline me-3"></span>Homepage </a>
                  </li>
                  <li>
                     <a href="#">
                     <span className="mdi mdi-magnify me-3"></span>Doctors </a>
                     <ul>
                        <li>
                           <a href="search.html">
                           <span className="mdi mdi-magnify me-3"></span>Doctor List </a>
                        </li>
                        <li>
                           <a href="doctor-profile.html">
                           <span className="mdi mdi-account-supervisor-outline me-3"></span>Doctor Profile </a>
                        </li>
                        <li>
                           <a href="request-appointment.html">
                           <span className="mdi mdi-calendar-check me-3"></span>Request Appointment </a>
                        </li>
                        <li>
                           <a href="book-appointment.html">
                           <span className="mdi mdi-calendar-plus me-3"></span>Book Appointment </a>
                        </li>
                        <li>
                           <a href="visit-info.html">
                           <span className="mdi mdi-information-outline me-3"></span>Visit Info </a>
                        </li>
                        <li>
                           <a href="overview.html">
                           <span className="mdi mdi-file-table-box-outline me-3"></span>Checkout </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="#">
                     <span className="mdi mdi-account-outline me-3"></span>My Profile </a>
                     <ul>
                        <li>
                           <a href="my-profile.html">
                           <span className="mdi mdi-account-outline me-3"></span>My Account </a>
                        </li>
                        <li>
                           <a href="my-appointment-upcoming.html">
                           <span className="mdi mdi-calendar-clock me-3"></span>My Upcoming Appointment </a>
                        </li>
                        <li>
                           <a href="my-appointment.html">
                           <span className="mdi mdi-calendar-range me-3"></span>My Appointments </a>
                        </li>
                        <li>
                           <a href="history.html">
                           <span className="mdi mdi-history me-3"></span>History </a>
                        </li>
                        <li>
                           <a href="favorite-doctor.html">
                           <span className="mdi mdi-cards-heart-outline me-3"></span>Favorites Doctor </a>
                        </li>
                        <li>
                           <a href="change-profile.html">
                           <span className="mdi mdi-square-edit-outline me-3"></span>Edit Profile </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="video.html">
                     <span className="mdi mdi-video-outline me-3"></span>Video Consultation </a>
                  </li>
                  <li>
                     <a href="#">
                     <span className="mdi mdi-phone-outline me-3"></span>Doctor Call </a>
                     <ul>
                        <li>
                           <a href="call.html">Call</a>
                        </li>
                        <li>
                           <a href="call-doctor.html">Call Doctor</a>
                        </li>
                        <li>
                           <a href="call-end.html">Call End</a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="#">
                     <span className="mdi mdi-record-circle-outline me-3"></span>Doctor Recordings </a>
                     <ul>
                        <li>
                           <a href="recording.html">Recording 1</a>
                        </li>
                        <li>
                           <a href="recording-2.html">Recording 2</a>
                        </li>
                        <li>
                           <a href="play-recording.html">Play Recording 1</a>
                        </li>
                        <li>
                           <a href="play-recording-2.html">Play Recording 2</a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="message.html">
                     <span className="mdi mdi-message-processing-outline me-3"></span>Message </a>
                  </li>
                  <li>
                     <a href="chat.html">
                     <span className="mdi mdi-chat-processing-outline me-3"></span>Chat </a>
                  </li>
                  <li>
                     <a href="review.html">
                     <span className="mdi mdi-star-half-full me-3"></span>Doctor Review </a>
                  </li>
               </ul>
               <ul className="bottom-nav">
                  <li className="home">
                     <a href="home.html">
                        <p className="h5 m-0">
                           <span className="mdi mdi-home-variant-outline"></span>
                        </p>
                        Home
                     </a>
                  </li>
                  <li className="find">
                     <a href="search.html">
                        <p className="h5 m-0">
                           <span className="mdi mdi-magnify"></span>
                        </p>
                        Search
                     </a>
                  </li>
                  <li className="more">
                     <a href="my-profile.html">
                        <p className="h5 m-0">
                           <span className="mdi mdi-account-circle-outline"></span>
                        </p>
                        Profile
                     </a>
                  </li>
               </ul>
            </nav>
        </>
    )
}

export default Inicial;