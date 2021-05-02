import Link from 'gatsby-link';
import { TagListWrap } from './styles';
import { MarkdownRemarkFrontmatter } from 'src/types';

interface Props {
  tags: MarkdownRemarkFrontmatter['tags'];
}

const TagList: React.FC<Props> = ({ tags }) => {
  return (
    <TagListWrap>
      <span>Tagged:</span>
      <ul>
        {tags &&
          tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
      </ul>
    </TagListWrap>
  );
};

export default TagList;
