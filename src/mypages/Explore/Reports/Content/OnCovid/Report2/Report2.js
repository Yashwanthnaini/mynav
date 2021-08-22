import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from '../Reportpage.styles';


const Report2 = () => {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/11062b_8deb790af4fc4a8684a730e0d287669d~mv2.jpg/v1/fill/w_640,h_448,al_c,q_80,usm_0.66_1.00_0.01/11062b_8deb790af4fc4a8684a730e0d287669d~mv2.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/11062b_8deb790af4fc4a8684a730e0d287669d~mv2.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/11062b_8deb790af4fc4a8684a730e0d287669d~mv2.webp"}></Images>
                    <ContentOnImage>
                        Situation Report - 2 On COVID-19
                    </ContentOnImage>
                    
                </Innercontainer>
                <ContentBox>
                    <Content>
                        <Content1>
                        For The People(FTP), to maintain authenticity produced this report very much based on the data available at Ministry of Health and Family Welfare, Government of India(GoI), provided for much reach in the locality where FTP is operating. This also contain the global data, which is made available for public by World Health Organization(WHO); which is continuously being reported by the national authorities, who have been in regular and direct contact as Member States; where cases have been reported. WHO is also informing other countries about the situation and support as requested.

                        </Content1>
                        <Content1>
                        WHO highlights about its new protocol titled the Population-based age-stratified seroepidemiological investigation protocol for COVID-19 virus infection. It is a new protocol developed to investigate the extent of COVID-19 infection in the population, as determined by positive antibody tests in the general population. See excerption from WHO Situation Report-59 in Section 02. New protocol for Early Epidemiological investigations for public health response for more information. (World Health Organization, 2020)
                        </Content1>
                        <Content1>
                        Narendra Modi, Prime Minister of India, addressed the nation at 2000 IST on 19 March 2020. He called for a self-imposed Janta curfew to be observed by Indians to stay at home from 0700 to 2100 IST on Sunday, 22 March 2020. He urged everyone to practice social distancing, one of the effective ways to curb the spread of virus at a time when COVID-19 has no cure or vaccine. He appealed citizens to practice patience and discipline to tackle the spread and ensure hospitals are not overloaded. He appealed citizens to show gratitude towards Health-workers. He announced GoI has setup Task Force under Finance Ministry, constituted to tackle economic impact of COVID-19.
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

export default Report2;
