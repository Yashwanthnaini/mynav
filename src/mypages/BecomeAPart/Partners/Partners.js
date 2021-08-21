import React from 'react'
import {Body,Content,Cell,List,Ul,Cellb,Hide,Head,Mview,Hr} from "./Partners.style"
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

function Partners() {
    return (
        <div>
            <Body>
                <Content>
                FTP partners are corporates, industries, academia & research institutions, governments, civil society organizations, philanthropists and individuals with whom/which FTP establishes a formal collaboration agreement with the aim of achieving common objectives in the short to long term. The relationship is formalized through multi-annual Memorandum of Understanding or Agreement and may involve diverse forms of contribution including all engagement tracks.
                </Content>
                <br></br>
                <br></br>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell style={{border:"1px solid black",padding:'5px'}}><Cell><b>Type of partner</b></Cell></TableCell>
                            <TableCell style={{border:"1px solid black" ,padding:'5px'}}><Cell><b>Areas of Interest</b></Cell></TableCell>
                            <Hide><TableCell style={{border:"1px solid black" ,padding:'5px'}}><Cell><b>Partners</b></Cell></TableCell></Hide>
                            <Hide><TableCell style={{border:"1px solid black" ,padding:'5px'}}><Cell><b>Engagement Tracks</b></Cell></TableCell></Hide>
                        </TableRow>
                    </TableHead>
                         <TableRow>
                            <TableCell style={{border:"1px solid black",padding:'5px'}}><Cellb>Strategic Partner</Cellb></TableCell>
                            <TableCell style={{border:"1px solid black" ,padding:'5px'}}><Cellb>Management and Operations</Cellb></TableCell>
                            <Hide><TableCell style={{border:"1px solid black" ,paddingTop:'45px'}} rowspan="3">
                                <Ul>
                                    <List>Corporates</List>
                                    <List>Industries</List>
                                    <List>Academia and Research Institutions</List>
                                    <List>Governments</List>
                                    <List>Civil Society Organizations</List>
                                    <List>Philanthropists</List>
                                </Ul>
                            </TableCell></Hide>
                            <Hide><TableCell style={{border:"1px solid black" ,paddingTop:'45px'}} rowspan="3">
                                <Ul>
                                    <List>Corporate Social Responsibility</List>
                                    <List>Human Resources/Employee Engagement</List>
                                    <List>Knowledge Sharing</List>
                                    <List>Marketing</List>
                                    <List>Financial Resources and Sponsoring</List>
                                    <List>Technology</List>
                                    <List>Philanthropists</List>
                                </Ul>
                            </TableCell></Hide>
                         </TableRow>
                         <TableRow>
                            <TableCell style={{border:"1px solid black",padding:'5px'}}><Cellb>Systemic Partner</Cellb></TableCell>
                            <TableCell style={{border:"1px solid black" ,padding:'5px'}}><Cellb>Management</Cellb></TableCell>
                         </TableRow>
                         <TableRow>
                            <TableCell style={{border:"1px solid black",padding:'5px' }}><Cellb>Associate Partner</Cellb></TableCell>
                            <TableCell style={{border:"1px solid black",padding:'5px'}}><Cellb>Operations</Cellb></TableCell>
                         </TableRow>
                </Table>
                <br></br>
                    <Hide>
                        <Content style={{margin:'0px'}}>Partner with us in making inclusive economies</Content>
                        <Content style={{margin:'0px',color:'#005C9C'}}>Contact:</Content>
                        <Content style={{margin:'0px' ,color:'#005C9C'}}>communications.forthepeople@gmail.com</Content>
                    </Hide>
                <br></br>
                <br></br>
                <Mview>
                    <Head>Partners</Head>
                        <Hr></Hr>
                            <Ul>
                                <List>Corporate Social Responsibility</List>
                                <List>Human Resources/Employee Engagement</List>
                                <List>Knowledge Sharing</List>
                                <List>Marketing</List>
                                <List>Financial Resources and Sponsoring</List>
                                <List>Technology</List>
                                <List>Philanthropists</List>
                            </Ul>
                    <Head>Engagement Tracks</Head>
                        <Hr></Hr>
                            <Ul>
                                <List>Corporate Social Responsibility</List>
                                <List>Human Resources/Employee Engagement</List>
                                <List>Knowledge Sharing</List>
                                <List>Marketing</List>
                                <List>Financial Resources and Sponsoring</List>
                                <List>Technology</List>
                                <List>Philanthropists</List>
                            </Ul>
                    
                </Mview>
            </Body>
        </div>
    )
}

export default Partners
