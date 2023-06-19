import styled from "styled-components";

import lixeira from "../../../Imgs/lixeiraVermelha.svg";


export const Container = styled.div`
width: 100%;
`;


export const FormTask = styled.form`
width: 100%;
min-height: 72px;
height: auto;
margin: 0 auto;
display: flex;
align-items: flex-start;
justify-content: space-evenly;
background: ${({theme})=>theme.colors.gray.gray400};
border-radius: 8px;
padding: 20px;
margin-bottom: 12px;
box-sizing: border-box;
gap: 12px;

.btn{
min-width: 24px;
width: 24px;
min-height: 24px;
height: 24px;
border: ${props=>props.ativeToggle ===true ? "none" : "1px solid #1e6f9f"};
border-radius: 50%;
cursor: pointer;

button{
  cursor: pointer;
  border: none;
  background: transparent;
  width:100%;
  height: 100%;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
align-items: center;
justify-content: center;
  #checked{
    width: 28px;
    height: 28px;
  }
}
}
.btn:hover{
  background: ${({theme})=>theme.colors.blue.dark};
  transition: 0.2s all;
}

p{
width: 632px;
min-height: 40px;
height: auto;
margin: 0 auto;
color:${({theme})=>theme.colors.gray.gray100};
font-size: ${props => props.ativeToggle === true ? ({theme})=>theme.fonts.size.sizeG : ({theme})=>theme.fonts.size.sizeG} ;
line-height: 19.6px;
font-weight: ${({theme})=>theme.fonts.size.weight};
text-align: left;
text-decoration:${props => props.ativeToggle === true ? "line-through" :  "none"};
color:${props=> props.ativeToggle === true ? ({theme})=>theme.colors.gray.gray300: ({theme})=>theme.colors.gray.gray100};
}

#delete{
  width: 24px;
  height: 24px;
  margin: 0 auto;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
    width: 13px;
    height: 14px;
    }
    
    img:hover{
      content: url(${lixeira});
      transition: .3s all ;
      width: 1000%;
      height: 100%;
    }
  }

`;