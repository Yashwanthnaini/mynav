import styled from 'styled-components'
export const Total = styled.div`
 background-color: transparent;
@media only screen and (max-width: 600px) {
     margin-left:auto;
     margin-right:auto;
     background-color: transparent;
}

`;

export const Desc = styled.h5`
margin:30px 77px;
font-size:16px;
    font-weight: bold;
    font-weight: 650;
    padding-top:4rem;
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    @media only screen and (max-width: 600px) {
font-size:14.5px;
 margin:20px 0px;
 padding-left:30px;
 padding-top:1rem;

}
`;
export const Box = styled.div`
margin-top: 0px;
margin-left: auto;
    margin-right: auto;
    margin-bottom:93px;
    width: 86.5%;
    height: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-around;
    -webkit-flex-wrap: nowrap;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    @media only screen and (max-width: 1030px) {
        width:95%
    }
    @media only screen and (max-width: 800px) {
        width:98%
    }
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        margin-left: auto;
    margin-right: auto;  
    margin-bottom :0px ;
    width:86.5%;
    height: auto;

}
   

}
    
    
`;
export const Display = styled.div`
@media only screen and (max-width: 600px) {
   display :flex ;
}
`;
export const InnerBox1 = styled.div`
background-color: var(--bg-overlay-color);
height:auto;
width:25%;
border:1px solid rgb(196 201 229);
box-shadow: 0 1px 4px 0 rgb(196 201 229);
padding:12.5px;
@media only screen and (max-width: 1030px){
    width:28%
}
@media only screen and (max-width: 800px){
    width:32%
}
@media only screen and (max-width: 600px) {
    margin-left: auto;
    margin-right: auto;  
    margin-bottom :30px;
    width: 102%;
    height:auto ;

}
`;
export const Images = styled.img`
height:auto;
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
    height:220px;
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
export const Imagetitle = styled.h5`
    font-size:16.5px;
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
export const Imagedescription = styled.p`
    font-size:14.09px;
    line-height: 1.4em;
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    height:105px;
    color:#383232f7;
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

{/*export const InnerBox2 = styled.div`
height:100%;
width:90%;
border:0.5px solid black;
box-shadow:;
margin-top: auto;
margin-bottom:auto;
margin-left:auto;
margin-right: auto;
@media only screen and (max-width: 600px) {
   display :flex ;
   width:auto;
   height:auto;
   

}

`;


export const Images = styled.img`
height:177px;
width:80%;
margin-left: auto;
margin-right: auto;
@media only screen and (max-width: 600px) {
   
   width:27%;
   height:65px;


}

`;
export const Imagecaption = styled.p`
font-weight: 650;
    text-transform: uppercase;
    color: #005c9c;
    font-size:13px;
    @media only screen and (max-width: 600px) {
   display: none;


}
    

`;
export const Imagecontent = styled.div`
display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height:292px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    @media only screen and (max-width: 600px) {
    height:auto;
    padding-left: 20px;




}

`;
export const Imagetitle = styled.h3`
    font-size:20px;
    line-height: 1.15;
    font-weight: bold;
    font-weight: 650;
    margin-top: 0px;
    margin-bottom: 0px;
    font-family: "Neue Helvetica W01", "Helvetica Neue", Helvetica, Arial, sans-serif;
    @media only screen and (max-width: 600px) {
    font-size: 16px;


}
}


`;
export const Imagedescription = styled.p`
    display: block;
    font-size:14.09px;
    width:90%;
    line-height: 1.6em;
    font-family: "Neue Helvetica W01", "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: auto;
    @media only screen and (max-width: 600px) {
   display: none;


}
`;
export const ImageBottomcaption = styled.div`
 margin-top: auto;
 margin-bottom: 5px;
 @media only screen and (max-width: 600px) {
   margin-top:5px;
   margin-bottom: 0px;

}

`;
export const Author = styled.span`
    color: #84919c;
    font-size: 0.800em;
    line-height: 1.4;
    font-weight: 650;
`;
export const Date = styled.span`
    color: #84919c;
    font-size:13px;
    line-height: 1.4;
`;
export const Pageno = styled.div`
margin:40px 0px;
height:40px;
width:90%;
border:1px solid #e6dfdf;
margin-left: auto;
    margin-right: auto;
    display: flex;

`;
export const Prev = styled.div`
height:auto;
width:11%;
border-right:1px solid #e6dfdf;
padding-top: 10px;
padding-bottom:10px;
text-align: center;
font-size:12px;
font-weight: bold;
color:#d5e0e8;
@media only screen and (max-width: 600px) {
   width:25%;

}
`;
export const Number = styled.div`
height:auto;
width:78%;
border-right:1px solid #e6dfdf;
padding-top: 10px;
padding-bottom:10px;
text-align: center;
font-size:12px;
font-weight: bold;
color:#d5e0e8;
@media only screen and (max-width: 600px) {
   width:50%;

}
`;
export const Next = styled.div`
height:auto;
width:11%;
padding-top: 10px;
padding-bottom:10px;
text-align: center;
font-size:12px;
font-weight: bold;
color:black;
@media only screen and (max-width: 600px) {
   width:25%;

}

`;*/}

