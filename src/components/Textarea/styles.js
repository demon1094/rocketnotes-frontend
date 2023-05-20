import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 15rem;
  padding: 1.6rem;
  margin-bottom: .8rem;
  border: none;
  border-radius: 1rem;
  resize: none;
  color: ${({ theme }) => theme.COLORS.WHITE };
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 };

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300 };
  }
`