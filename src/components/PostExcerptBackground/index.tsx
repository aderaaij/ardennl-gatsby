import Transition from 'react-transition-group/Transition';
import { FadeWrapper, duration, transitionStyles } from './styles';

const PostExcerptBackground = ({
  children,
  in: inProp,
}: {
  children: any;
  in: boolean;
}) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <FadeWrapper style={{ ...transitionStyles[state] }}>
        {children}
      </FadeWrapper>
    )}
  </Transition>
);
export default PostExcerptBackground;
