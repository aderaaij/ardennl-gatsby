import styled from '@emotion/styled';

interface TransitionProps {
  opacity: number;
  transform: string;
}

interface TransitionI {
  entering: TransitionProps;
  entered: TransitionProps;
  [key: string]: TransitionProps;
}

export const duration = 300;

export const FadeWrapper = styled.div`
  transition: all ${duration}ms ease-in-out;
  opacity: 0;
`;

export const transitionStyles: TransitionI = {
  entering: { opacity: 0, transform: 'translateY(50%)' },
  entered: { opacity: 1, transform: 'translateY(0%)' },
};
