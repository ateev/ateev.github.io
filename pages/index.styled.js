import styled from 'styled-components';
import { media } from '../utils/style-utils';

export const Home = styled.div`
  width: 80%;
  margin: 0 auto;

  ${ media.handheld`
    width: 95%;
  `}
`;

