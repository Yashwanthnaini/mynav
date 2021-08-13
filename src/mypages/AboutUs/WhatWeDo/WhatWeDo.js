import React from 'react'
import { Link } from "react-router-dom";
import {
    Headline,
    Box,
    Desc,
    InnerBox1,
    Button,
    InnerBox2,
    Images,
    Imagecaption,
    Total,
    Imagecontent,
    Pageno,
    Prev,
    Number,
    Next,
    Imagetitle,
    Imagedescription,
    Middle,
    ImageBottomcaption,
    Author,
    Date,
    Display
    }
    from './WhatWeDo.styles'

    
const  WhatWeDo = () => {
    return (
        <div>
            <Total>
            <Desc>Improving ACCESS, QUALITY & EQUITY of:</Desc>
            <Box>
            <InnerBox1>
                
                <Images src={"https://static.wixstatic.com/media/11062b_ab01ac081db248c991e1c4ae79d90355~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/11062b_ab01ac081db248c991e1c4ae79d90355~mv2.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    Agriculture and Livelihood Cooperatives
                    </Imagetitle>
                    
                    <Imagedescription>Agriculture cooperatives is an autonomous association of people to meet their common social, cultural and economic needs and it occupies a key position in agricultural development...</Imagedescription>
                     <a href="/about/whatwedo/box1" style={{textDecoration: 'none',color:'white'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>

            <InnerBox1>
            <Images src={"https://static.wixstatic.com/media/nsplsh_656d3067376c47462d6967~mv2_d_6000_2304_s_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    
                        Culture, Heritage and Society
                    </Imagetitle>
                    
                    <Imagedescription>Cultural heritage for inclusive growth seeks to pioneer ways of creating inclusive and sustainable growth, enabling local communities to benefit from this growth and to actively...</Imagedescription>
                    <a href="/about/whatwedo/box2" style={{textDecoration: 'none',color:'white'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>
            <InnerBox1>
            <Images src={"https://static.wixstatic.com/media/nsplsh_6d704e37786a4b515f4e73~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_6d704e37786a4b515f4e73~mv2.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    
                    Economic Development and Standard of Living
                    </Imagetitle>
                    
                    <Imagedescription>Economic growth is the rate of utilization of the factors of production capital andlabor -and the efficiency of their use and increased use of capital relative to laborand....</Imagedescription>
                    <a href="/about/whatwedo/box3" style={{textDecoration: 'none',color:'white',marginBottom:'0px'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>
            
            </Box>
            
            <Box>
            <InnerBox1>
                
                <Images src={"https://static.wixstatic.com/media/fabd499db1e54f5292311a0ba1913ea7.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/fabd499db1e54f5292311a0ba1913ea7.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    Education, Employment and Skills
                    </Imagetitle>
                    
                    <Imagedescription>Education is recognized to be an instrument for social change and it develops abilities, attitudes, and encouragement towards social development. Skills are a key component....</Imagedescription>
                     <a href="/about/whatwedo/box4" style={{textDecoration: 'none',color:'white'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>

            <InnerBox1>
            <Images src={"https://static.wixstatic.com/media/ad69a2abe15749a9a62bbfb83c3003c7.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/ad69a2abe15749a9a62bbfb83c3003c7.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    
                    Entrepreneurship, Businesses and Partnerships
                    </Imagetitle>
                    
                    <Imagedescription>Entrepreneurs stimulate employment growth by generating new jobs when they enter the market. The benefits to society will be greater in economies where entrepreneurs can operate....</Imagedescription>
                    <a href="/about/whatwedo/box5" style={{textDecoration: 'none',color:'white'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>
            <InnerBox1>
            <Images src={"https://static.wixstatic.com/media/nsplsh_ad0a072b3efa45d980ca78666a1e6491~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_ad0a072b3efa45d980ca78666a1e6491~mv2.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    
                    Equality, Growth & Distribution of Prosperity
                    </Imagetitle>
                    
                    <Imagedescription>Longstanding inequities in income, wealth, and opportunity have steadily worsened—and are now reaching unprecedented levels. While there is no single causal...</Imagedescription>
                    <a href="/about/whatwedo/box6" style={{textDecoration: 'none',color:'white',marginBottom:'0px'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>
            
            </Box>
            <Box>
            <InnerBox1>
                
                <Images src={"https://static.wixstatic.com/media/cc959ab171974ae3826592a76e5815fa.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/cc959ab171974ae3826592a76e5815fa.webp"}></Images>
                <Imagecontent>
                    <Imagetitle >
                    Holistic Health and Nutrition
                    </Imagetitle>
                    
                    <Imagedescription>The philosophy of holistic nutrition is that one’s health is an expression of the complex interplay between the physical and chemical, mental, and emotional, as well as....</Imagedescription>
                     <a href="/about/whatwedo/box7" style={{textDecoration: 'none',color:'white'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>

            <InnerBox1>
            <Images src={"https://static.wixstatic.com/media/36fd244f102744f4acc109fb237e24f2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/36fd244f102744f4acc109fb237e24f2.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    
                    Inclusive Governance and Transparency
                    </Imagetitle>
                    
                    <Imagedescription>Transparency is relatively functioning an Organization While inclusion has been an underlying theme, transparency was assumed, but not enshrined. The biggest step to change....</Imagedescription>
                    <a href="/about/whatwedo/box8" style={{textDecoration: 'none',color:'white'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>
            <InnerBox1>
            <Images src={"https://static.wixstatic.com/media/nsplsh_577675546e587a31685363~mv2_d_3000_1976_s_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_577675546e587a31685363~mv2_d_3000_1976_s_2.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    
                    Research, Technology and Innovation
                    </Imagetitle>
                    
                    <Imagedescription>Research is likely to lead to growth through a positive effect on innovation and technology. Inclusive innovation points to inequalities that may arise in the development....</Imagedescription>
                    <a href="/about/whatwedo/box9" style={{textDecoration: 'none',color:'white',marginBottom:'0px'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>
            
            </Box>
            <Box>
            <InnerBox1>
                
                <Images src={"https://static.wixstatic.com/media/nsplsh_f8982786c58740a4928e42475c81c64e~mv2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/nsplsh_f8982786c58740a4928e42475c81c64e~mv2.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    Rights, Policies and Social Protection
                    </Imagetitle>
                    
                    <Imagedescription>Introducing Social protection calls by the global to develop the countries based not only on moral grounds and increasingly believe that it is an important instrument in economic....</Imagedescription>
                     <a href="/about/whatwedo/box10" style={{textDecoration: 'none',color:'white'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>

            <InnerBox1>
            <Images src={"https://static.wixstatic.com/media/nsplsh_3630704c43427a35766959~mv2_d_4032_3024_s_4_2.jpg/v1/fill/w_640,h_450,al_c,q_80,usm_0.66_1.00_0.01/Image-empty-state.webp"}></Images>
                <Imagecontent>
                    <Imagetitle>
                    
                    Sustainability, Environment & Inclusion
                    </Imagetitle>
                    
                    <Imagedescription>Inclusive and sustainable growth helps people to contribute to and benefit from economic growth with minimal impact on the environment. We believe that creating enabling....</Imagedescription>
                    <a href="/about/whatwedo/box11" style={{textDecoration: 'none',color:'white'}}><Button>  Learn More</Button></a>
                </Imagecontent>
            </InnerBox1>
            <InnerBox1 style={{border:'none',boxShadow:'none'}}>
           
            </InnerBox1>
            
            </Box>
            
            </Total>
            
        </div>
    )
}

export default WhatWeDo;
