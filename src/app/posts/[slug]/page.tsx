import { Post } from "@/app/page";
import { CardPost } from "@/components/CardCode";
import logger from "@/logger";
import { remark } from "remark";
import html from 'remark-html';
import style from './page.module.css';

async function getPostBySlug(slug: string): Promise<Post> {
  const url = `http://localhost:3042/posts/?slug=${slug}`;
  const response = await fetch(url)

  if (!response.ok) {
    logger.error("Erro com response do getPostsbySlug");
  }

  logger.info("Post obtidos com sucesso");

  const post: Post[] = await response.json();

  const processedContent = await remark()
    .use(html)
    .process(post[0].markdown);
  post[0].markdown = processedContent.toString();

  return post[0]
}

const PagePost = async ({ params }: any) => {
  const currentpage = params.slug
  const post: Post = await getPostBySlug(currentpage);
  return (
    <div className={style.container}>
      <CardPost post={post} key={0} />
      <div className={style.code} dangerouslySetInnerHTML={{ __html: post.markdown }} />
    </div>
  )
}

export default PagePost;
