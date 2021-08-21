import React from 'react'
import {Body,Leftcontent,Head,Hr,Content,Text,Rightcontent,List,Button,Ul} from "./Communities.style"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Communities() {
    return (
        <div>
            <Body>
                <Leftcontent>
                    <Head>
                    Communities
                    <Hr style={{color:"gray"}}></Hr>
                    </Head>
                </Leftcontent>
                <Content>
                FTP Communities are the support groups of FTP and its vision. Communities have special localized focus and support of For The People. These communities have better access and support from FTP for localized advocacy, reforms and development.
                <br></br>
​               <br></br>
These communities are built by FTP for effective development of society and also as centers of change for FTP activities. These help in effective scaling and spreading of the For The People Organization.
                </Content>
                <br></br>
​               <br></br>
            <Text>
                <Leftcontent>
                    <Head style={{color:"#005C9C", fontWeight:"lighter"}}>
                    <ArrowForwardIosIcon style={{fontSize:'17px',color:'#dad2d2'}}/>Volunteers
                    <Hr style={{color:"gray"}}></Hr>
                    </Head>
                </Leftcontent>
                <Rightcontent>
                <Head>
                Volunteers 
                    </Head>
                   
                    <Content>Volunteers provide their time and work on a variety of different tasks in FTP. Many of these tasks include marketing, fundraising, administrative duties, events and projects. They work closely with other people on projects/events towards shared targets, or creating activity plans. They are typically not paid for their efforts and often work for organization, providing their time in lieu of a salary. They need to be empathetic, great communicators, and comfortable working as part of a team towards FTP Mission.</Content>
                    <span style={{display:"flex"}}>
                    <Head>
                    Work environment: 
                    </Head>
                    <Content style={{margin:"0px"}}> &nbsp; Remote Working</Content>
                    </span>
                    <br></br>
                    <br></br>
                    <Head>
                    Duties & Responsibilities:
                    </Head>
                    <Ul>
                <List>Volunteers work closely with other people during events to reach shared targets.</List>
                <List>Volunteers motivate others to get involved in with the cause at hand such as encouraging them to donate money.</List>
                <List>Volunteers speak to the public over the phone or in person to provide information much about the cause.</List>
                <List>Collaborate freely with FTP Team whenever discussions happen.</List>
                <List>Volunteers promote the cause they work for by helping with digital campaigns. </List>
                <List>Making recommendations about events to others where feasible and appropriate.</List>
                <List>Respect and maintain confidentiality of FTP volunteers, partners, and donors information.</List>
                <List>Volunteers should involve in many tasks of FTP such as marketing, events and project activities. </List>
                </Ul>
                <br></br>
                <br></br>
                    <Head>
                    Skills & Abilities:
                    </Head>
                  <Ul> 
                <List>Be courteous and personable when dealing with the public.</List>
                <List>Be self-directed, willing to take initiative, and detail-oriented</List>
                <List>A willingness to learn and work as part of a team.</List>
                <List>Respect and diligence.</List>
                <List>Good time management and organizational skills. </List>
                </Ul> 
                <br></br>
                <br></br>
                    <Head>
                    Requirements:
                    </Head>
                 <Ul>  
                <List>Utilization of smartphone and laptop for communication and easily accessible. </List>
                <List>Strong internet connectivity required to do work.</List>
                <List>Dedication and Commitment.</List>
                </Ul> 
                <br></br>
                <br></br>
                    <Head>
                    Benefits:
                    </Head>
                    <Ul>
                <List>Societal contribution and volunteer experience. </List>
                <List>Be self-directed, willing to take initiative, and detail-orientedIncrease employable skills such as teamwork, communication, project management, team management, collaboration, research, leadership qualities. </List>
                <List>Better networking and broader horizon. </List>
                <List>Cultural understanding and your work will be making a significant contribution towards a inclusive tomorrow.</List>
                <List>Certification of Volunteer</List>
                </Ul> 
                <br></br>
                <br></br>
    <Button>  Join Us</Button>
                </Rightcontent>
            </Text>

            </Body>
        </div>
    )
}

export default Communities
