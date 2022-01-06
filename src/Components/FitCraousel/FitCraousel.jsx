import React, { Component } from "react";
import Slider from "react-slick";
import { Grid, Button } from "@material-ui/core"
import "./FitCraousel.css"
import Gold_Star from "../images/Gold_Star.png";
import champ from "../images/champ.png"
import m1 from "../images/m1.png"
import m2 from "../images/m2.png"

export default class FitCraousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className='training_padding'>

                <Slider {...settings}>

                    <div>
                        <Grid className="Component_main_grid p-3">
                            <Grid item md={6}>
                                <div>
                                    <img src={champ} alt="" />
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className="champs_age">Nivaan Pal, Age 10</div>
                                <div className="mt-2 d-flex">
                                    <span className="rank">Rank 1</span>
                                    <span className="ml-5 d-flex rank ">
                                        <div><img src={Gold_Star} alt="" className="mr-1" /></div>
                                        <div>2000</div>
                                    </span>
                                </div>

                                <div className="training_content mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

                                <div className="rank mt-5 mb-5">Certifications</div>
                                <div className="mt-2 d-flex">
                                    <span className="">
                                        <div><img src={m1} alt="" className="mr-1" /></div>
                                        <div>Level 1</div>
                                    </span>
                                    <span className="ml-5  ">
                                        <div><img src={m2} alt="" className="mr-1" /></div>
                                        <div>Level 2</div>
                                    </span>
                                </div>

                                <div className="mt-5 mb-3">
                                    <Button className='watch_now_button'>Get Certified</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Grid className="Component_main_grid p-3">
                            <Grid item md={6}>
                                <div>
                                    <img src={champ} alt="" />
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className="champs_age">Nivaan Pal, Age 10</div>
                                <div className="mt-2 d-flex">
                                    <span className="rank">Rank 1</span>
                                    <span className="ml-5 d-flex rank ">
                                        <div><img src={Gold_Star} alt="" className="mr-1" /></div>
                                        <div>2000</div>
                                    </span>
                                </div>

                                <div className="training_content mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

                                <div className="rank mt-5 mb-5">Certifications</div>
                                <div className="mt-2 d-flex">
                                    <span className="">
                                        <div><img src={m1} alt="" className="mr-1" /></div>
                                        <div>Level 1</div>
                                    </span>
                                    <span className="ml-5  ">
                                        <div><img src={m2} alt="" className="mr-1" /></div>
                                        <div>Level 2</div>
                                    </span>
                                </div>

                                <div className="mt-5 mb-3">
                                    <Button className='watch_now_button'>Get Certified</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Grid className="Component_main_grid p-3">
                            <Grid item md={6}>
                                <div>
                                    <img src={champ} alt="" />
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className="champs_age">Nivaan Pal, Age 10</div>
                                <div className="mt-2 d-flex">
                                    <span className="rank">Rank 1</span>
                                    <span className="ml-5 d-flex rank ">
                                        <div><img src={Gold_Star} alt="" className="mr-1" /></div>
                                        <div>2000</div>
                                    </span>
                                </div>

                                <div className="training_content mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

                                <div className="rank mt-5 mb-5">Certifications</div>
                                <div className="mt-2 d-flex">
                                    <span className="">
                                        <div><img src={m1} alt="" className="mr-1" /></div>
                                        <div>Level 1</div>
                                    </span>
                                    <span className="ml-5  ">
                                        <div><img src={m2} alt="" className="mr-1" /></div>
                                        <div>Level 2</div>
                                    </span>
                                </div>

                                <div className="mt-5 mb-3">
                                    <Button className='watch_now_button'>Get Certified</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <div>
                        <Grid className="Component_main_grid p-3">
                            <Grid item md={6}>
                                <div>
                                    <img src={champ} alt="" />
                                </div>
                            </Grid>
                            <Grid item md={6}>
                                <div className="champs_age">Nivaan Pal, Age 10</div>
                                <div className="mt-2 d-flex">
                                    <span className="rank">Rank 1</span>
                                    <span className="ml-5 d-flex rank ">
                                        <div><img src={Gold_Star} alt="" className="mr-1" /></div>
                                        <div>2000</div>
                                    </span>
                                </div>

                                <div className="training_content mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>

                                <div className="rank mt-5 mb-5">Certifications</div>
                                <div className="mt-2 d-flex">
                                    <span className="">
                                        <div><img src={m1} alt="" className="mr-1" /></div>
                                        <div>Level 1</div>
                                    </span>
                                    <span className="ml-5  ">
                                        <div><img src={m2} alt="" className="mr-1" /></div>
                                        <div>Level 2</div>
                                    </span>
                                </div>

                                <div className="mt-5 mb-3">
                                    <Button className='watch_now_button'>Get Certified</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                </Slider>

                <div className="Fit_bottom_card p-3">
                    <div className="d-flex justify-content-between">
                        <span className="d-flex">
                            <div><img src={Gold_Star} alt="" className="mr-1" /></div>
                            <div className="Fit_card_data">May be you belong among these stars !</div>
                        </span>
                        <span>
                            <div></div>
                            <div className="view_leads">View Leaderboard</div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
