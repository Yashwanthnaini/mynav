import styled from 'styled-components'
export const Container = styled.div`
margin: 0px;
height:auto;
width:100%;

@media only screen and (max-width: 800px) {
   
}
`;
export const ContentBox = styled.div`
margin:100px 95px;
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
export const HeadContent = styled.span`
    font-size:36px;
    width:60%;
    line-height: 1.4em;
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    height:auto;
    padding-bottom:1rem;
    color:#383232f7;
    @media only screen and (max-width: 1030px) {
        font-size:30px;
        width:76%;
}
    @media only screen and (max-width: 1000px) {
        font-size:30px;
        width:70%;
}
@media only screen and (max-width: 800px) {
   
}
    @media only screen and (max-width: 600px) {
        font-size:17px;
        width:100%;
        
       
}
`;
export const VerticalLine1 = styled.span`
margin: 0;
width:100%;
height:1px;
background-color:#000;
@media only screen and (max-width: 800px) {      
    
}
`;
export const Content = styled.div`
width:100%;
height:auto;
@media only screen and (max-width: 800px) {      
    width:100%;
}
`;
export const BoldContent = styled.p`
margin:0px;
padding:16px 0px 10px 0px;
width:100%;
padding-bottom:1rem;
font-size:16px;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width: 800px) {
    
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
@media only screen and (max-width: 1000px) {      
    font-size:18px;
   
}
@media only screen and (max-width: 800px) {      
    font-size:17px;
    line-height: 1.5rem;
}
`;
export const VerticalLine2 = styled.div`
margin: 0;
width:100%;
height:1px;
background-color:#000;
@media only screen and (max-width: 800px) {      
    
}
`;
export const DoContent = styled.div`
margin:35px 35px 0 35px;
width:auto;
height:400px;
display:flex;

@media only screen and (max-width: 800px) {      
    padding-top:1rem;
    margin:0;
    display:inline-block;
    align-items:center;
    text-align:center;
    width:100%;
    height:auto;
}
`;
export const DoContent1 = styled.span`
margin:38px 0 0 3.8rem;
padding:0px;
width:auto;

font-size:34px;
color:#005C9C;
font-family: 'Poppins', sans-serif;
@media only screen and (max-width: 800px) {
    width:100%;
    font-size:25px;
    margin: 0;
 }
`;
export const Images = styled.img`
width: 200px;
height: 200px;
object-fit: cover;
margin-left: auto;
margin-right: auto;
border-radius:50%;
over-flow:hidden;
@media only screen and (max-width: 600px) {
    height:181px;
    width:181px;
   

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
    @media only screen and (max-width: 800px) {
        height:auto;
    }
    @media only screen and (max-width: 600px) {
        height:auto;
}
`;
export const Imagetitle = styled.h5`
    color: #FF6161;
    
    font-family: 'Julius Sans One', sans-serif;
    font-weight:lighter;
    font-size:22px;
    line-height: 1.5em;
    height: 37px;
    margin-top:10px;
    margin-bottom: 0px;
    letter-spacing: 0.1px;
    padding-right:10px;
    
    @media only screen and (max-width: 600px) {
        font-size: 20px;


} 
`;
export const DoContent2 = styled.span`
width:auto;
height:auto;
font-family:helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
font-size:17px;
font-weight: normal;

margin:0px;
padding:0px 0px 0px 36px;

color: #141414;
line-height: 1.8rem;
@media only screen and (max-width: 800px) {      
    padding:0;
    width:100%;
    font-size:20px;
    margin-bottom:2rem;
    align-items:center;
    text-align:center;
}
`;

export const DivSVG1 = styled.div`
transform: rotate(
    3.626199336382683deg
    );
width: 45px;
height: 36px;
stroke-width: 0;
fill-opacity: 1;
stroke: #ED1566;
stroke-opacity: 1;
fill: #FF4040;
position: relative;
    right: 46px;
    top: 23px;
    @media only screen and (max-width: 1300px) {
        
        position: relative;
        right: 46px;
        top: 23px;
    }
    @media only screen and (max-width: 800px) {
        width: 39px;
        height: 30px;
        position: relative;
        right: 22px;
        top: 21px;
    }
    @media only screen and (max-width: 600px) {
        width: 25px;
        height: 20px;
        position: relative;
        right: 28px;
        top: 13px; 
}
`;
export const Imagedescription = styled.p`
    font-size:33px;
    line-height: 1.7em;
    font-family: helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
    font-weight: bold;
    font-weight: 650;
    height:105px;
    width:69%;
    color:#000;
    margin:0 0 0 100px;
    @media only screen and (max-width: 1030px) {
        font-size:28px;
    }
    @media only screen and (max-width: 1000px) {
        font-size:26px;
    }
    @media only screen and (max-width: 800px) {
        font-size:23px;
    }
    @media only screen and (max-width: 600px) {
        font-size:17px;
        align-items:center;
        text-align: left;
        margin-left:10%;
        width:90%;


}
`;
export const DivSVG2 = styled.div`
transform: rotate(
    180deg
    );
width: 45px;
height: 31px;
stroke-width: 0;
fill-opacity: 1;
stroke: #ED1566;
stroke-opacity: 1;
fill: #FF4040;
position: relative;
    left: 330px;
    top: -21px;
    @media only screen and (max-width: 1300px) {
        position: relative;
        left: 130px;
        top: -21px;
    }
    @media only screen and (max-width: 1000px) {
        position: relative;
        left: 101px;
        top: -21px;
    }
    @media only screen and (max-width: 800px) {
        width: 39px;
        height: 30px;
        position: relative;
        left: 428px;
        top: -21px;
    }
    
    @media only screen and (max-width: 605px) {
        width: 25px;
        height: 20px;
        position: relative;
                left: 169px;
                top: -18px; 
}
@media only screen and (max-width: 500px) {
    
    position: relative;
            left: 202px;
            top: -18px; 
}
@media only screen and (max-width: 420px) {
    
    position: relative;
            left: 295px;
            top: -18px; 
}
@media only screen and (max-width: 395px) {
    
    position: relative;
            left: 170px;
            top: -18px; 
}
@media only screen and (max-width: 325px) {
    
    position: relative;
            left: 48px;
            top: -18px; 
}
`;
export const DivSVG3 = styled.div`
transform: rotate(
    180deg
    );
width: 45px;
height: 31px;
stroke-width: 0;
fill-opacity: 1;
stroke: #ED1566;
stroke-opacity: 1;
fill: #FF4040;
position: relative;
    left: 414px;
    top: -21px;
    @media only screen and (max-width: 1300px) {
        position: relative;
            left: 236px;
            top: -21px;
    }
    @media only screen and (max-width: 1030px) {
        position: relative;
            left: 103px;
            top: -21px;
    }
    @media only screen and (max-width: 1000px) {
        position: relative;
            left: 92px;
            top: -21px;
    }
    @media only screen and (max-width: 800px) {
        width: 39px;
        height: 30px;
        position: relative;
        left: 510px;
        top: -21px;
    }
    @media only screen and (max-width: 605px) {
        width: 25px;
        height: 20px;
        position: relative;
                left: 213px;
                top: -17px;  
}@media only screen and (max-width: 420px) {
    
    position: relative;
            left: 63px;
            top: -17px; 
}
@media only screen and (max-width: 395px) {
    
    position: relative;
            left: 215px;
            top: -17px; 
}
@media only screen and (max-width: 325px) {
    
    position: relative;
            left: 120px;
            top: -17px; 
}

`;
export const DivSVG4 = styled.div`
transform: rotate(
    180deg
    );
width: 45px;
height: 31px;
stroke-width: 0;
fill-opacity: 1;
stroke: #ED1566;
stroke-opacity: 1;
fill: #FF4040;
position: relative;
    left: 336px;
    top: -23px;
    @media only screen and (max-width: 1300px) {
        position: relative;
        left: 160px;
        top: -23px;
    }
    @media only screen and (max-width: 1030px) {
        position: relative;
        left: 188px;
        top: -23px;
    }
    @media only screen and (max-width: 1000px) {
        position: relative;
        left: 174px;
        top: -23px;
    }
    @media only screen and (max-width: 800px) {
        width: 39px;
        height: 30px;
        position: relative;
        left: 445px;
        top: -21px;
    }
    @media only screen and (max-width: 605px) {
        width: 25px;
        height: 20px;
        position: relative;
                left: 175px;
                top: -17px;  
}
@media only screen and (max-width: 420px) {
    
    position: relative;
            left: 83px;
            top: -17px; 
}
@media only screen and (max-width: 385px) {
    
    position: relative;
            left: 114px;
            top: -17px; 
}
@media only screen and (max-width: 362px) {
    
    position: relative;
            left: 176px;
            top: -17px; 
}
@media only screen and (max-width: 322px) {
    
    position: relative;
            left: 83px;
            top: -17px; 
}
`;
