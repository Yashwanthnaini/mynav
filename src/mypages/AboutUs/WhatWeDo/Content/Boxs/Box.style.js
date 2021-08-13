import styled from 'styled-components'
export const Container = styled.div`
margin: 0px;
height:auto;
width:100%;
@media only screen and (max-width: 600px) {
   width:100%;
}
`;
export const Innercontainer = styled.div`

height:450px;
width:100%;
background-color:#eef2f5;
@media only screen and (max-width: 800px){
    height:auto;
}
@media only screen and (max-width: 600px) {
   width: 100%;
   height: auto;
}
`;
export const Images = styled.img`
height:400px;
width:100%;
@media only screen and (max-width: 1000px) {      
    height:auto;
    
}
@media only screen and (max-width: 600px) {      
    display: none;
    
}
`;
export const ImagesMobile = styled.img`
display: none;
@media only screen and (max-width: 600px) {      
    width:100%;
    height:auto;
    display:flex;
}
`;
export const ContentOnImage = styled.h1`
 position: absolute;
    top: 254px;
    left: 66px;
    font-size: 45.5px;
    color: white;
    width:690px;
    font-family:helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    @media only screen and (max-width: 1000px) {  
        font-size:38px;
        position: absolute;
        top: 183px;
        left: 23px;
   }
       }
   

    @media only screen and (max-width: 600px) {      
        position: absolute;
    top:168px;
    left: 24px;
    font-size: 23.5px;
    color: white;
    width:304px;
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
}



`;

export const Imagecaption = styled.h5`
font-size:16px;
font-weight: 650;
margin:13px 50px;
color:#005C9C;
 font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
 @media only screen and (max-width: 800px) {      
    padding-bottom:1rem;     
}
 @media only screen and (max-width: 600px) {      
    margin: 13px 16px;     
}


`;
export const Symbol = styled.span`
color:rgb(184 193 199);
height:14px;
@media only screen and (max-width: 600px) {      
    margin-right:200px;     
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
    @media only screen and (max-width: 600px) {      
    flex-direction:none;
    margin: 30px 20px;
    
}
`;
export const Content = styled.div`
width:65%;
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
color: #141414;
line-height: 1.8rem;
@media only screen and (max-width: 600px) {      
    font-size:14.5px;
    line-height: 1.5rem;
}
`;

export const SideContent = styled.div`
width:30%;
height:auto;
padding-top:80px;
@media only screen and (max-width: 600px) {      
width:100%;
}
`;
export const Moreitems = styled.h6`
font-size:16.5px;
padding:0px;
margin:0px;
font-family:helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
color:#141414;
`;
export const Items = styled.p`
font-size:15px;
font-family:helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
color:#005C9C;
`;