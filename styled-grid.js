import styled from 'styled-components';
import { media } from './utils/style-utils';

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  ${ media.handheld`
    padding-right: 0px;
    padding-left: 0px; 
  `}
`;
