import styled from 'styled-components';
import { media } from '../utils/style-utils';

export const Home = styled.div`
  width: 80%;
  margin: 0 auto;

  ${ media.handheld`
    width: 95%;
  `}
`;

export const IntroHeading = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 35px;
  margin-top: 50px;
`;

export const IntroText = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 20px;
`