import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
`

export const Form = styled.form`
  max-width: 55rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.6rem;

    h1 {
      font-size: 3.6rem;
      font-weight: 400;
    }

    a {
      font-size: 2rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`