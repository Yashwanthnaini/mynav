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
     
}

`;

export const ContentBox = styled.div`
 width:100%;
 height:auto;
 min-height: auto;
 
}

@media only screen and (max-width: 600px) {
     
}

`;
export const ButtonBox = styled.div`
 width:100%;
 height:auto;
 color:white;
 min-height: auto;
 background-color: rgb(0, 92, 156);
}

@media only screen and (max-width: 600px) {
     
}

`;

export const BigButton = styled.button`
 width:100%;
 height:auto;
 margin-left:1rem;
 background-color: rgb(0, 92, 156);;
 border:none;
 color:white;
 text-align:left;
 font-size:18px;
 font-family: 'Secular One', sans-serif; 
@media only screen and (max-width: 600px) {
     
}

`;

export const ArrowIcon = styled.button`
 width:100%;
 height:100%;
 padding: 0px 16px 0px 0px;
 
 background-color: rgb(0, 92, 156);
 border:none;
 color:white;
 text-align:right;
 font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;   
@media only screen and (max-width: 600px) {
     
}

`;
