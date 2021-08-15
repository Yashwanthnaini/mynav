import styled from 'styled-components'
export const Container1 = styled.div`

padding:4rem 3rem 3rem 3rem;
@media only screen and (max-width: 1040px) {
    padding:3rem 10rem 10rem 10rem;
}
@media only screen and (max-width: 880px) {
    padding:4rem 2rem 2rem 2rem;
}
@media only screen and (max-width: 600px) {
    padding:2rem 5rem 5rem 5rem;
}
@media only screen and (max-width: 480px) {
    padding:1rem;
}
`;


export const InnerBox1 = styled.div`
background-color: var(--bg-overlay-color);
height:300px;
width:100%;
border:1px solid rgb(196 201 229);
box-shadow: 0 1px 4px 0 rgb(196 201 229);
padding:1rem;
@media only screen and (max-width: 1030px){
    
}
@media only screen and (max-width: 800px){
    
}
@media only screen and (max-width: 600px) {
    margin:0;
    
    height:auto ;

}
`;
export const BoxTitle = styled.h5`
    font-size:25px;
    line-height: 1.2;
    font-weight: bold;
    font-weight: 650;
    height: 37px;
    margin-top:10px;
    margin-bottom: 0px;
    letter-spacing: 0.1px;
    padding-right:10px;
    
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    @media only screen and (max-width: 600px) {



}
`;
export const Line1 = styled.hr`
    width:100%
    @media only screen and (max-width: 600px) {
   


}
`;
export const BoxDescription = styled.p`
    font-size:15px;
    line-height: 1.6em;
    font-family: open sans,sans-serif;
    height:auto;
    color:#383232f7;
    @media only screen and (max-width: 600px) {
   


}
`;
export const MiddleTitle = styled.span`
font-family: palatino linotype,serif;
font-size:42px;
    @media only screen and (max-width: 600px) {
    font-size: 32px;
}
`;
export const Line2 = styled.div`
margin:1rem;
width: 32px;
height: 5px;
--lnw: 3px;
--brd: 15,15,15;
--alpha-brd: 1;
transform-origin: center 1.5px;
border-top: var(--lnw,2px) solid rgba(var(--brd,var(--color_15)),var(--alpha-brd,1));
    @media only screen and (max-width: 600px) {
   


}
`;
export const Container2 = styled.div`

padding:5rem;
align-items:center;
text-align:center;
@media only screen and (max-width: 1040px) {
    padding:3rem 10rem 10rem 10rem;
}
@media only screen and (max-width: 880px) {
    padding:4rem 2rem 2rem 2rem;
}
@media only screen and (max-width: 600px) {
    padding:2rem 5rem 5rem 5rem;
}
@media only screen and (max-width: 480px) {
    padding:1rem;
}
`;
export const Member = styled.div`


width:100%;
height:400px;
@media only screen and (max-width: 1030px){
    
}
@media only screen and (max-width: 800px){
    
}
@media only screen and (max-width: 600px) {
    

}
`;
export const MemberImage = styled.div`


width:100%;
@media only screen and (max-width: 1030px){
    
}
@media only screen and (max-width: 800px){
    
}
@media only screen and (max-width: 600px) {
    

}
`;
export const MemberName = styled.p`


width:100%;
font-size:20px;
line-height:0.8em;
font-family: didot-w01-italic,serif;
@media only screen and (max-width: 1030px){
    
}
@media only screen and (max-width: 800px){
    
}
@media only screen and (max-width: 600px) {
    

}
`;
export const MemberDetails = styled.p`

padding-left:20%;
width:80%;
font-size:14px;
line-height:1.3em;
height:auto;
font-family: helvetica-w01-light,helvetica-w02-light,sans-serif;
@media only screen and (max-width: 1030px){
    
}
@media only screen and (max-width: 800px){
    
}
@media only screen and (max-width: 600px) {
    
    height:auto;

}
`;



export const Images = styled.img`
height:200px;
width:200px;
object-fit: cover;
border-radius:50%;
over-flow:hidden;
margin-left: auto;
margin-right: auto;
@media only screen and (max-width: 800px) {
    
    
   

}
@media only screen and (max-width: 600px) {
    height:auto;
   

}

`;
