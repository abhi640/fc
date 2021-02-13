import styled from "styled-components";
import background from "../../images/slide2.jpg";



export const CTA = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),
  url(${background}) fixed 50% 50% no-repeat;
background-size: cover;
background-position: fixed;
padding: 100px 0;
`;

export const Container = styled.div`
`;

export const ContentWrapper = styled.div`
max-width: 640px;
padding: 1em;

text-align: center;
margin-left:auto;
margin-right:auto;

h2 {
  color: #fff;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 56px;
  font-weight: 700;
  line-height: 66px;

  text-align: center;
  text-transform: uppercase;
  margin: 1.5rem 0 3rem 0;
}
 
`;

export const StyledSpan = styled.span`
box-sizing: border-box;
color: #fff;
font-family: "Barlow Condensed",sans-serif;
font-size: 1rem;
font-weight: 500;
letter-spacing: 1px;
line-height: 1.2;
margin-bottom: .5rem;
text-align: center;
text-transform: uppercase;
`

export const AccentColor = styled.span`
color: #f5634b;

`