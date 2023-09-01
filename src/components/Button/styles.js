import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  
  font-weight: 500;
  border: 0;
  margin-top: 16px;
  height: 48px;
  border-radius: 10px;
`;