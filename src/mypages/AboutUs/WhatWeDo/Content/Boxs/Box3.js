import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Box3() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_6d704e37786a4b515f4e73~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_6d704e37786a4b515f4e73~mv2.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_6d704e37786a4b515f4e73~mv2.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_6d704e37786a4b515f4e73~mv2.webp"}></Images>
                    <ContentOnImage>Economic Development and Standard of Living</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Economic Development and Standard of Living</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Economic growth is the rate of utilization of the factors of production capital and labor -and the efficiency of their use and increased use of capital relative to labor and by high productivity growth. Growth can generate virtuous circles of prosperity and opportunity. Efficient markets and macroeconomic stability are essential for Economic growth.Economic growth enables the possibility to deal with many serious problems of poverty, homelessness, and lack of basic amenities.<br/><br/>Broadly speaking, there are two main sources of economic growth: growth in the size of the workforce and growth in the productivity (output per hour worked) of that workforce. Either can increase the overall size of the economy but only strong productivity growth can increase per capita GDP and income. Productivity growth allows people to achieve a higher material standard of living without having to work more hours or to enjoy the same material standard of living while spending fewer hours in the paid labor force.<br/><br/>The higher levels of employment and a longer run of productivity growth will be needed to achieve higher standards of living.A coordinated initiative is required to transform inclusive growth from aspiration into action- into a new global growth agenda that places people and living standards at the centre of economic policy and economic integration.</Content1></Content>
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

export default Box3
