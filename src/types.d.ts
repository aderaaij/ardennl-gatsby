export interface ChildImageSharp {
  resolutions?: {
    tracedSVG: string;
    src?: string;
  };
  fluid?: {
    aspectRatio: number;
    base64: string;
    originalImg: string;
    originalName: string;
    src: string;
    srcSet: string;
    srcSetWebp: string;
    srcWebp: string;
    tracedSVG: string;
  };
  id?: string;
}

export interface Cover {
  childImageSharp: ChildImageSharp;
  id: string;
  relativePath: string;
}

export interface Frontmatter {
  category: string;
  published: boolean;
  tags: [string];
  cover: Cover | null;
  date: string;
  title: string;
}

export interface MarkdownRemarkNode {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: Frontmatter;
  timeToRead: number;
  html?: string;
}

export interface MarkdownRemark {
  node: MarkdownRemarkNode;
}

export interface AllMarkdownRemark {
  edges: [MarkdownRemark];
  totalCount: number;
}

export interface File {
  id: string;
  childImageSharp?: ChildImageSharp;
  name?: string;
  sourceInstanceName?: string;
}
export interface FileEdge {
  node: File;
}
export interface AllFile {
  edges: [FileEdge];
}
