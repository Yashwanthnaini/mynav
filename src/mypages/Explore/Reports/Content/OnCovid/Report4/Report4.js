import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from '../Reportpage.styles';


const Report4 = () => {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_6d50d739605947539a686c4f78b34ae3~mv2.jpg/v1/fill/w_640,h_448,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_6d50d739605947539a686c4f78b34ae3~mv2.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_6d50d739605947539a686c4f78b34ae3~mv2.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_6d50d739605947539a686c4f78b34ae3~mv2.webp"}></Images>
                    <ContentOnImage>
                        Situation Report - 4 On COVID-19
                    </ContentOnImage>
                    
                </Innercontainer>
                <ContentBox>
                    <Content>
                        <Content1>
                            For The People(FTP), to maintain authenticity produced this report very much based on the data available at World Health Organization(WHO), which is continuously being reported by the national authorities, who have been in regular and direct contact as Member States; where cases have been reported. WHO is also informing other countries about the situation and support as requested. This also contain the data of India, which is made available for public by Ministry of Health and Family Welfare, Government of India(GoI) provided for much reach in the locality where FTP is operating.
                        </Content1>
                        <Content1>
                        WHO regional directors of Europe, the Western Pacific and Africa called for global solidarity to fight COVID-19. Ensuring international cooperation, investing in health, and engaging communities are keys to effectively tackle the pandemic. Full briefing can be found here.

                        </Content1>
                        <Content1>
                        World Health Organization has come up with many updates according to their COVID-19 Situation Report-61. WHO has updated the case definitions in its interim guidance: Global Surveillance for human infection with coronavirus disease (COVID-19) and can be seen in Section 02 of this report. It also updated technical guidance on critical preparedness, readiness and response; advice on the use of masks; infection prevention and control; and laboratory testing can be found here.
                        </Content1>
                        <Content1>
                        To the imploration of PM Narendra Modi, the citizens are observing the Janata Curfew. On occasion of this GoI introduced and providing people a Janata Curfew Certificate on its MyGov.in portal (here) to all the citizens who took the pledge of not to venture outside and strictly follow the directions given by GoI to avert the spread of CoronaVirus. See Citizen Analytics on Janata Curfew Certification in.


                        </Content1>
                    </Content>
                    <SideContent>
                        <Moreitems>More Reports</Moreitems>
                        <hr></hr>
                        <a href="/explore/reports/covid-19/report-1" style={{textDecoration: 'none'}}> <Items>Situation Report - 1 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-2" style={{textDecoration: 'none'}}><Items>Situation Report - 2 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-3" style={{textDecoration: 'none'}}><Items>Situation Report - 3 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-4" style={{textDecoration: 'none'}}><Items>Situation Report - 4 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-5" style={{textDecoration: 'none'}}><Items>Situation Report - 5 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-6" style={{textDecoration: 'none'}}><Items>Situation Report - 6 On COVID-19</Items></a>
                        <a href="/explore/reports/covid-19/report-7" style={{textDecoration: 'none'}}><Items>Situation Report - 7 On COVID-19</Items></a>
                    </SideContent>
                </ContentBox>
            </Container>
        </div>
    )
}

export default Report4;
