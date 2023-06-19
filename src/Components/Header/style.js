import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 200px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
background: ${({theme})=>theme.colors.gray.gray700};
`;

export const Header = styled.header`
width: 126px;
height: 48px;
margin: 0 auto;
position: relative;
`;