import styled from 'styled-components'
export const Container = styled.div`
margin: 0px;
height:auto;
width:100%;
@media only screen and (max-width: 600px) {
   width:100%;
}
`;
export const CentralContainer = styled.div`
margin-top:4rem;
align-items:center;
text-align:center;
@media only screen and (max-width: 600px) {
    margin-top:2.5rem;
 }
`;
export const CentralContent1 = styled.span`

text-align:center;
font-size:35px;
text-decoration:underline;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width: 600px) {
    font-size:25px;
 }
`;
export const CentralContent2 = styled.p`

text-align:center;
font-size:15px;
margin:0px;
font-family: 'Poppins', sans-serif;
font-weight: normal;
@media only screen and (max-width: 600px) {
    font-size:14px;  
 }
`;

export const ContentBox = styled.div`
margin:50px 140px;
width:auto;
height:auto;
display:flex;
flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {      
    flex-direction:none;
    margin: 30px 20px;
    
}
`;
export const DoContent = styled.div`
margin:50px 35px;
width:auto;
height:auto;
display:flex;

@media only screen and (max-width: 800px) {      
    
    margin:0;
    display:inline-grid;
    
}
`;
export const DoContent1 = styled.span`
margin:0 0 0 3rem;
padding:0px;
width:auto;
padding-bottom:1rem;
font-size:34px;
color:#005C9C;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width: 1000px) {
    text-align: center;
    vertical-align: middle;
    line-height: 190px;
 }
 @media only screen and (max-width: 800px) {
    text-align: unset;
    vertical-align: unset;
    line-height: unset;
    width:100%;
    font-size:25px;
    margin: 0;
 }
@media only screen and (max-width: 600px) {
    width:100%;
    font-size:25px;
    margin: 0;
 }
`;
export const VerticalLine1 = styled.span`
margin: -38px 20px 15px 55px;
width:1px;
height:180px;
background-color:#000;
@media only screen and (max-width: 1000px) {
    height:auto;
    text-align: center;
    vertical-align: middle;
    line-height: 190px;
 }
@media only screen and (max-width: 800px) {      
    width:0;
    height:0;
    margin:0;
}
`;
export const VerticalLine2 = styled.span`
margin: -38px 20px 15px 30px;
width:1px;
height:180px;
background-color:#000;
@media only screen and (max-width: 1000px) {
    height:auto;
    text-align: center;
    vertical-align: middle;
    line-height: 190px;
 }
@media only screen and (max-width: 800px) {      
    width:0;
    height:0;
    margin:0;
}
`;
export const DoContent2 = styled.span`
width:auto;
height:auto;
font-family:helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
font-size:17px;
font-weight: normal;

margin:0px;
padding:0px;

color: #141414;
line-height: 1.8rem;
@media only screen and (max-width: 1000px) {
    text-align: center;
    vertical-align: middle;
    line-height: 1.8rem;
 }
@media only screen and (max-width: 800px) {      
    font-size:17px;
    line-height: 1.5rem;
    width:100%;
    margin-bottom:2rem;
}
`;
export const BoldContent = styled.p`
margin:0px;
padding:0px;
width:100%;
padding-bottom:1rem;
color:#005C9C;
font-size:25px;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width: 600px) {
    font-size:23px;
 }
`;
export const Content = styled.div`
width:100%;
height:auto;
@media only screen and (max-width: 600px) {      
    width:100%;
}
`;
export const Content1 = styled.p`
font-family:helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
font-size:17px;
font-weight: normal;

margin:0px;
padding:0px;
padding-bottom:1.6rem;
color: #141414;
line-height: 1.8rem;
@media only screen and (max-width: 600px) {      
    font-size:17px;
    line-height: 1.5rem;
}
`;