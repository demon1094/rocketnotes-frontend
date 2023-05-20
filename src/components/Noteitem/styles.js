import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .8rem;
  padding-right: 1.6rem;
  border-radius: 1rem;
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.COLORS.GRAY_300 }` : "none" };
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900 };
  color: ${({ theme }) => theme.COLORS.GRAY_300 };

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED };
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE };
  }

  > input {
    width: 100%;
    height: 5.6rem;
    padding: 1.2rem;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE };
    background: transparent;

    &::placeholder {
      ${({ theme }) => theme.COLORS.GRAY_300 };
    }
  }
`