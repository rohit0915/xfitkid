import React, { useEffect } from 'react'
import { Grid, Button, Card } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css"
import "./TrainYourChamp.css"
import laptop from "../images/laptop.png"
import babygirl from "../images/babygirl.png"

function TrainYourChamp() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <>

            <Grid className="Component_main_grid">

                <Grid item md={6}>
                    <div className='mt-5 d-flex'>
                        <span data-aos="fade-right"><img src={babygirl} alt="" /></span>
                        <span>
                            <div data-aos="fade-down" className='mt-5'><p className="home_Page_heading">Train your champ with a  <br /> <span className="heading_content_formatting">single click</span> </p></div>
                            <div data-aos="fade-down" className='mt-2 training_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt.</div>
                            <div data-aos="fade-down" className='mt-3'>
                                <Button className='train_chap_button'>View Now</Button>
                            </div>

                            <div data-aos="fade-down" className='mt-4'>
                                <span className='quantity_tutorial'>100 + </span>
                                <span className='quantity_Heading'>Single Workouts</span>
                            </div>

                            <div data-aos="fade-down" className='mt-5'>
                                <span className='quantity_tutorial'>100 + </span>
                                <span className='quantity_Heading'>Tutorials</span>
                            </div>

                            <div data-aos="fade-down" className='mt-3'>
                                <Button className='watch_now_button'>Watch Now</Button>
                            </div>
                        </span>
                    </div>


                </Grid>

                <Grid item md={6}>
                    <div data-aos="fade-down">
                        <img src={laptop} alt="" className='image_height_YourChamp' />
                    </div>
                </Grid>

            </Grid>


        </>
    )
}

export default TrainYourChamp
