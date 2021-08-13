import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Box4() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/fabd499db1e54f5292311a0ba1913ea7.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/fabd499db1e54f5292311a0ba1913ea7.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/fabd499db1e54f5292311a0ba1913ea7.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/fabd499db1e54f5292311a0ba1913ea7.webp"}></Images>
                    <ContentOnImage>Education, Employment and Skills</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Education, Employment and Skills</Imagecaption>
                </Innercontainer>
                <ContentBox><Content><Content1>Education is recognized to be an instrument for social change and it develops abilities, attitudes, and encouragement towards social development. Skills are a key component of inclusive growth, ensuring people of all ages have the tools they need to navigate the challenges of a rapidly evolving labor market and connect to the economic opportunities which are offered by the country. An effective skills system must be a critical part of helping to tackle inequality and deprivation, attract inward investment, and drive productivity.<br/><br/>Economic slowdown and shocks which impact social security with people lose jobs and poverty level increases. Employment is the key factor in reducing poverty levels. Level of education and skills of the workforce to determine the ability of the poor to integrate into and benefit from the growth process.Invest in economic sectors that can create significant employment opportunities for the youth;ensure that new jobs are progressively created in more knowledge-intensive sectors with greater added value as the educational quality of the population increases; expand vocational training opportunities to ensure that students graduate with skills useful for the current work environment in addition to general know-how A successful skills system would empower people to move into well-paid good jobs that are central to cultivating self-agency and driving inclusive growth.<br/><br/></Content1></Content>
                    <SideContent>
                        <Moreitems>More Items</Moreitems>
                        <hr></hr>
                        <a href="/about/whatwedo/box1" style={{textDecoration: 'none'}}> <Items>Agriculture and Livelihood Cooperatives</Items></a>
                        <a href="/about/whatwedo/box2" style={{textDecoration: 'none'}}><Items>Culture, Heritage and Society</Items></a>
                        <a href="/about/whatwedo/box3" style={{textDecoration: 'none'}}><Items>Economic Development and Standard of Living</Items></a>
                        <a href="/about/whatwedo/box4" style={{textDecoration: 'none'}}><Items>Education, Employment and Skills</Items></a>
                        <a href="/about/whatwedo/box5" style={{textDecoration: 'none'}}><Items>Entrepreneurship, Businesses and Partnerships</Items></a>
                        <a href="/about/whatwedo/box6" style={{textDecoration: 'none'}}><Items>Equality & Distribution of Prosperity</Items></a>
                        <a href="/about/whatwedo/box7" style={{textDecoration: 'none'}}><Items>Holistic Health and Nutrition</Items></a>
                        <a href="/about/whatwedo/box8" style={{textDecoration: 'none'}}><Items>Inclusive Governance and Transparency</Items></a>
                        <a href="/about/whatwedo/box9" style={{textDecoration: 'none'}}><Items>Research, Technology and Innovation</Items></a>
                        <a href="/about/whatwedo/box10" style={{textDecoration: 'none'}}><Items>Rights, Policies and Social Protection</Items></a>
                        <a href="/about/whatwedo/box11" style={{textDecoration: 'none'}}><Items>Sustainability and Inclusion</Items></a>
                    </SideContent>
                </ContentBox>
            </Container>
        </div>
    )
}

export default Box4
