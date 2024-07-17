import { CardPost } from "@/components/CardCode";
import style from './page.module.css';
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/db";

export interface PostPages {
  "prev": number | null,
  "next": number,
  data: Post[]
}

export interface Post {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  author?: User; // opcional se necessário}
}

export interface User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

async function get_all_post(page: string) {
  try {
    const perPage = 6
    const finalPage = Math.ceil((await db.post.count()) / perPage)
    const pageN = Number(page);
    const skip = (pageN - 1) * perPage
    const prev = pageN > 1 ? pageN - 1 : null
    const next = pageN < finalPage ? pageN + 1 : null

    const posts = await db.post.findMany({
      take: perPage,
      skip: skip,
      orderBy: {
        createdAt: "desc"
      },
      include: {
        author: true,
      },
    });
    return { data: posts, prev: prev, next: next }
  } catch (error) {
    logger.error(`Erro ao buscas posts ${error}`);
    return { data: [], prev: null, next: null }
  }
}


export default async function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  const currentPage = searchParams?.page || "1"
  const posts = await get_all_post(currentPage)
  return (
    <main className={style.page_container}>

      <div className={style.card_container}>
        {posts.data.map((item: Post) => <CardPost post={item} />)}
      </div>
      <div className={style.navigates_container}>
        {posts.prev && <Link href={`/?page=${posts.prev}`} className={style.navigates_link}>ANTERIOR</Link>}
        {posts.next && <Link href={`/?page=${posts.next}`} className={style.navigates_link}>PROXIMA</Link>}
      </div>

    </main >
  );
}
