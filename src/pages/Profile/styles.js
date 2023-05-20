import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;
    display: flex;
    align-items: center;
    padding: 0 12.4rem;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900 };

    button {
      background: none;
      border: none;
    }

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100 };
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 18.6rem;
  height: 18.6rem;
  margin: -12.4rem auto 3.2rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: .7rem;
    right: .7rem;
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ theme }) => theme.COLORS.ORANGE };

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800 };
    }
  }
`