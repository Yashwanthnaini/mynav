import styled from 'styled-components'
export const Container = styled.div`
padding: 2rem;
height:auto;
width:100%;

@media only screen and (max-width: 600px) {
    padding: 1rem;
}
`;

export const BoldContent = styled.p`
margin:0px;
padding:0px;
width:100%;
font-size:52px;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width: 1000px) {
    font-size:42px;
 }
@media only screen and (max-width: 600px) {
    font-size:20px;
 }
`;
export const BigTextContent = styled.p`
margin:0px;
padding:0px;
width:100%;

font-size:26px;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width: 1000px) {
    font-size:20px;
 }
@media only screen and (max-width: 600px) {
    font-size:15px;
 }
`;

export const Line1 = styled.div`

width: 100%;
height: 1px;
border-top:  solid grey;
@media only screen and (max-width: 600px) {

`;
export const InnerContainer = styled.div`
padding-top:2rem;
height:auto;
width:100%;

@media only screen and (max-width: 600px) {
    padding-top:1rem;

}
`;
export const InnerBox1 = styled.div`
background-color: var(--bg-overlay-color);
height:auto;
width:100%;
border:1px solid rgb(196 201 229);
box-shadow: 0 1px 4px 0 rgb(196 201 229);
padding: 0 1rem;
@media only screen and (max-width: 1030px){
    
}
@media only screen and (max-width: 800px){
    
}
@media only screen and (max-width: 600px) {
    margin-bottom :2px;
    padding:0 0.5rem 0 0.5rem;
    height:auto ;

}
`;

export const Imagetitle = styled.h5`
    font-size:22px;
    padding: 1rem 0;
    line-height: 1.2;
    font-weight: bold;
    font-weight: 650;
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    height: auto;
    
    letter-spacing: 0.1px;
    
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    @media only screen and (max-width: 600px) {
        font-size:17px;
        padding: 0.5rem 0;
}
`;

export const Images = styled.img`
height:220px;
width:100%;
margin-left: auto;
margin-right: auto;
@media only screen and (max-width: 800px) {
    
}
@media only screen and (max-width: 600px) {
    height:auto;

}
`;

export const Imagecontent = styled.div`
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height:auto;
     padding: 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-bottom:0px;
    @media only screen and (max-width: 600px) {
    
}
`;

export const Imagedescription = styled.p`
    font-size:15px;
    line-height: 1.6em;
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    height:auto;
    color:#383232f7;
    @media only screen and (max-width: 600px) {
        font-size:12px;
}
`;
export const ImageFooter = styled.div`
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height:auto;
     padding: 1rem;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    
    @media only screen and (max-width: 600px) {
    
}
`;
export const Button = styled.button`
width: 100%;
height: 38px;
border-radius:3px;
background-color:#005c9c;
margin-bottom: 0px;
margin-top: auto;
color: white;
font-weight: bold;
border:none;
:hover{
background-color:#268bd2;
}
`;

