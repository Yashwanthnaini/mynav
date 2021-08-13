import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Box5() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/ad69a2abe15749a9a62bbfb83c3003c7.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/ad69a2abe15749a9a62bbfb83c3003c7.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/ad69a2abe15749a9a62bbfb83c3003c7.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/ad69a2abe15749a9a62bbfb83c3003c7.webp"}></Images>
                    <ContentOnImage> Entrepreneurship, Businesses and Partnerships</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Entrepreneurship, Businesses and Partnerships</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Entrepreneurs stimulate employment growth by generating new jobs when they enter the market. The benefits to society will be greater in economies where entrepreneurs can operate flexibly, develop their ideas, and reap the rewards. Entrepreneurs are also more likely to become mentors or investors,giving rise to future generations of entrepreneurs.They are initiating a new era of trickle-up economics, in which high-impact entrepreneurs drive societal change, pushing big business and government to be more innovative, responsive, and inclusive, to the benefit of people formerly on the margins of society.<br/><br/> Partnerships between public and private are about to solve some common challenges which align with core business interests with development goals. It creates jobs, stimulates growth, and fights poverty and the main interest will be in the sourcing of goods or the use of local resources for their own production.Development partnerships are those in which opportunities to overcome key development challenges overlap with a company’s business challenges.<br/><br/>An inclusive approach is to create a positive social impact by avoiding negatively affecting stakeholders through their business activities and so as to environmental sustainability.</Content1></Content>
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

export default Box5
