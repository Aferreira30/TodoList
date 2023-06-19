import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 54px;
margin: 0 auto;
`;

export const FormNewTask = styled.form`
width: 736px;
height: 54px;
margin: 0 auto;
border:none;
display:flex;
justify-content:space-between;
align-items:center;
gap:8px;
position:absolute;
top:180px;


  input{
    width:638px;
    height:54px;
    background:${({theme})=>theme.colors.gray.gray500};
    color:${({theme})=>theme.colors.gray.gray300};
    font-size:${({theme})=>theme.fonts.size.sizeG}px;
    line-height:${({theme})=>theme.fonts.lineHeight}px;
    font-weight:${({theme})=>theme.fonts.weight};
    border:none;
    border-radius:8px;
    outline:none;
    padding: 0px 16px;
  }
input:focus{
  border: 1px solid ${({theme})=>theme.colors.purple.dark};
  color:${({theme})=>theme.colors.gray.gray100};

}

  button{
    width:90px;
    height:50px;
    border-radius:8px;
    border:none;
    padding:16px;
    background:${({theme})=>theme.colors.blue.dark};
    display:flex;
    align-items:center;
    gap:8px;
    cursor:pointer;

    span{
      font-size:${({theme})=>theme.fonts.size.sizeG}px;
      font-weight:${({theme})=>theme.fonts.weight};
      color:#fff;
    }
  }
  button:hover{
    background:${({theme})=>theme.colors.blue.normal};
    color:${({theme})=>theme.colors.gray.gray100};

  }

`;
