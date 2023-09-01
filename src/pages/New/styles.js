import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  >main{
    grid-area: content;
    overflow-y: auto;
  }

  h2{
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY};
    margin: 40px 0 24px 0;
    }

  .tags{
    display: flex;
    height: 85px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
  }
`;

export const Form = styled.form`
  max-width: 1150px;
  margin: 38px auto;

  >header{
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
   
  h1{
    margin-top: 24px;
  }

  a{
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
}
 
  .button{
  display: flex;

  :first-child{
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    margin-right: 40px;
  }
}

  .aa{
    display: flex;

  :first-child{
    margin-right: 40px;
  }
  }
`;