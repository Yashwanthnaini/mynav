import styled from 'styled-components'
export const Container = styled.div`
margin: 1rem 0 0 0;
height:auto;
width:100%;
@media only screen and (max-width: 600px) {
   width:100%;
}
`;
export const ContentBox = styled.div`
margin:70px 35px;
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