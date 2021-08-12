import styled from 'styled-components'
export const Container = styled.div`
margin: 0px;
height:auto;
width:100%;

@media only screen and (max-width: 800px) {
   
}
`;
export const CentralContainer = styled.div`
margin-top:4rem;
align-items:center;
text-align:center;
@media only screen and (max-width: 800px) {
    margin-top:2.5rem;
 }
`;
export const CentralContent1 = styled.span`

text-align:center;
font-size:40px;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width: 1000px) {
    font-size:30px;
 }
@media only screen and (max-width: 800px) {
    font-size:25px;
 }
`;
export const CentralContent2 = styled.p`

text-align:center;
font-size:15px;
margin:0px;
font-family: 'Poppins', sans-serif;
font-weight: normal;
@media only screen and (max-width: 800px) {
    font-size:14px;  
 }
`;

export const ContentBox = styled.div`
margin:50px 35px;
width:auto;
height:auto;
display:flex;
flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 800px) {      
    flex-direction:none;
    margin: 30px 20px;
    
}
`;
export const BoldContent = styled.p`
margin:0px;
padding:0px;
width:100%;
padding-bottom:1rem;
font-size:40px;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width: 1000px) {
    font-size:30px;
 }
@media only screen and (max-width: 800px) {
    font-size:23px;
 }
`;
export const Content = styled.div`
width:100%;
height:auto;
@media only screen and (max-width: 800px) {      
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
@media only screen and (max-width: 800px) {      
    font-size:17px;
    line-height: 1.5rem;
}
`;