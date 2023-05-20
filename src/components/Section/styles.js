import styled from 'styled-components'

export const Container = styled.section`
  margin: 2.8rem 0;

  > h2 {
    font-size: 2rem;
    font-weight: 400;
    padding-bottom: 1rem;
    margin-bottom: 2.8rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700 };
    color: ${({ theme }) => theme.COLORS.GRAY_100 };
  }
`