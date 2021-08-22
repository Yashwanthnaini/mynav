import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from '../Reportpage.styles';


const Report6 = () => {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/7331fc_a1113cb7b55f4407be8e3f8a2628184e~mv2.jpg/v1/fill/w_640,h_448,al_c,q_85/7331fc_a1113cb7b55f4407be8e3f8a2628184e~mv2.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/7331fc_a1113cb7b55f4407be8e3f8a2628184e~mv2.jpg/v1/fill/w_1279,h_650,al_c,q_85/7331fc_a1113cb7b55f4407be8e3f8a2628184e~mv2.webp"}></Images>
                    <ContentOnImage>
                        Situation Report - 6 On COVID-19
                    </ContentOnImage>
                    
                </Innercontainer>
                <ContentBox>
                    <Content>
                        <Content1>
                            For The People(FTP), to maintain authenticity produced this report very much based on the data available at World Health Organization(WHO), which is continuously being reported by the national authorities, who have been in regular and direct contact as Member States; where cases have been reported. WHO is also informing other countries about the situation and support as requested. This also contain the data of India, which is made available for public by Ministry of Health and Family Welfare, Government of India(GoI) provided for much reach in the locality where FTP is operating.
                        </Content1>
                        <Content1>
                        1. The number of COVID-19 cases surpassed 300,000 globally.
                        </Content1>
                        <Content1>
                        2. Diagnostic testing for COVID-19 is critical to tracking the virus, understanding epidemiology, informing case management, and to suppressing transmission. WHO has updated the Laboratory Testing Strategy document according to the 4Cs transmission scenarios. All technical guidance can be found here.
                        </Content1>
                        <Content1>
                        3. WHO Regional Office for Europe has published interim guidance on how to deal with COVID-19 in prisons and other places of detention, available here.
                        </Content1>
                        <Content1>
                        4. World Water Day 2020, celebrated on 22 March, highlighted the essential role of hand washing in hygiene to protect you and those around you. WHO Regional Office for Europe provides more information here.
                        </Content1>
                        <Content1>
                        The first vaccine trial has begun just 60 days after the genetic sequence of the virus was shared by China. This is an incredible achievement. To ensure clear evidence of which treatments are most effective, WHO and its partners are organizing a large international study, called the Solidarity Trial, in many countries to compare different treatments
                        WHO and Global Citizen launched #TogetherAtHome, a virtual, no-contact concert series to promote physical distancing and action for global health. Chris Martin, lead singer of Coldplay, kicked it off earlier this week with a performance from his home. More Solidarity Sessions are planned to promote health, show support for people.
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

export default Report6;
