import { ArticleContentStyled, ArticleEntryContent } from './styles';
import { MarkdownRemark } from '../../types';

interface Props {
  html: MarkdownRemark['html'];
}

const ArticleContent: React.FC<Props> = ({ html }) => {
  console.log({ html });
  return (
    <ArticleContentStyled>
      <ArticleEntryContent>
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      </ArticleEntryContent>
    </ArticleContentStyled>
  );
};
export default ArticleContent;
