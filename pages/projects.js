import NavBar from '../components/navbar/navbar';
import Head from 'next/head';
import { ProjectsWrapper } from './projects.styled';

export default () => (
  <div>
    <Head>
      <title>Ateev/Labs: Projects</title>
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
    <ProjectsWrapper>
      Coming Soon.
    </ProjectsWrapper>
  </div>
);
