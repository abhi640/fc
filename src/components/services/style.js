import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 100px 0;
`;

export const Header = styled.div``;

export const Centered = styled.div`
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  text-align: center;
  padding: 0 2em;

  h2 {
    font-size: 38px;
    line-height: 1.2;
    margin-top: 0.5em;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2em;
  grid-auto-flow: row dense;
`;

export const Service = styled.div`
  text-align: center;
  padding: 1em;
`;

export const Container = styled.div`
  max-width: 1140px;

  padding: 0 2em;
  width: 80%;
  margin: 0 auto;
`;
export const Icon = styled.div`
  font-size: 3rem;
  color: #f5634b;
`;

export const Divider = styled.div`
  margin: 0 auto;
  background: #f5634b;
  width: 45px;
  height: 4px;
`;
