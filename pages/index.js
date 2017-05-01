import NavBar from '../components/navbar/navbar';
import Head from 'next/head';
import { Home } from './index.styled';
import Intro from '../components/intro/intro';

export default () => (
  <Home>
    <Head>
      <title>Ateev/Labs: Home</title>
      <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet" />
      <style> 
        {`
          body {
            font-family: 'Signika', sans-serif;
            margin: 0px;
          }
          a {
            text-decoration: none;
          }
          a:active, a:visited, a:link {
            color: #1da1f2;
          }
        `}
      </style>
    </Head>
    <NavBar />
    <Intro />
  </Home>
);
