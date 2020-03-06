import { keyframes } from 'styled-components';


export const FadeIn = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

export const LightSpeedIn = keyframes`

0% {
  -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
  transform: translate3d(100%, 0, 0) skewX(-30deg);
  opacity: 0;
  }
  60% {
  -webkit-transform: skewX(20deg);
  transform: skewX(20deg);
  opacity: 1;
  }
  80% {
  -webkit-transform: skewX(-5deg);
  transform: skewX(-5deg);
  opacity: 1;
  }
  100% {
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  }
`;
