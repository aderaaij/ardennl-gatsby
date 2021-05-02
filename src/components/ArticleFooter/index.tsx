import { FooterStyled, FooterContent } from './styles';

const ArticleFooter: React.FC = () => (
  <FooterStyled>
    <FooterContent>
      <p>
        Did you enjoy this article or would you like to tell me that I&#39;m
        wrong?{' '}
        <a
          href="https://twitter.com/ardennl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on Twitter
        </a>{' '}
        or send me an <a href="mailto:a.de.raaij@gmail.com">e-mail</a>!
      </p>
    </FooterContent>
  </FooterStyled>
);

export default ArticleFooter;
