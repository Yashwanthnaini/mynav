import React from 'react'
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
    Headline,
    Box,
    Desc,
    Container,
    InnerBox1,
    BoxTitle,
    BoxDescription,
    Line1,
    Button,
    InnerBox2,
    Images,
    Imagecaption,
    Total,
    Imagecontent,
    Pageno,
    Prev,
    Number,
    Next,
    Imagetitle,
    Imagedescription,
    Middle,
    ImageBottomcaption,
    Author,
    Date,
    Display
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
            <Container>
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
            </Container>    
        </div>
    )
};

export default GovernanceAndLeadership;