import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media only screen and (max-width: 600px) {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media only screen and (max-width: 970px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
