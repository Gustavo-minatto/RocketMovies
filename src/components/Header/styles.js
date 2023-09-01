import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  color: ${({ theme }) => theme.COLORS.PINK};
  
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  padding: 24px 123px;
  
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  
  >div{
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
  }

  >img{
    height: 56px;
    height: 56px;
    border-radius: 50%;
  }

  strong{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  span{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY};
    display: flex;
    justify-content: flex-end;
  }
`;

export const Input = styled.input`
  width: 57%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY};
  
  padding-left: 15px;
  margin: 0 64px 10px;
  border-radius: 10px;
  border: none;
`;