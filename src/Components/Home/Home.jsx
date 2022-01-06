import React, { useState } from 'react';
import { Grid, Card, Button } from "@material-ui/core"

//phone input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

//used css & image
import "./Home.css";
import y1 from "../images/y1.png";
import y2 from "../images/y2.jpg";
import y3 from "../images/y3.jpg";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";
import c6 from "../images/c6.png";
import xfit from "../images/xfit.png";
import ellipse from '../images/ellipse.png';

//scroll animation
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Collaborate from '../Collaborate/Collaborate';
import Training from '../Trainig/Training';
import TrainYourChamp from '../TrainYourChamp/TrainYourChamp';
import FitCraousel from '../FitCraousel/FitCraousel';
import WhyFitKids from '../WhyFitKids/WhyFitKids';


function Home() {
    const [activetab, setactivetab] = useState("Online Training")
    const tabsData = [
        { image: c1, heading: "Online Training" },
        { image: c2, heading: "Offline Training" },
        { image: c3, heading: "Free Content" },
        { image: c4, heading: "Certifications" },
        { image: c5, heading: "Events" },
        { image: c6, heading: "Merchandise" },
        // { image: c7, heading: "Nutrition" },
    ]
    const handleHeading = (data) => {
        setactivetab(data)
    }
    return (
        <>
            <div className="content_padding">
                <div className="mt-2 mb-2">
                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={5} sm={12}>
                            <div className='mt-5'><p className="home_Page_heading">India's 1st 360 degree fitness solution for <span className="heading_content_formatting">kids</span> </p></div>
                            <div className='home_data '>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>

                            <div className='text-right mt-5 '>
                                <ScrollAnimation animateIn='bounceInTop'
                                    animateOut='bounceOutBottom'>
                                    <img src={xfit} alt="" />
                                </ScrollAnimation>
                            </div>
                        </Grid>

                        <Grid item md={1}></Grid>

                        <Grid item md={6} sm={12}>

                            <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block health_crasoul_image" src={y1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block health_crasoul_image" src={y1} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block health_crasoul_image" src={y1} alt="Third slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block health_crasoul_image" src={y1} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className='mt-2 mb-3'>

                <div className='home_cards_Icons_background'>
                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={4} sm={12}>
                            <div className='content_to_icons mt-5 ml-5'>Where Xfit <br />
                                teams make kids<br />
                                real champions</div>
                            <div className='what_offers mt-2 ml-5'>What we offer</div>
                        </Grid>
                        <Grid item md={2} sm={12} className='p-2'>

                            <div className='card_border '>
                                <div className='text-center p-3'>
                                    <img src={ellipse} alt="" />
                                    <div className='view_online mt-3 mb-4'>Live Online</div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={2} sm={12} className='p-2'>
                            <div className='card_border '>
                                <div className='text-center p-3'>
                                    <img src={ellipse} alt="" />
                                    <div className='view_online mt-3 mb-4'>Live Online</div>
                                </div>
                            </div>
                        </Grid>


                        <Grid item md={2} sm={12} className='p-2'>

                            <div className='card_border '>
                                <div className='text-center p-3'>
                                    <img src={ellipse} alt="" />
                                    <div className='view_online mt-3 mb-4'>Live Online</div>
                                </div>
                            </div>
                        </Grid>

                        <Grid item md={2} sm={12} className='p-2'>
                            <div className='card_border '>
                                <div className='text-center p-3'>
                                    <img src={ellipse} alt="" />
                                    <div className='view_online mt-3 mb-4'>Live Online</div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>


            </div>

            <div>
                <Training />
            </div>

            <div>
                <TrainYourChamp />
            </div>

            <div className='mt-2 mb-5'>
                <div className='mt-5 text-center'><p className="home_Page_heading">Our Xfit <span className="heading_content_formatting">Champs</span> </p></div>
                <div className='mt-2 training_content text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt.</div>

                <div className='mt-3 mb-4'>
                    <FitCraousel />
                </div>
            </div>

            <div className='mt-2 mb-5'>
                <div className='play_back_image'>
                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={5} sm={12}></Grid>
                        <Grid item md={2} sm={12} className='p-3'>
                            <div className='Play_Name'>Advik, Age 8</div>
                            <div className='jr_knight mt-2'>Jr. Knight</div>
                            <div className='Watch_now mt-2'> Watch how our champ achieved his fitness goals with us</div>

                            <div className='play_icons mt-3'><i class="fa fa-play-circle mr-2"></i>Play</div>
                        </Grid>
                        <Grid item md={4} sm={12}></Grid>
                    </Grid>
                </div>
            </div>

            <div>
                <WhyFitKids />
            </div>

            <div>
                <Collaborate />
            </div>





        </>
    )
}

export default Home
