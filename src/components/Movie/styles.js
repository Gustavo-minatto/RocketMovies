import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  max-height: 270px;
  margin: 0 auto 24px;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  padding: 32px;
  border-radius: 16px;
  cursor: pointer;

  .description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
  li{
      list-style: none;
      display: fle;
      }

  h1{
    font-size: 24px;
    font-weight: 700;
  }
   
  svg{
    margin: 8px 0 15px 0;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p{
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-size: 16px;
    font-weight: 400;
  }

  .section{
    display: flex;
    align-items: center;
  }
`