import React from 'react';
import {Container,BoldContent,BigTextContent ,Line1,InnerBox1,Imagetitle,Images,Imagecontent,Imagedescription,ImageFooter,Button,InnerContainer} from "./Reports.styles";
import { Grid } from '@material-ui/core';
import "./Reports.css"
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    spacingXs2 : {
         padding: "0px 8px",   
    },
    paper: {
     
    }
  }));

const  Report = () => {
    const classes = useStyles();
    return (
        <>
            <div>
                <Container>
                    <BoldContent>
                        Reports
                    </BoldContent>
                    <BigTextContent>
                        News, views and data on issues that matter most.
                    </BigTextContent>
                    <Line1 />
                    <InnerContainer>
                        <Grid container direction="row" justify-content="center" spacing={1}  alignItems="center" className={classes.spacingXs2} >
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <InnerBox1>                    
                                    <Imagetitle>
                                        Situation Report - 7 On COVID-19
                                    </Imagetitle>
                                    <Images src={"https://static.wixstatic.com/media/nsplsh_3877657750357470742d34~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_569,h_379,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                                    <Imagecontent>
                                        <Imagedescription>
                                            PM Narendra Modi, has addressed citizens of the nation, for the second time in the same week, at 20:00 IST on 24 March, 2020. He declared that GoI had resolved to lock down the whole country for the next 21 days....
                                        </Imagedescription>
                                        <a href="/explore/reports/covid-19/report-7" style={{textDecoration: 'none',color:'white'}}><Button>Read more</Button></a>
                                    </Imagecontent>
                                    <ImageFooter>
                                        <span>
                                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="62 49.5 76 101" viewBox="62 49.5 76 101" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                                                <g>
                                                    <path d="M134.183 71.729l-23.201-19.113c-.977-.912-1.796-1.912-3.021-1.375-1.223.538-1.23 1.269-1.23 2.612v20.353c0 1.865 1.503 3.377 3.357 3.377H131.9a3.355 3.355 0 0 0 3.124-2.144 3.39 3.39 0 0 0-.841-3.71z" fill="#E98866" data-color="1"></path>
                                                    <path d="M134.643 150.5H65.357c-1.854 0-3.357-1.512-3.357-3.377V52.877c0-1.865 1.503-3.377 3.357-3.377h43.555a3.34 3.34 0 0 1 2.196.824l25.732 22.41a3.383 3.383 0 0 1 1.16 2.553v71.836c0 1.865-1.503 3.377-3.357 3.377zm-65.93-6.754h62.574V76.83L107.66 56.254H68.713v87.492z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M80.971 110.456h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 114.985H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 123.566H80.971c-1.112 0-2.014.907-2.014 2.026s.902 2.026 2.014 2.026h38.058c1.112 0 2.014-.907 2.014-2.026s-.902-2.026-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                </g>
                                            </svg>
                                            <span className="spaceing">
                                                  Report
                                            </span>
                                            <span className="spaceing">
                                                  -
                                            </span>
                                            <span className="spaceing">
                                                  24 March 2020
                                            </span>
                                        </span>
                                            
                                    </ImageFooter>
                                </InnerBox1>
                            </Grid>


                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <InnerBox1>                    
                                    <Imagetitle>
                                        Situation Report - 6 On COVID-19
                                    </Imagetitle>
                                    <Images src={"https://static.wixstatic.com/media/7331fc_a1113cb7b55f4407be8e3f8a2628184e~mv2.jpg/v1/fill/w_590,h_348,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                                    <Imagecontent>
                                        <Imagedescription>
                                            To increase access to reliable information, WHO has launched a messaging service WHO Health Alert to keep people safe from Coronavirus. This will enable WHO to provide the latest situation reports, numbers, news and information, including details...
                                        </Imagedescription>
                                        <a href="/explore/reports/covid-19/report-6" style={{textDecoration: 'none',color:'white'}}><Button>Read more</Button></a>
                                    </Imagecontent>
                                    <ImageFooter>
                                        <span>
                                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="62 49.5 76 101" viewBox="62 49.5 76 101" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                                                <g>
                                                    <path d="M134.183 71.729l-23.201-19.113c-.977-.912-1.796-1.912-3.021-1.375-1.223.538-1.23 1.269-1.23 2.612v20.353c0 1.865 1.503 3.377 3.357 3.377H131.9a3.355 3.355 0 0 0 3.124-2.144 3.39 3.39 0 0 0-.841-3.71z" fill="#E98866" data-color="1"></path>
                                                    <path d="M134.643 150.5H65.357c-1.854 0-3.357-1.512-3.357-3.377V52.877c0-1.865 1.503-3.377 3.357-3.377h43.555a3.34 3.34 0 0 1 2.196.824l25.732 22.41a3.383 3.383 0 0 1 1.16 2.553v71.836c0 1.865-1.503 3.377-3.357 3.377zm-65.93-6.754h62.574V76.83L107.66 56.254H68.713v87.492z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M80.971 110.456h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 114.985H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 123.566H80.971c-1.112 0-2.014.907-2.014 2.026s.902 2.026 2.014 2.026h38.058c1.112 0 2.014-.907 2.014-2.026s-.902-2.026-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                </g>
                                            </svg>
                                            <span className="spaceing">
                                                  Report
                                            </span>
                                            <span className="spaceing">
                                                  -
                                            </span>
                                            <span className="spaceing">
                                                  23 March 2020
                                            </span>
                                        </span>
                                            
                                    </ImageFooter>
                                </InnerBox1>
                            </Grid>


                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <InnerBox1>                    
                                    <Imagetitle>
                                        Situation Report - 5 On COVID-19
                                    </Imagetitle>
                                    <Images src={"https://static.wixstatic.com/media/nsplsh_689e0f42201f4685a1b30d0f0e0a9ca4~mv2.jpg/v1/fill/w_569,h_379,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                                    <Imagecontent>
                                        <Imagedescription>
                                            FTP would consider sharing with people the Recommendations and Advice from WHO as it is.If you are not in an area where COVID-19 is spreading or have not travelled from an area where COVID-19 is spreading...
                                        </Imagedescription>
                                        <a href="/explore/reports/covid-19/report-5" style={{textDecoration: 'none',color:'white'}}><Button>Read more</Button></a>
                                    </Imagecontent>
                                    <ImageFooter>
                                        <span>
                                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="62 49.5 76 101" viewBox="62 49.5 76 101" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                                                <g>
                                                    <path d="M134.183 71.729l-23.201-19.113c-.977-.912-1.796-1.912-3.021-1.375-1.223.538-1.23 1.269-1.23 2.612v20.353c0 1.865 1.503 3.377 3.357 3.377H131.9a3.355 3.355 0 0 0 3.124-2.144 3.39 3.39 0 0 0-.841-3.71z" fill="#E98866" data-color="1"></path>
                                                    <path d="M134.643 150.5H65.357c-1.854 0-3.357-1.512-3.357-3.377V52.877c0-1.865 1.503-3.377 3.357-3.377h43.555a3.34 3.34 0 0 1 2.196.824l25.732 22.41a3.383 3.383 0 0 1 1.16 2.553v71.836c0 1.865-1.503 3.377-3.357 3.377zm-65.93-6.754h62.574V76.83L107.66 56.254H68.713v87.492z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M80.971 110.456h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 114.985H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 123.566H80.971c-1.112 0-2.014.907-2.014 2.026s.902 2.026 2.014 2.026h38.058c1.112 0 2.014-.907 2.014-2.026s-.902-2.026-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                </g>
                                            </svg>
                                            <span className="spaceing">
                                                  Report
                                            </span>
                                            <span className="spaceing">
                                                  -
                                            </span>
                                            <span className="spaceing">
                                                  22 March 2020
                                            </span>
                                        </span>
                                            
                                    </ImageFooter>
                                </InnerBox1>
                            </Grid>


                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <InnerBox1>                    
                                    <Imagetitle>
                                        Situation Report - 4 On COVID-19
                                    </Imagetitle>
                                    <Images src={"https://static.wixstatic.com/media/nsplsh_6d50d739605947539a686c4f78b34ae3~mv2.jpg/v1/fill/w_569,h_379,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                                    <Imagecontent>
                                        <Imagedescription>
                                            To the imploration of PM Narendra Modi, the citizens are observing the Janata Curfew. On occasion of this GoI introduced and providing people a Janata Curfew Certificate on its MyGov.in portal.
                                        </Imagedescription>
                                        <a href="/explore/reports/covid-19/report-4" style={{textDecoration: 'none',color:'white'}}><Button>Read more</Button></a>
                                    </Imagecontent>
                                    <ImageFooter>
                                        <span>
                                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="62 49.5 76 101" viewBox="62 49.5 76 101" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                                                <g>
                                                    <path d="M134.183 71.729l-23.201-19.113c-.977-.912-1.796-1.912-3.021-1.375-1.223.538-1.23 1.269-1.23 2.612v20.353c0 1.865 1.503 3.377 3.357 3.377H131.9a3.355 3.355 0 0 0 3.124-2.144 3.39 3.39 0 0 0-.841-3.71z" fill="#E98866" data-color="1"></path>
                                                    <path d="M134.643 150.5H65.357c-1.854 0-3.357-1.512-3.357-3.377V52.877c0-1.865 1.503-3.377 3.357-3.377h43.555a3.34 3.34 0 0 1 2.196.824l25.732 22.41a3.383 3.383 0 0 1 1.16 2.553v71.836c0 1.865-1.503 3.377-3.357 3.377zm-65.93-6.754h62.574V76.83L107.66 56.254H68.713v87.492z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M80.971 110.456h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 114.985H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 123.566H80.971c-1.112 0-2.014.907-2.014 2.026s.902 2.026 2.014 2.026h38.058c1.112 0 2.014-.907 2.014-2.026s-.902-2.026-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                </g>
                                            </svg>
                                            <span className="spaceing">
                                                  Report
                                            </span>
                                            <span className="spaceing">
                                                  -
                                            </span>
                                            <span className="spaceing">
                                                  21 March 2020
                                            </span>
                                        </span>
                                            
                                    </ImageFooter>
                                </InnerBox1>
                            </Grid>


                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <InnerBox1>                    
                                    <Imagetitle>
                                        Situation Report - 3 On COVID-19
                                    </Imagetitle>
                                    <Images src={"https://static.wixstatic.com/media/11062b_241f931f708549a9bec32e81200cc925~mv2.jpeg/v1/fill/w_568,h_379,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                                    <Imagecontent>
                                        <Imagedescription>
                                            For The People(FTP), to maintain authenticity produced this report very much based on the data available at World Health Organization(WHO), which is continuously being reported by....
                                        </Imagedescription>
                                        <a href="/explore/reports/covid-19/report-3" style={{textDecoration: 'none',color:'white'}}><Button>Read more</Button></a>
                                    </Imagecontent>
                                    <ImageFooter>
                                        <span>
                                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="62 49.5 76 101" viewBox="62 49.5 76 101" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                                                <g>
                                                    <path d="M134.183 71.729l-23.201-19.113c-.977-.912-1.796-1.912-3.021-1.375-1.223.538-1.23 1.269-1.23 2.612v20.353c0 1.865 1.503 3.377 3.357 3.377H131.9a3.355 3.355 0 0 0 3.124-2.144 3.39 3.39 0 0 0-.841-3.71z" fill="#E98866" data-color="1"></path>
                                                    <path d="M134.643 150.5H65.357c-1.854 0-3.357-1.512-3.357-3.377V52.877c0-1.865 1.503-3.377 3.357-3.377h43.555a3.34 3.34 0 0 1 2.196.824l25.732 22.41a3.383 3.383 0 0 1 1.16 2.553v71.836c0 1.865-1.503 3.377-3.357 3.377zm-65.93-6.754h62.574V76.83L107.66 56.254H68.713v87.492z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M80.971 110.456h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 114.985H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 123.566H80.971c-1.112 0-2.014.907-2.014 2.026s.902 2.026 2.014 2.026h38.058c1.112 0 2.014-.907 2.014-2.026s-.902-2.026-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                </g>
                                            </svg>
                                            <span className="spaceing">
                                                  Report
                                            </span>
                                            <span className="spaceing">
                                                  -
                                            </span>
                                            <span className="spaceing">
                                                  20 March 2020
                                            </span>
                                        </span>
                                            
                                    </ImageFooter>
                                </InnerBox1>
                            </Grid>                            


                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <InnerBox1>                    
                                    <Imagetitle>
                                        Situation Report - 2 On COVID-19
                                    </Imagetitle>
                                    <Images src={"https://static.wixstatic.com/media/11062b_8deb790af4fc4a8684a730e0d287669d~mv2.jpg/v1/fill/w_619,h_348,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                                    <Imagecontent>
                                        <Imagedescription>
                                            Narendra Modi, Prime Minister of India, addressed the nation at 2000 IST on 19 March 2020. He called for a self-imposed Janta curfew to be observed by Indians to stay at home from....
                                        </Imagedescription>
                                        <a href="/explore/reports/covid-19/report-2" style={{textDecoration: 'none',color:'white'}}><Button>Read more</Button></a>
                                    </Imagecontent>
                                    <ImageFooter>
                                        <span>
                                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="62 49.5 76 101" viewBox="62 49.5 76 101" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                                                <g>
                                                    <path d="M134.183 71.729l-23.201-19.113c-.977-.912-1.796-1.912-3.021-1.375-1.223.538-1.23 1.269-1.23 2.612v20.353c0 1.865 1.503 3.377 3.357 3.377H131.9a3.355 3.355 0 0 0 3.124-2.144 3.39 3.39 0 0 0-.841-3.71z" fill="#E98866" data-color="1"></path>
                                                    <path d="M134.643 150.5H65.357c-1.854 0-3.357-1.512-3.357-3.377V52.877c0-1.865 1.503-3.377 3.357-3.377h43.555a3.34 3.34 0 0 1 2.196.824l25.732 22.41a3.383 3.383 0 0 1 1.16 2.553v71.836c0 1.865-1.503 3.377-3.357 3.377zm-65.93-6.754h62.574V76.83L107.66 56.254H68.713v87.492z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M80.971 110.456h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 114.985H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 123.566H80.971c-1.112 0-2.014.907-2.014 2.026s.902 2.026 2.014 2.026h38.058c1.112 0 2.014-.907 2.014-2.026s-.902-2.026-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                </g>
                                            </svg>
                                            <span className="spaceing" >
                                                  Report
                                            </span>
                                            <span className="spaceing">
                                                  -
                                            </span>
                                            <span className="spaceing">
                                                  19 March 2020
                                            </span>
                                        </span>
                                            
                                    </ImageFooter>
                                </InnerBox1>
                            </Grid>


                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <InnerBox1>                    
                                    <Imagetitle>
                                        Situation Report - 1 On COVID-19
                                    </Imagetitle>
                                    <Images src={"https://static.wixstatic.com/media/nsplsh_6af806469de741c19735f40638bb1563~mv2.jpg/v1/fill/w_569,h_378,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                                    <Imagecontent>
                                        <Imagedescription>
                                            For The People(FTP), to maintain authenticity produced this report very much based on the data available at World Health Organization(WHO), which is continuously being reported...
                                        </Imagedescription>
                                        <a href="/explore/reports/covid-19/report-1" style={{textDecoration: 'none',color:'white'}}><Button>Read more</Button></a>
                                    </Imagecontent>
                                    <ImageFooter>
                                        <span>
                                            <svg preserveAspectRatio="xMidYMid meet" data-bbox="62 49.5 76 101" viewBox="62 49.5 76 101" height="20" width="20" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                                                <g>
                                                    <path d="M134.183 71.729l-23.201-19.113c-.977-.912-1.796-1.912-3.021-1.375-1.223.538-1.23 1.269-1.23 2.612v20.353c0 1.865 1.503 3.377 3.357 3.377H131.9a3.355 3.355 0 0 0 3.124-2.144 3.39 3.39 0 0 0-.841-3.71z" fill="#E98866" data-color="1"></path>
                                                    <path d="M134.643 150.5H65.357c-1.854 0-3.357-1.512-3.357-3.377V52.877c0-1.865 1.503-3.377 3.357-3.377h43.555a3.34 3.34 0 0 1 2.196.824l25.732 22.41a3.383 3.383 0 0 1 1.16 2.553v71.836c0 1.865-1.503 3.377-3.357 3.377zm-65.93-6.754h62.574V76.83L107.66 56.254H68.713v87.492z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M80.971 110.456h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 114.985H80.971a2.02 2.02 0 0 0-2.014 2.026 2.02 2.02 0 0 0 2.014 2.026h38.058a2.02 2.02 0 0 0 2.014-2.026 2.02 2.02 0 0 0-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                    <path d="M119.029 123.566H80.971c-1.112 0-2.014.907-2.014 2.026s.902 2.026 2.014 2.026h38.058c1.112 0 2.014-.907 2.014-2.026s-.902-2.026-2.014-2.026z" fill="#0E4828" data-color="2"></path>
                                                </g>
                                            </svg>
                                            <span style={{marginLeft:"5px"}}>
                                                  Report
                                            </span>
                                            <span style={{marginLeft:"5px"}}>
                                                  -
                                            </span>
                                            <span style={{marginLeft:"5px"}}>
                                             18 March 2020
                                            </span>
                                        </span>
                                            
                                    </ImageFooter>
                                </InnerBox1>
                            </Grid>

                        </Grid>
                    </InnerContainer>
                    
                </Container>
            </div>
        </>
    )
};

export default Report;