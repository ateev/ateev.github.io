import React from 'react';
import { IntroText, IntroWrapper, MyImage } from './intro.styled';

export default () => (
  <IntroWrapper>
    <div className="intro-heading">Hi, I'm Ateev!</div>
    <MyImage />
    <IntroText>
      <p>
        I'm a software engineer who has a passion for creating modern apps.
        I'll help you to make your ideas a reality and make an impact on the world.
        Find me on <a href="https://github.com/ateev">GitHub</a>, <a href="https://twitter.com/ateevchopra">Twitter</a>, or send me an <a href="mailto:ateev@live.com">Email</a>!
      </p>
    </IntroText>
  </IntroWrapper>
);