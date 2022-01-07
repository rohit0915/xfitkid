import React, { useEffect } from 'react'
import { Grid, Button, Card, Divider } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css"
import "./ParentsReview.css"
import Torus from "../images/Torus.png"
import P1 from "../images/P1.png"
import Slider from "react-slick";

function ParentsReview() {
    const parentNameArr = [
        { name: "Poonam Pandey" },
        { name: "Poonam Pandey" },
        { name: "Poonam Pandey" },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <>
            <div className='training_padding mb-5'>
                <Grid className="Component_main_grid">

                    <Grid item md={6}>
                        <div data-aos="fade-down" className='mt-5'><p className="home_Page_heading">Our champs parents love what <span className="heading_content_formatting">we do </span> </p></div>
                        <div data-aos="fade-down" className='mt-2 training_content'>Over 5,000 kids all over the world transforming with us successfully </div>
                        <div>
                            {parentNameArr.map((item, index) => (
                                <div className='d-flex mt-5' data-aos="fade-down">
                                    <span>
                                        <img src={P1} alt="" className='Parent_Image' />
                                    </span>
                                    <span className='ml-5 mt-2'>
                                        <div className="parent_Name">{item.name}</div>
                                        <div className='parnet_child'>Anugrah Parent</div>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Grid>

                    <Grid item md={6}>
                        <div>
                            <div className='text-right' data-aos="fade-left">
                                <img src={Torus} alt="" />
                            </div>

                            <div className='mt-5'>
                                <Slider {...settings}>
                                    <div className='p-3'>
                                        <div className='Review_Title'>Leorum Ipsum dummy text</div>
                                        <div className='mt-2 reaviw_star'><i className='fa fa-star' /></div>
                                        <div className='mt-2 review_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </div>
                                    </div>

                                    <div className='p-3'>
                                        <div className='Review_Title'>Leorum Ipsum dummy text</div>
                                        <div className='mt-2 reaviw_star'><i className='fa fa-star' /></div>
                                        <div className='mt-2 review_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </div>
                                    </div>

                                </Slider>
                            </div>
                        </div>
                    </Grid>

                </Grid>

            </div >
        </>
    )
}

export default ParentsReview
