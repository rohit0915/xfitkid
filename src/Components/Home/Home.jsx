import React, { useState } from 'react';
import { Grid, Card, Button } from "@material-ui/core"

//phone input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

//used css & image
import "./Home.css";
import kid from "../images/kid.png";
import right_child from "../images/right_child.png";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";
import c6 from "../images/c6.png";



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
                        <Grid item md={5}>
                            <div><p className="home_Page_heading">India’s 1st 360 degree fitness solution for <span className="heading_content_formatting">kids</span> </p></div>
                            <div className=" mt-2 mb-2 p-2">

                                <Card className="Card_shadow m-2 p-2">
                                    <div><p className="form_hadding">Book your <span className="heading_content_formatting">FREE</span> trail  <span className="form_heading2">Limited spots left</span></p> </div>

                                    <div>
                                        <input type="text" className="form-control" placeholder="Your champ’s name" />
                                    </div>

                                    <div className="mt-3 mb-3">
                                        <PhoneInput
                                            country={'in'}
                                            countryCodeEditable={false}
                                        // value={phone}
                                        // onChange={(e) => {
                                        //     setphoneError(false)
                                        //     setphone(e)
                                        // }}
                                        />
                                        <div className="form_heading2 text-right">Parent mobile number</div>
                                    </div>

                                    <div className="mt-3 mb-3">
                                        <div className="textfeild_heading">Enter your champ’s age</div>
                                        <div className="mt-1">
                                            <input type="date" className="form-control" placeholder="Your champ’s name" />
                                        </div>
                                    </div>

                                    <div className="mt-2 mb-2">
                                        <Button className="Button_home_page">Book a FREE Trial</Button>
                                    </div>
                                </Card>
                            </div>
                        </Grid>

                        <Grid item md={1}>
                            <span >
                                <img src={kid} className="Kid_image" alt="" />
                            </span>
                        </Grid>
                        <Grid item md={6}>
                            <img src={right_child} alt="" className="right_child_image" />
                            {/* <img src={righticon} alt="" className="right_icon" /> */}
                        </Grid>
                    </Grid>
                </div>

                <div className="mt-2 mb-3">
                    <div className="what_we_offer">What we Offer</div>
                    <div className="Tabs_Background_color">
                        <Grid className="Component_main_grid mt-4 mb-2">
                            {tabsData.map((item, index) => (
                                <Grid item md={2} onClick={() => handleHeading(item.heading)}>
                                    <div
                                        className={`text-white text-center p-3 ${item.heading === activetab
                                            ? "active_tab"
                                            : ""
                                            } `}
                                    >
                                        <div><img src={item.image} alt="" /></div>
                                        <div className="mt-2">{item.heading}</div>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>

                <div className="mt-3 mb-3">
                    {activetab === "Online Training" && (
                        <div>Online Training:----No Data</div>
                    )}
                </div>

                <div className="mt-2 mb-2">
                    {activetab === "Offline Training" && (
                        <div>Offline Training-----No Data</div>
                    )}
                </div>


                <div className="mt-2 mb-2">
                    {activetab === "Free Content" && (
                        <div>Free Content:---No Data</div>
                    )}
                </div>


                <div className="mt-2 mb-2">
                    {activetab === "Certifications" && (
                        <div>Certifications:-----No Data</div>
                    )}
                </div>


                <div className="mt-2 mb-2">
                    {activetab === "Events" && (
                        <div>Events:::-----No Data</div>
                    )}
                </div>


                <div className="mt-2 mb-2">
                    {activetab === "Merchandise" && (
                        <div>Merchandise::----No Data</div>
                    )}
                </div>


            </div>
        </>
    )
}

export default Home
