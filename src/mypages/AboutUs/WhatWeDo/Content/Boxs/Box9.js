import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Box9() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/nsplsh_577675546e587a31685363~mv2_d_3000_1976_s_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_577675546e587a31685363~mv2_d_3000_1976_s_2.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/nsplsh_577675546e587a31685363~mv2_d_3000_1976_s_2.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/nsplsh_577675546e587a31685363~mv2_d_3000_1976_s_2.webp"}></Images>
                    <ContentOnImage>Research, Technology and Innovation</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Research, Technology and Innovation</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Research is likely to lead to growth through a positive effect on innovation and technology. Inclusive innovation points to inequalities that may arise in the development and commercialization of innovations, and also acknowledges the inequalities that may occur as a result of value creation and capture. It can create opportunities for the development of theory and empirical research around this construct in the fields of entrepreneurship, strategy, and marketing. Technology and innovation provide immense opportunities for society, the economy, and the environment. They have the potential to increase the efficiency, effectiveness, and impact of efforts to meet inclusive growth.<br/><br/>Promoting inclusive technologies and innovations makes sense for multiple reasons. First, inclusive innovation can support more resilient economies by enabling broad-based growth. Second, it promotes social welfare and social justice by increasing opportunities to make goods and services available to low-income and other marginalized groups and by enabling marginalized groups to take part in innovation activities. Inclusive innovations and technologies provide a broader product base and additional opportunities for economic growth.<br/><br/>It aims to synthesize that Inclusive innovation and call for future research that deals directly with value creation and the distributional consequences of innovation.</Content1></Content>
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

export default Box9
