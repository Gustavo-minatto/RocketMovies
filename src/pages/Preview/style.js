import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
  "header"
  "content";
  
  
  >main{
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  
  h1{
    font-size: 36px;
    font-weight: 500;
    padding-top: 10px;
   
    svg{
    fill: ${({ theme }) => theme.COLORS.PINK};
    height: 20px;
    width: 20px;
    margin-left: 10px;
  }
}

  img{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 8px;
  }

  >strong{
   font-size: 16px;
   font-weight: 400;
   padding-top: 24px;

   display: flex;
   align-items: center;
   svg{
    margin: 0 8px 0 8px;
   }
  }

  div{
    display: flex;
    align-items: center;
  }


  p{
    font-size: 16px;
    margin-top: 16px;
    font-weight: 400;
    text-align: justify;
  }

`;
