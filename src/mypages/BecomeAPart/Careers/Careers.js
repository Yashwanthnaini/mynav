import React, {useState} from 'react';
import {Container,BoldContent,ContentBox,BigButton,ButtonBox,ArrowIcon} from "./Careers.styles";
import ContentWriter from './ContentWriter/ContentWriter';
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Icon } from '@iconify/react';
import "./Careers.css";
const Careers = () => {
    const [boxOneOpen,setBoxOneOpen] = useState(false);

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
                            <Grid item xs={8} justifyContent="left" alignItems="left">
                                <BigButton  >
                                    Content Writer
                                </BigButton>
                                
                            </Grid>
                            
                            <Grid item xs={4} >
                                <ArrowIcon>
                                    {
                                        boxOneOpen
                                        ?<span className="iconify" data-icon="dashicons:arrow-up-alt2" data-width="35"></span>
                                        :<span className="iconify" data-icon="dashicons:arrow-down-alt2" data-width="35"></span>
                                    }
                                
                                </ArrowIcon>   
                            </Grid>
                        </Grid>
                    </ButtonBox>
                    {
                        boxOneOpen
                        ?<div className="boxOpen">
                            <ContentWriter />
                        </div>
                        :<div className="boxClose">
                            
                        </div>
                    }
                </ContentBox>
            </Container>
        </div>
       </>
    )
};

export default Careers;