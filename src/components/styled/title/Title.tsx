import * as React from 'react';
import { StyledMainTitle, StyledSubTitle, StyledTitle } from './Styled.title';

interface P {
  mainTitle: string;
  subTitle?: string;
}

const Title: React.FC<P> = ({ mainTitle, subTitle }) => (
  <StyledTitle>
    <StyledMainTitle mainSize="3rem">
      {mainTitle}
    </StyledMainTitle>
    <StyledSubTitle>{subTitle}</StyledSubTitle>
  </StyledTitle>
);
export default Title;
