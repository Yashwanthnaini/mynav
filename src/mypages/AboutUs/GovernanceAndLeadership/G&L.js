import React from 'react'
import yvraj from "./images/yvraj.jpg";
import prashanth from "./images/prashanth.jpg";
import lavan from "./images/lavan.jpg";
import Naresh from "./images/Naresh.jpg";
import Noble from "./images/Noble.jpg";
import pavan from "./images/pavan.png";
import pranaya from "./images/pranaya.jpg";
import preethi from "./images/preethi.jpg";
import ramya from "./images/ramya.jpg";
import sravan from "./images/sravan.jpg";
import srinithya from "./images/srinithya.jpg";
import uday from "./images/uday.jpg";
import vineeth from "./images/vineeth.jpg";
import uady from "./images/uady.jpg";
import abhinav from "./images/abhinav.jpg";
import apoor from "./images/apoor.jpg";
import bhanusri from "./images/bhanusri.png";
import jyothsna from "./images/jyothsna.png";

import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from '@iconify/react';
import "./G&L.css"
import {
    
    Container1,
    Container2,
    InnerBox1,
    BoxTitle,
    BoxDescription,
    Line1,
    Line2,
    MiddleTitle,
    Member,
    MemberName,
    MemberImage,
    MemberDetails,
    Images
}
    from "./G&L.styles";

    const useStyles = makeStyles((theme) => ({
        root: {
          
        },
        spacingXs5 : {
             padding: "10px 20px",   
        },
        paper: {
         
        }
      }));

