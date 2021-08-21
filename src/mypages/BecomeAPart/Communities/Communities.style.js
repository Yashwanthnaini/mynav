import styled from 'styled-components'
export const Body = styled.div`

width:90%;
margin-left: auto;
margin-right: auto;
@media only screen and (max-width: 600px) {
width:94%;
}
`;
export const Leftcontent = styled.div`
width:23%;
@media only screen and (max-width: 600px) {
display: none;
}
`;
export const Head = styled.h6`
font-size:16px;
padding-bottom: 5px;
margin:0px;
font-family:helvetica-w01-bold,helvetica-w02-bold,helvetica-lt-w10-bold,sans-serif;
color:#141414;
font-weight: 550;
@media only screen and (max-width: 600px) {
font-size: 15.2px;
}
`;
export const Hr = styled.div`
border-top: 1px solid #dad2d2;

@media only screen and (max-width: 600px) {
display: none;
}
`;
export const Content = styled.p`
font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;

font-size: 15px;
font-weight: lighter;
line-height: 22.5px;
color:#141414;
@media only screen and (max-width: 600px) {
    font-size: 14.4px;
}
`;
export const Text = styled.div`
display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
}
`;
export const Rightcontent = styled.div`
width:73%;
@media only screen and (max-width: 600px) {
width:100%;
}
`;
export const Ul = styled.ul`
list-style-position: outside;
padding-left:20px   ;
`;
export const List = styled.li`
font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
letter-spacing:0.2px;
font-size: 15px;
color:black;
font-weight: lighter;
line-height: 22.5px;
padding-left: 12px;
list-style-position: outside;
@media only screen and (max-width: 600px) {
letter-spacing: 0px;
padding-left: 7px;
}
`;
export const Button = styled.button`
width: 17%;
height: 38px;
border-radius:3px;
background-color:#005c9c;
margin-bottom: 0px;
margin-top: auto;
color: white;
font-weight: bold;
border:none;
margin-bottom: 50px;
:hover{
background-color:#268bd2;

}
@media only screen and (max-width: 600px) {
width:40%;
}
`;

