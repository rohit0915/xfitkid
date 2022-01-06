import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import { Grid, Button } from "@material-ui/core"
import "./WhyFitKids.css"
import orangeIcon from "../images/orangeIcon.png"
import GreenIcon from "../images/GreenIcon.png"
import AOS from "aos";

class WhyFitKids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Kids Percentage",
          "Age 5-8",
          "Age 9-12",
          "Age 13+",
        ],
        datasets: [
          {
            label: "Skills Percentage",
            data: [0, 85, 60, 40,],
            backgroundColor: [
              "rgba(54, 162, 235, 0.6)",
              "rgba(132,177,64)",
              "rgba(246, 139, 31)",
              "rgba(65,184,234)",
            ],
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City",
  };

  componentDidMount = () => {
    AOS.init({ duration: 2000 });
  }

  render() {
    return (
      <>
        <div className="training_padding">
          <Grid className="Component_main_grid">
            <Grid item md={6} className="p-2">
              <div className="text-right" data-aos="fade-down">
                <img src={orangeIcon} alt="" className="mr-2" />Better quality of life
              </div>
              <div className="mt-2" data-aos="fade-down">
                <img src={GreenIcon} alt="" className="mr-2" />Better quality of life
              </div>
              <div className="chart p-1" data-aos="fade-down">
                <div className="skills_percent mt-2" >Skill appectance percentage</div>
                <Bar
                  data={this.state.chartData}
                  options={{
                    title: {
                      display: "Kids Health",
                      fontSize: 25,
                    },
                    legend: {
                      display: "fdkjfh",
                      position: "fdkj",
                    },
                  }}
                />
              </div>
            </Grid>
            <Grid item md={1} className="p-3"></Grid>

            <Grid item md={5} className="p-3">
              <div data-aos="fade-down"><p className="home_Page_heading">Why Xfit  <span className="heading_content_formatting">Kids?</span> </p></div>
              <div className="training_content mt-2" data-aos="fade-down">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
              <div className="skills_percent mt-2" data-aos="fade-down">After joining XFit Kids</div>



              <Grid className="Component_main_grid mt-3">
                <Grid item md={4}>
                  <div className="p-3" data-aos="fade-down">
                    <span className="text-center">
                      <div className="Decrrase_percent">30%</div>
                      <div className="Decrease_content">Decrease in health problems </div>
                    </span>


                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className="p-3" data-aos="fade-down">
                    <span className="text-center">
                      <div className="Decrrase_percent">30%</div>
                      <div className="Decrease_content">Increase in activity level </div>
                    </span>
                  </div>
                </Grid>
              </Grid>

              <Grid className="Component_main_grid mt-3">
                <Grid item md={4}>
                  <div className="p-3" data-aos="fade-down">
                    <span className="text-center">
                      <div className="Decrrase_percent">30%</div>
                      <div className="Decrease_content">Increase in activity level </div>
                    </span>
                  </div>
                </Grid>

                <Grid item md={4}>
                  <div className="p-3" data-aos="fade-down">
                    <span className="text-center">
                      <div className="Decrrase_percent">30%</div>
                      <div className="Decrease_content">Decrease in health problems </div>
                    </span>


                  </div>
                </Grid>

              </Grid>

              <div className="mt-3 mb-3" data-aos="fade-down">
                <Button className='watch_now_button'>About Us</Button>
              </div>

            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default WhyFitKids;
