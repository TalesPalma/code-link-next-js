import { CardPost } from "@/components/CardCode";
import style from './page.module.css'
import logger from "@/logger";
import Link from "next/link";

export interface PostPages {
  "first": number,
  "prev": number | null,
  "next": number,
  "last": number,
  "pages": number,
  "items": number,
  data: Post[]
}

export interface Post {
  id: string,
  cover: string,
  title: string,
  slug: string,
  body: string,
  markdow: string,
  author: Author
}

export interface Author {
  id: string,
  name: string,
  username: string,
  avatar: string,
}




async function get_all_post(page: string) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`, { next: { revalidate: 3600 } });

  if (!response.ok) {
    logger.error("Ops ocorreu algum erro na get_all_post() !!!")
  }
  logger.info("Post obtidos com sucesso");
  return response.json();
}


export default async function Home({ searchParams }: { searchParams: { [key: string]: string } }) {
  const currentPage = searchParams?.page || "1"
  const posts: PostPages = await get_all_post(currentPage)
  console.log(posts)
  return (
    <main className={style.page_container}>

      <div className={style.card_container}>
        {posts.data.map((item: Post) => <CardPost key={item.id} post={item} />)}
      </div>
      <div className={style.navigates_container}>
        {posts.prev && <Link href={`/?page=${posts.prev}`} className={style.navigates_link}>Pagina anterior</Link>}
        {posts.next && <Link href={`/?page=${posts.next}`} className={style.navigates_link}>Proxima pagina</Link>}
      </div>

    </main >
  );
}
