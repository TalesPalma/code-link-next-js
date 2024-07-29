import { CardPost } from "@/components/CardCode";
import style from './page.module.css';
import logger from "@/logger";
import Link from "next/link";
import db from "../../prisma/db";
import { Prisma } from "@prisma/client";

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

interface SearchParams {
  page?: string
  q?: string;
}

async function get_all_post(page: string, searchTerm?: string) {
  try {

    const where: Prisma.PostWhereInput = {}
    if (searchTerm) {
      where.title = {
        contains: searchTerm,
        mode: 'insensitive',
      };
    }

    const perPage = 6
    const totalPage = await db.post.count({ where })
    const finalPage = Math.ceil(totalPage / perPage)
    const pageN = Number(page);
    const skip = (pageN - 1) * perPage
    const prev = pageN > 1 ? pageN - 1 : null
    const next = pageN < finalPage ? pageN + 1 : null

    const posts = await db.post.findMany({
      take: perPage,
      skip: skip,
      where,
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


export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const currentPage = searchParams?.page || "1"
  const searchTerm = searchParams?.q
  const posts = await get_all_post(currentPage, searchTerm)
  return (
    <main className={style.page_container}>

      <div className={style.card_container}>
        {posts.data.map((item: Post) => <CardPost post={item} />)}
      </div>
      <div className={style.navigates_container}>
        {posts.prev && <Link href={{ pathname: "/", query: { page: posts.prev } }} className={style.navigates_link}>ANTERIOR</Link>}
        {posts.next && <Link href={{ pathname: "/", query: { page: posts.next } }} className={style.navigates_link}>PROXIMA</Link>}
      </div>

    </main >
  );
}
