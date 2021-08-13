import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
 
function Box2() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_656d3067376c47462d6967~mv2_d_6000_2304_s_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_656d3067376c47462d6967~mv2_d_6000_2304_s_2.jpg/v1/fill/w_1287,h_411,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_656d3067376c47462d6967~mv2_d_6000_2304_s_2.webp"}></Images>
                    <ContentOnImage>Culture, Heritage and Society</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Culture, Heritage and Society</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Cultural heritage for inclusive growth seeks to pioneer ways of creating inclusive and sustainable growth, enabling local communities to benefit from this growth and to actively participate in the sharing and protection of their heritage. Cultural heritage, both tangible and intangible, can cover many areas, from the built environment through to cultural traditions such as music and language.Individuals and communities are included in their heritage, and the value it brings them economically, socially, and environmentally. By learning and understanding more about their heritage, people can value and appreciate it more, increasing their human capital and contributing to greater social and economic benefits.<br/><br/>Developing the skills and networks of the heritage sector and relevant policymakers, to support the engagement of communities and it ensures inclusive growth. Inclusive growth can help achieve a fairer distribution of wealth. It encourages more engagement and participation of communities, and a deeper understanding and appreciation of the value of peoples and places, for the mutual reinforcement of economic growth and social welfare.<br/><br/>Heritage, if properly managed, can be instrumental in enhancing social inclusion, developing intercultural dialogue and shaping the identity of a territory.Supporting the above approaches to ensure long-term inclusive growth. By increasing the recognition of the wider potential of heritage, and understanding the needs of communities, this will lead to more favourable and informed policies that benefit the community.</Content1></Content>
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

export default Box2
