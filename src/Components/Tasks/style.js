import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;
margin: 0 auto;

.contInfo{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 65px;

  .contTarefasCriadas{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p{
      color: ${({theme})=>theme.colors.blue.normal};
      font-size: ${({theme})=>theme.fonts.size.sizeM}px;
    }
    span{
      padding: 2px 8px;
      border-radius: 999px;
      background: ${({theme})=>theme.colors.gray.gray400};
      color:${({theme})=>theme.colors.gray.gray100};
      font-size: ${({theme})=>theme.fonts.size.sizeP}px;
    }
  }
  .contTarefasConcluidas{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p{
      color: ${({theme})=>theme.colors.purple.normal};
      font-size: ${({theme})=>theme.fonts.size.sizeM}px;
    }
    span{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 19px;
      background: ${({theme})=>theme.colors.gray.gray400};
      border-radius: 999px;
      gap: 5px;
    }
  }

}

`;