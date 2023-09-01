import styled from 'styled-components';

export const Container = styled.div`
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
  justify-content: space-between;

  >button{
    text-decoration: none;
    display: flex;
    align-items: center;
    
    height: 48px;
    padding: 25px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    >svg{
      margin-right: 8px;
      height: 16px;
      width: 16px;
    }

  }
`;
