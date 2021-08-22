import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from '../Reportpage.styles';


const Report7 = () => {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_3877657750357470742d34~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_640,h_448,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_3877657750357470742d34~mv2_d_6000_4000_s_4_2.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_3877657750357470742d34~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_3877657750357470742d34~mv2_d_6000_4000_s_4_2.webp"}></Images>
                    <ContentOnImage>
                        Situation Report - 7 On COVID-19
                    </ContentOnImage>
                    
                </Innercontainer>
                <ContentBox>
                    <Content>
                        <Content1>
                            For The People(FTP), to maintain authenticity produced this report very much based on the data available at World Health Organization(WHO), which is continuously being reported by the national authorities, who have been in regular and direct contact as Member States; where cases have been reported. WHO is also informing other countries about the situation and support as requested. This also contain the data of India, which is made available for public by Ministry of Health and Family Welfare, Government of India(GoI) provided for much reach in the locality where FTP is operating.
                        </Content1>
                        <Content1>
                            WHO and its partners are constantly working to strengthen the chains of essential COVID-19 supplies. As global demand rises, WHO and its partners aim to ensure assistance to areas most in need. More information can be found in Section 04. Of this report.
                        </Content1>
                        <Content1>
                            WHO and Global Citizen launched #TogetherAtHome, a virtual, no-contact concert series to promote physical distancing and action for global health. Chris Martin, lead singer of Coldplay, kicked it off earlier this week with a performance from his home. More Solidarity Sessions are planned to promote health, show support for people who are staying at home to protect themselves and others from COVID-19, and encourage donations to the COVID-19 Solidarity Response Fund. WHO and FIFA launched a joint campaign to equip the football community to tackle COVID-19. This awareness campaign calls on all people around the world to follow the five key steps to stop the spread of the disease. More information can be found here.
                        </Content1>
                        <Content1>
                            The WHO WhatsApp Health Alert has now attracted 10 million users since launching Friday, and the COVID-19 Solidarity Response Fund has raised more than US$70 million, in just 10 days. The media briefing can be found here.
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

export default Report7;
