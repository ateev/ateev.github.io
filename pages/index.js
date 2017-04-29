import NavBar from '../components/navbar/navbar';
import Head from 'next/head';
import {Home} from './index.styled';

export default () => (
  <Home>
    <Head>
      <title>Ateev/Labs</title>
      <link href="https://fonts.googleapis.com/css?family=Signika" rel="stylesheet" />
      <style> 
        {`
          body {
            font-family: 'Signika', sans-serif;
            margin: 0px;
          }
        `}
      </style>
    </Head>
    <NavBar />
    <div>Welcome to next.js!</div>
  </Home>
);
