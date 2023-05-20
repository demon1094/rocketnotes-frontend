import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 2.2rem;
  margin-bottom: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700 };

  > h1 {
    flex: 1;
    text-align: left;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE };
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 2.4rem;
  }
`