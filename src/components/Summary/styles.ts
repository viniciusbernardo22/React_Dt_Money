
import styled from 'styled-components';

export const Container = styled.h1`
display:grid;
grid-template-columns: repeat(3,1fr);
gap: 2rem;
margin-top: -10rem;

div{
  background: var(--shape);
  padding:1.5rem 2rem;
  border-radius: 0.25rem;
  color:var(--text-title);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p{
    font-size: 1rem;
  }
  strong{
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight:500;
    line-height: 3rem;
  }
  &.highlight-background{
    background: var(--green);
    color: #FFF;
  }
}
`
