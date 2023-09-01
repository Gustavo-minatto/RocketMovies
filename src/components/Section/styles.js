import styled from 'styled-components';

export const Container = styled.section`
   margin: 40px 8px 0 0;
   width: fit-content;

   >h2{
    background-color:  ${({ theme }) => theme.COLORS.PINK_100};

    padding: 8px 16px;
    margin-bottom: 28px;
    border-radius: 8px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 12px;
    font-weight: 400;
   }
`;
