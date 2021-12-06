import React from 'react'
import { Grid, Button } from "@material-ui/core";

import "./Training.css"

import training from "../images/training.png";
import y1 from "../images/y1.jpg";
import y2 from "../images/y2.jpg";


//tab pannel
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Training() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <div className="Trainig_background_clr">
                <Grid className="Component_main_grid">

                    <Grid item md={6}>
                        <div className="training_padding">
                            <div className="trainig_top_label">Training</div>
                            <div className="trainig_heading mt-3">Training that suits you the best</div>
                            <div>
                                <img src={training} alt="" className="training_image" />
                            </div>
                        </div>
                    </Grid>


                    <Grid item md={6} className="p-3">


                        <Grid className="Component_main_grid">
                            <Grid item md={6} className="p-2">
                                <div>
                                    <Button className="Training_Online_offline_btn">Offline</Button>
                                </div>
                            </Grid>

                            <Grid item md={6} className="p-2">
                                <div>
                                    <Button className="Training_Online_offline_btn">Online</Button>
                                </div>
                            </Grid>


                        </Grid>

                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={y2} className="d-block health_crasoul_image" alt="" />
                                    <div className="carousel-caption d-md-block">

                                        <div>1796, Netaji Subhash Marg, Block A, Greenwood City, Sector 45, Gurugram, Haryana 122003</div>
                                        <div><Button className="watch_button">Book a FREE trail</Button></div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={y1} className="d-block health_crasoul_image" alt="" />
                                    <div className="carousel-caption d-md-block">
                                        <div>1796, Netaji Subhash Marg, Block A, Greenwood City, Sector 45, Gurugram, Haryana 122003</div>
                                        <div><Button className="watch_button">Book a FREE trail</Button></div>
                                    </div>
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



                        <div className="crsoul_location mt-3">Location</div>

                        <div className="mt-2 data_tabs">
                            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                                <Tab label="New" {...a11yProps(0)} className="button_login_decoration  tabs_text_formatting" />
                                <Tab label="Gurgaon" {...a11yProps(1)} className="button_login_decoration  tabs_text_formatting" />
                                <Tab label="Delhi" {...a11yProps(2)} className="button_login_decoration  tabs_text_formatting" />
                            </Tabs>
                        </div>


                        {/* first tab data*/}
                        <TabPanel value={value} index={0}>
                            <Grid className="Component_main_grid">
                                <Grid item md={3} className="p-2">
                                    <div>
                                        <Button className="Training_btn">C6 376, Delhi</Button>
                                    </div>
                                </Grid>

                                <Grid item md={3} className="p-2">
                                    <div>
                                        <Button className="Training_btn">CF 376, Delhi</Button>
                                    </div>
                                </Grid>

                                <Grid item md={3} className="p-2">
                                    <div>
                                        <Button className="Training_btn">DA 676, Delhi</Button>
                                    </div>
                                </Grid>
                                <Grid item md={3} className="p-2">
                                    <div>
                                        <Button className="Training_btn">PN 67, Delhi</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </TabPanel>


                        {/* second tab data*/}
                        <TabPanel value={value} index={1}>
                            <Grid className="Component_main_grid">
                                <Grid item md={3} className="p-2">
                                    <div>
                                        <Button className="Training_btn">C6 376, Delhi</Button>
                                    </div>
                                </Grid>

                                <Grid item md={3} className="p-2">
                                    <div>
                                        <Button className="Training_btn">CF 376, Delhi</Button>
                                    </div>
                                </Grid>

                                <Grid item md={3} className="p-2">
                                    <div>
                                        <Button className="Training_btn">DA 676, Delhi</Button>
                                    </div>
                                </Grid>
                                <Grid item md={3} className="p-2">

                                </Grid>
                            </Grid>
                        </TabPanel>


                        {/* third tab data*/}
                        <TabPanel value={value} index={2}>
                            <Grid className="Component_main_grid">
                                <Grid item md={3} className="p-2">
                                    <div>
                                        <Button className="Training_btn">C6 376, Delhi</Button>
                                    </div>
                                </Grid>

                                <Grid item md={3} className="p-2">
                                    <div>
                                        <Button className="Training_btn">CF 376, Delhi</Button>
                                    </div>
                                </Grid>

                                <Grid item md={6} className="p-2">

                                </Grid>
                            </Grid>
                        </TabPanel>

                    </Grid>

                </Grid>

            </div >
        </>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default Training
