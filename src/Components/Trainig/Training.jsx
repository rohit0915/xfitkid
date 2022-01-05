import React, { useEffect } from 'react'
import { Grid, Button, Card } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css"
import "./Training.css"
import pc from "../images/pc.png"
import arrow from "../images/arrow.gif"
import trainkid from "../images/trainkid.png"

function Training() {

    const TrainigArr = [
        { heading: "Live Online Training" },
        { heading: "Live Online Training" },
    ]

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <>
            <div className='training_padding'>
                <Grid className="Component_main_grid">
                    <Grid item md={6}>
                        <div data-aos="fade-down">
                            <img src={trainkid} alt="" className='image_height_Training'/>
                        </div>
                    </Grid>

                    <Grid item md={6}>
                        <div data-aos="fade-down" className='mt-5'><p className="home_Page_heading">Traning that suits you the  <span className="heading_content_formatting">best</span> <span><img src={arrow} alt="" style={{ height: "43px" }} /></span></p></div>
                        <div data-aos="fade-down" className='mt-2 training_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className='mt-4'>
                            {TrainigArr.map((item, index) => (
                                <Card data-aos="fade-down" className="Card_shadow p-4 mt-2">

                                    <div className='d-flex'>
                                        <span>
                                            <img src={pc} alt="" />
                                        </span>
                                        <span className='ml-3'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='Trainig_heading'>{item.heading}</div>
                                                <div className='slots_traing float-right'>Limited Slots left</div>
                                            </div>
                                            <div className='haeding_data mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do scs cscscscseiusmod tempor incididunt ut labore et dolore.</div>
                                            <div className='mt-3 mb-3'><span className='book_trainig_trial'>Book a FREE trail </span></div>
                                        </span>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </Grid>

                </Grid>

            </div >
        </>
    )
}

export default Training
