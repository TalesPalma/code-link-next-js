import { Post } from "@/app/page";
import { CardPost } from "@/components/CardCode";
import logger from "@/logger";
import { remark } from "remark";
import html from 'remark-html';
import style from './page.module.css';
import db from "../../../../prisma/db";

async function getPostBySlug(slug: string): Promise<Post> {
  try {
    const post = await db.post.findFirst({
      where: {
        slug
      },
      include: {
        author: true
      }
    });

    if (!post) {
      logger.error('Post not found');
      throw new Error('Post not found');
    }

    const processedContent = await remark()
      .use(html)
      .process(post.markdown);
    post.markdown = processedContent.toString();

    return post
  } catch (e: Error | any) {
    logger.error("Failed to get post" + e.message);
    throw new Error(e.message);
  }
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
