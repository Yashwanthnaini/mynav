import styled from 'styled-components'
export const Body = styled.div`
width:90%;
margin-left: auto;
margin-right: auto;
@media only screen and (max-width: 600px) {
width:91%;
padding-right: 0px;
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
font-size: 17px;
}
`;
export const Content = styled.p`
font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
width:100%;
font-size: 15px;
font-weight: lighter;
line-height: 24px;
letter-spacing:0.05px;
color:rgb(20, 20, 20);
@media only screen and (max-width: 600px) {
    font-size: 14.4px;
}
`;
export const Cell = styled.div`
text-align:center;
font-size:15px;
font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
letter-spacing:0.05px;
@media only screen and (max-width: 600px) {
    margin:0px;
}
`;
export const Cellb = styled.div`
text-align:center;
font-size:15px;
font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
letter-spacing:0.05px;
margin:30px 0px 30px 0px;
@media only screen and (max-width: 600px) {
    margin:12px 0px;
    text-align:center;
    font-size:14.2px;
    margin:20px 0px 20px 0px;
}
`;
export const Ul = styled.ul`
list-style-position: outside;
@media only screen and (max-width: 600px) {
padding:0px 25px;
}
`;
export const List = styled.li`
font-family: helvetica-w01-roman,helvetica-w02-roman,helvetica-lt-w10-roman,sans-serif;
letter-spacing:0.2px;
font-size: 15px;
color:black;
font-weight: lighter;
line-height: 22.5px;

list-style-position: outside;
@media only screen and (max-width: 600px) {
    font-size: 13px;
}
`;
export const Hide = styled.div`
display:contents;
@media only screen and (max-width: 600px) {
display:none;
}
`;
export const Mview = styled.div`
display: none;
@media only screen and (max-width: 600px) {
display:contents;
}
`;
export const Hr = styled.div`
border-top: 1px solid black;

@media only screen and (max-width: 600px) {

}
`;