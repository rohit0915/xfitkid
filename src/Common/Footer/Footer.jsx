import React from 'react';
import { Grid, Button } from "@material-ui/core"
import "./Footer.css";

function Footer() {
    return (
        <>
            <div className='mt-3'>
                <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                    <Grid item md={3} sm={12}></Grid>
                    <Grid item md={6} sm={12}>
                        <div className='text-center'>
                            <span><i className='fa fa-instagram icon_Color' /></span>
                            <span className='ml-4'><i className='fa fa-facebook icon_Color' /></span>
                            <span className='ml-4'><i className='fa fa-youtube icon_Color' /></span>
                            <span className='ml-4'><i className='fa fa-linkedin icon_Color' /></span>
                        </div>

                        <div className='text-center mt-3'>
                            <span className='get_touch'>Get in Touch</span>
                        </div>

                        <div className='text-center mt-3'>
                            <span className='footer_email'>team@xfitkids.in</span>
                        </div>

                        <div className='text-center mt-2'>
                            <span className='Footer_links'>Terms & Conditions</span>
                            <span className='Footer_links ml-4'>Privacy & Policy</span>
                            <span className='Footer_links ml-4'>Designed By <i className='fa fa-instagram ' />  Design Suspect </span>
                        </div>

                        <div className='text-center mt-3 mb-4'>
                            <span className='copyright_fooer'>@ XFitKids {new Date().getFullYear()}</span>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={12}>
                        <div className='text-center mt-3'>
                            <span className='get_touch'>Let's Talk</span>
                        </div>
                        <div className='text-center mt-2'>
                            <Button className="Footer_Button">Start Conversation</Button>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default Footer
