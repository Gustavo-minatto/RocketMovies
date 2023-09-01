import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  
  background-color: ${({ theme, isNew}) => isNew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};

  margin: 10px 10px;
  border-radius: 10px;
  padding-right: 16px;
  height: 56px;
  
  >button{
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  >input{
     
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;