const  GovernanceAndLeadership = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container1>
                <Grid container direction="row" spacing={5} justifyContent="center" alignItems="center" className={classes.spacingXs5}>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <InnerBox1>                    
                            <BoxTitle>
                                Executive
                            </BoxTitle>
                            <Line1></Line1>
                            <BoxDescription>
                                Executive is a lead organ, responsible to monitor and manages all day-to-day works of the FTP. 
                            </BoxDescription>
                        </InnerBox1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <InnerBox1>                    
                            <BoxTitle>
                                Board
                            </BoxTitle>
                            <Line1></Line1>
                            <BoxDescription>
                                Board is a decision-making organ, responsible to review, advise, manage, plan, collaborate and implement works of the organizations. Board is composed of Board of Directors, and Advisory Board. 
                            </BoxDescription>
                        </InnerBox1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <InnerBox1>                    
                            <BoxTitle>
                                Secretariat
                            </BoxTitle>
                            <Line1></Line1>
                            <BoxDescription>
                                Secretariat is an administrative organ, responsible for financial management; HRM and Recruting; Technical and digital; marketing and communication works of the Organization.
                            </BoxDescription>
                        </InnerBox1>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <InnerBox1>                    
                            <BoxTitle>
                                Operations
                            </BoxTitle>
                            <Line1></Line1>
                            <BoxDescription>
                                Operations is an execution organ, responsible for events and projects of the Organization.
                            </BoxDescription>
                        </InnerBox1>
                    </Grid>
                </Grid>
            </Container1>
            <center>
            <MiddleTitle>Meet The Team</MiddleTitle>
            <Line2>
            </Line2>
            </center>
            




            <Container2>
                <Grid container direction="row" spacing={6} justifyContent="center" alignItems="center" >
                    
                    
                    
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={yvraj}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Yuraj Kanni
                            </MemberName>
                            <MemberDetails>
                                Executive Director (CEO),Chairperson, CCO & PD - Raising People
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     href="https://www.linkedin.com/in/yuraj-kanni-067978145/">
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                                
                            </center>                             
                        </Member>                                                
                    </Grid>
                    
                    
                    
                    
                    
                    
                    
                    
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={prashanth}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Prashanth
                            </MemberName>
                            <MemberDetails>
                                Treasurer and Head of Events
                            </MemberDetails>
                            <center>
                                <a className="ln-icon" 
                                     href="https://www.linkedin.com/in/prashanth-reddy-loka-219a67161/">
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>  
                        </Member>                                                
                    </Grid>





                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={sravan}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Sravan
                            </MemberName>
                            <MemberDetails>
                                Board Member & CEDO
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     href="https://www.linkedin.com/in/sravanmathangi/">
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                            </center>                             
                        </Member>                                                
                    </Grid>




                    
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={uday}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Uday
                            </MemberName>
                            <MemberDetails>
                                Board Member, CDO & Technical Manager - Raising People
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     href="https://www.linkedin.com/in/uday-kumar-dumma-abaa191a6/">
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>                             
                        </Member>                                                
                    </Grid>



                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={jyothsna}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Jothysna
                            </MemberName>
                            <MemberDetails>
                                Joint Secretary, CHRO & PD - OER
                            </MemberDetails>
                            <center>
                                <a className="ln-icon" 
                                     href="https://www.linkedin.com/in/gajam-jyothsna-254a611a8/">
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>  
                        </Member>                                                
                    </Grid>



                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={vineeth}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Vineeth
                            </MemberName>
                            <MemberDetails>
                                Board Member, CTO & Technical Manager - DLCS
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     href="https://www.linkedin.com/in/vineethkumargogu/">
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>                             
                        </Member>                                                
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={abhinav}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Abhinav
                            </MemberName>
                            <MemberDetails>
                                Data & News Collector - DLCS
                            </MemberDetails>
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>  
                        </Member>                                                
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={pranaya}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Sai Pranaya
                            </MemberName>
                            <MemberDetails>
                                Content Builder - DLCS
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     href="https://www.linkedin.com/in/pranaya-dongari-076208180/">
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>                             
                        </Member>                                                
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={Noble}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Noble Tej
                            </MemberName>
                            <MemberDetails>
                                Content writer - Raising People
                            </MemberDetails>
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>  
                        </Member>                                                
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={Naresh}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Naresh P
                            </MemberName>
                            <MemberDetails>
                                News Aggregrator - Raising People 
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     href="https://www.linkedin.com/in/naresh-pentala-3022151b9/">
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>                             
                        </Member>                                                
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={pavan}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Pavan
                            </MemberName>
                            <MemberDetails>
                                Marketing Manager - DLCS
                            </MemberDetails>
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>  
                        </Member>                                                
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={bhanusri}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Bhanu Sri
                            </MemberName>
                            <MemberDetails>
                                Storyteller - Raising People
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>                             
                        </Member>                                                
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={ramya}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Ramya
                            </MemberName>
                            <MemberDetails>
                                Content Writer - Raising People
                            </MemberDetails>
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>  
                        </Member>                                                
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={preethi}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Preethi
                            </MemberName>
                            <MemberDetails>
                                Opportunities Curator - Raising People
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>                             
                        </Member>                                                
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={uady}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                M.Uday
                            </MemberName>
                            <MemberDetails>
                                Resource Curator - OER
                            </MemberDetails>
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>  
                        </Member>                                                
                    </Grid>



                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={srinithya}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Sri Nithya
                            </MemberName>
                            <MemberDetails>
                                Resource Curator - OER
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>                             
                        </Member>                                                
                    </Grid>


                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={lavan}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Lavan
                            </MemberName>
                            <MemberDetails>
                                Technical Member - OER
                            </MemberDetails>
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>  
                        </Member>                                                
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <Member>
                            <MemberImage>
                                <Images 
                                    src={apoor}>
                                </Images>
                            </MemberImage>
                            <MemberName>
                                Apoor
                            </MemberName>
                            <MemberDetails>
                                Technical Member - OER
                            </MemberDetails>                           
                            <center>
                                <a className="ln-icon" 
                                     >
                                <Icon  icon="mdi:linkedin" width="42"    />
                                </a>
                                <a className="insta-icon">
                                    <span class="iconify" data-icon="mdi:instagram" data-width="42"></span>
                                </a>
                                <a className="twitter-icon">
                                    <span class="iconify" data-icon="mdi:twitter" data-width="42"></span>
                                </a>
                                <a className="facebook-icon">
                                    <span class="iconify" data-icon="mdi:facebook" data-width="42"></span>
                                </a>
                                
                            </center>                             
                        </Member>                                                
                    </Grid>
                    

                </Grid>
            </Container2>        
        </div>
    )
};

export default GovernanceAndLeadership;