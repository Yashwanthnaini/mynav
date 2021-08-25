import React, {useState} from 'react';
import {Container,BoldContent,ContentBox,BigButton,ButtonBox,ArrowIcon,VerticalLine1} from "./Careers.styles";
import ContentWriter from './ContentWriter/ContentWriter';
import OpportunitiesCutor from "./OpportunitiesCutor/Opportunities";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from '@iconify/react';
import "./Careers.css";
const Careers = () => {
    const [boxOneOpen,setBoxOneOpen] = useState(false);
    const [boxTwoOpen,setBoxTwoOpen] = useState(false);
    return (
       <>
        <div>
            <Container>
                <BoldContent>
                    We are Recruiting Enthusiastic People to join in FTP !
                </BoldContent>
                <ContentBox>
                    <ButtonBox onClick={()=>{setBoxOneOpen(!boxOneOpen)}}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item xs={8}  >
                                <BigButton  >
                                    Content Writer
                                </BigButton>
                                
                            </Grid>
                            
                            <Grid item xs={4} >
                                <ArrowIcon>
                                    {
                                        boxOneOpen

                                        ?<div className="normal" style={{width:"35px",height:"35px"}}>
                                        <span className="iconify" data-icon="akar-icons:chevron-up" data-width="35"></span>
                                        </div>
                                        :<div className="rotated" style={{width:"35px",height:"35px"}}>
                                        <span className="iconify" data-icon="akar-icons:chevron-up" data-width="35"></span>
                                        </div>
                                    }
                                
                                </ArrowIcon>   
                            </Grid>
                        </Grid>
                    </ButtonBox>
                    {
                        boxOneOpen
                        ?<div className="boxOneOpen">
                            <ContentWriter />
                        </div>
                        :<div className="boxOneClose">
                            
                        </div>
                    }
                </ContentBox>

                <VerticalLine1 />

                <ContentBox>
                    <ButtonBox onClick={()=>{setBoxTwoOpen(!boxTwoOpen)}}>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item xs={8}  >
                                <BigButton  >
                                    Opportunities Curator
                                </BigButton>
                                
                            </Grid>
                            
                            <Grid item xs={4} >
                                <ArrowIcon>
                                    {
                                        boxTwoOpen

                                        ?<div className="normal" style={{width:"35px",height:"35px"}}>
                                        <span className="iconify" data-icon="akar-icons:chevron-up" data-width="35"></span>
                                        </div>
                                        :<div className="rotated" style={{width:"35px",height:"35px"}}>
                                        <span className="iconify" data-icon="akar-icons:chevron-up" data-width="35"></span>
                                        </div>
                                    }
                                
                                </ArrowIcon>   
                            </Grid>
                        </Grid>
                    </ButtonBox>
                    {
                        boxTwoOpen
                        ?<div className="boxTwoOpen">
                            <OpportunitiesCutor />
                        </div>
                        :<div className="boxTwoClose">
                            
                        </div>
                    }
                </ContentBox>
            </Container>
        </div>
       </>
    )
};

export default Careers;