import styled from 'styled-components';
import { media } from '../utils/style-utils';

export const Home = styled.div`
  width: 80%;
  margin: 0 auto;

  ${ media.handheld`
    width: 95%;
  `}
`;

export const IntroWrapper = styled.div`
  padding: 20px;
  margin-top: 15%;
  .intro-heading {
    text-align: center;
    font-size: 35px;
  }
`;

export const MyImage = styled.div`
  background-image: url('/static/mine.png');
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 45px auto;
  background-position: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

export const IntroText = styled.div`
  text-align: center;
  font-size: 20px;
`;
