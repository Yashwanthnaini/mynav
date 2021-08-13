import React from 'react'
import {Container,Innercontainer,Images,ImagesMobile,ContentOnImage,Imagecaption,Moreitems,Items,Symbol,ContentBox,Content,Content1,SideContent} from './Box.style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Box8() {
    return (
        <div>
            
            <Container>
                <Innercontainer>
                    <ImagesMobile src={"https://static.wixstatic.com/media/36fd244f102744f4acc109fb237e24f2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/36fd244f102744f4acc109fb237e24f2.webp"}></ImagesMobile>  
                    <Images src={"https://static.wixstatic.com/media/36fd244f102744f4acc109fb237e24f2.jpg/v1/fill/w_1895,h_617,al_c,q_85,usm_0.66_1.00_0.01/36fd244f102744f4acc109fb237e24f2.webp"}></Images>
                    <ContentOnImage>Inclusive Governance and Transparency</ContentOnImage>
                    <Imagecaption >Operations<Symbol><ArrowForwardIosIcon style={{height:'14px',width:'25px'}}/></Symbol>Inclusive Governance and Transparency</Imagecaption>
                </Innercontainer>
                <ContentBox>
                    <Content><Content1>Transparency is relatively functioning an Organization While inclusion has been an underlying theme, transparency was assumed, but not enshrined. The biggest step to change this has been the Right to Information Act which enabled monitoring and accountability for every citizen as a right. But apart from this law, several other efforts at improving transparency have been initiated at several levels of the Government. The efforts of inclusion and transparency lead to improved governance. Effective governance needs a foundation for simpler processes and the deployment of technology. The deployment of technology has improved the quality of some services. Changes will be made to improve governance capability.<br/><br/> There are indeed several initiatives that have been taken to promote ‘transparency for inclusive governance.’ While these are all necessary stepping stones for better governance, there is more than one can be done and at a faster pace. Innovation and as can be expected, an unevenness to address challenges. It is becoming increasingly evident that technology is an important enabler for effectingGovernance. Also, the power of the rapidly growing traditional and social media has transformed how citizens access and share information. The growth in the number of young, educated people in India augurs well for promoting a new set of ideas that might have appeared impossible or inconceivable even a few years ago.<br/><br/>Stakeholders across the spectrum have an important role to play in ensuring that the benefits of better governance reach all citizens. The full potential of these and other measures of the Government can be realized only with the active engagement of all stakeholders. The opportunities that are presenting, there is no doubt that we are at the cusp of seeing a new age of greater transparency for inclusive governance that will benefit all citizens.</Content1></Content>
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

export default Box8
