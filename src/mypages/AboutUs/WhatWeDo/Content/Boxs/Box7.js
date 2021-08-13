import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Box7() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/cc959ab171974ae3826592a76e5815fa.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/cc959ab171974ae3826592a76e5815fa.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/cc959ab171974ae3826592a76e5815fa.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/cc959ab171974ae3826592a76e5815fa.webp"}></Images>
                    <ContentOnImage style={{color : "#bacbcc"}}>Holistic Health and Nutrition</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Holistic Health and Nutrition</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>The philosophy of holistic nutrition is that one’s health is an expression of the complex interplay between the physical and chemical, mental, and emotional, as well as spiritual and environmental aspects of one’s life and being. As such, professionals who are trained in holistic nutrition approach health and healing from a whole-person perspective. Using nutritional education as a primary tool, holistic nutrition professionals emphasize the building of health by approaching each person as aunique individual. This requires fully engaging the individual in their health recovery process and honoring their innate wisdom by working in an empowering and cooperative manner to chart a course to optimal health.<br/><br/>Nutritional deficiencies, poor environmental conditions, and inadequate educational infrastructure hamper children's learning, which is critical for the future supply of skilled labor and hence for economic development. There is a need to assign priorities for resource allocation among nutritional, health-care, and educational policies. Improved sanitation and vaccines against infections will prevent the loss of vital nutrients. Investments in educational infrastructure, including adult literacy programs, are beneficial for children's cognitive development. Nutrition and health policies based on long-term considerations will lead to a well-trained labor force enabling non-resource-rich developing countries to escape from poverty traps.<br/><br/></Content1></Content>
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

export default Box7
