import NavBar from '../components/navbar/navbar';
import Head from 'next/head';
import { Home, IntroText, IntroHeading, MyImage } from './index.styled';

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
    <div className="intro-wrapper">

      <IntroHeading>Hi, I'm Ateev!</IntroHeading>
      <MyImage />
      <IntroText>
        <p>
          I'm a software engineer who has a passion for creating modern apps.
          I'll help you to make your ideas a reality and make an impact on the world.
          Find me on <a href="https://github.com/ateev">GitHub</a>, <a href="https://twitter.com/ateevchopra">Twitter</a>, or send me an <a href="mailto:ateev@live.com">Email</a>!
        </p>
      </IntroText>

    </div>
  </Home>
);
