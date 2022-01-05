import React from 'react'
import { Grid, Card, Button } from "@material-ui/core"
import "./Collaborate.css";

function Collaborate() {
    return (
        <>
            <div className='mt-5 mb-5'>
                <div className='text-center'><p className="home_Page_heading">Want to collaborate <span className="heading_content_formatting"> with us?</span> </p></div>
                <div className='text-center mt-2 mb-3 colloborate_content'>Lorem ipsum dolor sit amet, consectetur adipiscing </div>

                <div className='mt-2 mb-3'>
                    <Grid className="Component_main_grid mt-4 mb-2 p-3 ">
                        <Grid item md={4} sm={12}></Grid>
                        <Grid item md={4} sm={12}>
                            <Card className="Card_shadow p-3">
                                <div>
                                    <span className='email_input'>
                                        <input placeholder="Enter your Email Id" className="input_mail" />
                                    </span>
                                    <span className='send_data ml-2'>
                                        Send
                                    </span>
                                </div>
                            </Card>
                        </Grid>

                        <Grid item md={4} sm={12}></Grid>
                    </Grid>

                </div>
            </div>
        </>
    )
}

export default Collaborate
