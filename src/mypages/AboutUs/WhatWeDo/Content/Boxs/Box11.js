import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Box11() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_3630704c43427a35766959~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_3630704c43427a35766959~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                    <ContentOnImage>Sustainability, Environment & Inclusion</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Sustainability, Environment & Inclusion</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Inclusive and sustainable growth helps people to contribute to and benefit from economic growth with minimal impact on the environment. We believe that creating enabling conditions for inclusive growth helps bridge economic, social, and environmental gaps for sustainable development. Everyone has to be given a chance to participate in and benefit from development. Inclusive and sustainable development is crucial to reduce poverty in all its dimensions. Many people are excluded from mainstream development because of their gender, ethnicity, age, sexual orientation, disability, or poverty.<br/><br/>Integrated planning which establishes evidence-based analysis for national plans, promoting economic diversification and sustainable growth, and effective natural resource management. Supporting employment creation, decent work, and redistributive programs to address poverty, inequality, and exclusion which promotes decent work; removing barriers in access to labor market opportunities; improving working conditions and scaling up redistributive programs especially to support thesocial protection systems. Mobilizing and scaling up financing for enabling the transition which promotes fiscal policies consistent with inclusive and sustainable growth objectives; promoting domestic resource mobilization and the adoption of innovative financing mechanisms for environmental sustainability and clean energy which are broad priorities to achieve inclusive sustainability.<br/><br/></Content1></Content>
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

export default Box11
