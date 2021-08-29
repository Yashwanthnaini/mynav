import styled from 'styled-components'
export const Container = styled.div`
 width:100%;
 height:auto;
 padding:2rem 5rem;

@media only screen and (max-width: 600px) {
    padding:0rem 1rem;
}

`;
export const BoldContent = styled.h3`
 width:100%;
 height:auto;
 padding:3rem 0;

 font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
font-size:28px;
color: #E24E34;
@media only screen and (max-width: 600px) {
    font-size:17px;
}

`;

export const ContentBox = styled.div`
 width:100%;
 height:auto;
 min-height: auto;
 margin-bottom: 1rem;
}
@media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;   
}
@media only screen and (max-width: 800px) {
    margin-bottom: 1rem;
}

`;
export const ButtonBox = styled.div`
 width:100%;
 height:auto;
 color:white;
 min-height: auto;
 background-color: rgb(0, 92, 156);
 padding:0.5rem;
}

@media only screen and (max-width: 600px) {
     padding:0.3rem;
}

`;

export const BigButton = styled.div`
 width:100%;
 height:auto;
 margin-left:1rem;
 background-color: transparent;
 border:none;
 color:white;
 text-align:left;
 
 font-size:18px;
 font-family: 'Secular One', sans-serif; 
@media only screen and (max-width: 600px) {
    font-size:15px;
}

`;

export const ArrowIcon = styled.div`
 width:100%;
 height:100%;
 padding: 0px 16px 0px 0px;
 
 background-color: transparent;
 border:none;
 color:white;
 text-align:right;
 text-align: -webkit-right;
 font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;   
@media only screen and (max-width: 600px) {
     
}

`;
export const VerticalLine1 = styled.div`
margin: 1rem 0 ;
width:100%;
height:1px;
background-color:#000;
@media only screen and (max-width: 800px) {      
    
}
`;