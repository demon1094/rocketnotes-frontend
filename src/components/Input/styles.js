import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };
  color: ${({ theme }) => theme.COLORS.GRAY_300 };
  margin-bottom: .8rem;
  border-radius: 10px;

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    border: 0;
    color: ${({ theme }) => theme.COLORS.WHITE };
    background: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300 };
    }

  }

  > svg {
    margin-left: 1.6rem;
  }
`