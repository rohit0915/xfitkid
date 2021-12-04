import React from 'react'
import { Grid, Card, Button } from "@material-ui/core";

import "./KidsHealth.css"

import y1 from "../images/y1.jpg";
import y2 from "../images/y2.jpg";
import y3 from "../images/y3.jpg";
import Ellipse1 from "../images/Ellipse1.png";
import Ellipse2 from "../images/Ellipse2.png";
import Ellipse3 from "../images/Ellipse3.png";
import Ellipse4 from "../images/Ellipse4.png";

function KidsHealth() {
    return (
        <>
            <div className="mt-2 mb-2">
                <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                    <Grid item md={6} className="p-3 crasoul_border">

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
                                    <img className="d-block health_crasoul_image" src={y2} alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block health_crasoul_image" src={y3} alt="Third slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block health_crasoul_image" src={y3} alt="Third slide" />
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

                        <div className="mt-3 mb-2">
                            <Button className="watch_button">Watch how we create XFit Kids <i class="fa fa-play-circle ml-2"></i></Button>
                        </div>

                    </Grid>


                    <Grid item md={6} className="p-3">
                        <div className="about_us_heading">About us</div>
                        <div className="dediacted_kids_health mt-3">Dedicated towards your<br /><span className="kids_heah_formating"> kids health</span></div>

                        <div className="dedicated_helath_content mt-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                        <div className="mt-3 mb-2">
                            <Button className="Learn_more_btn">View More</Button>
                        </div>

                        <div className="mt-4 mb-2">
                            <span className="watch_us">Watch us on</span>
                            <span className="ml-3 icon_color">
                                <i className="fa fa-instagram" />
                            </span>
                            <span  className="ml-3 icon_color">
                                <i className="fa fa-facebook" />
                            </span>
                            <span  className="ml-3 icon_color">
                                <i className="fa fa-youtube" />
                            </span>
                        </div>

                    </Grid>
                </Grid>


                <div className="mt-3 mb-2">
                    <div className="bottom_links">
                        <Grid className="Component_main_grid mt-4 mb-2  ">
                            <Grid item md={3} className="p-3 text-center">
                                <div>
                                    <img src={Ellipse1} alt="" />
                                    <div className="bootom_links_content mt-1">50+ Skilled Coaches</div>
                                </div>
                            </Grid>
                            <Grid item md={3} className="p-3 text-center">
                                <img src={Ellipse2} alt="" />
                                <div className="bootom_links_content mt-1">Skill India Certified </div>
                            </Grid>

                            <Grid item md={3} className="p-3 text-center">
                                <img src={Ellipse3} alt="" />
                                <div className="bootom_links_content mt-1">100 + kids</div>
                            </Grid>

                            <Grid item md={3} className="p-3 text-center">
                                <img src={Ellipse4} alt="" />
                                <div className="bootom_links_content mt-1">Scientific Wrokouts</div>
                            </Grid>
                        </Grid>
                    </div>

                </div>
            </div>
        </>
    )
}

export default KidsHealth
