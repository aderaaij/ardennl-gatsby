import { ArticleContentStyled, ArticleEntryContent } from './styles';
import { MarkdownRemark } from 'src/types';

interface Props {
  html: MarkdownRemark['html'];
}

const ArticleContent: React.FC<Props> = ({ html }) => {
  return (
    <ArticleContentStyled>
      <ArticleEntryContent>
        {html && <div dangerouslySetInnerHTML={{ __html: html }} />}
      </ArticleEntryContent>
    </ArticleContentStyled>
  );
};
export default ArticleContent;
