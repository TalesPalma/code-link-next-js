'use server'

import { Post } from "@prisma/client";
import db from "../../prisma/db";

export async function incrementThumsUp(post: Post) {

  await db.post.update({
    where: {
      id: post.id
    },
    data: {
      likes: {
        increment: 1
      }
    }
  })



}
