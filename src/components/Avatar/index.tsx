import Image, { StaticImageData } from "next/image"
import style from "./avatar.module.css"




interface AvatarProps {
  name: string,
  image: string
}



export const Avatar = ({ name, image }: AvatarProps) => {
  return (
    <li className={style.avatar_container}>
      <ul className={style.name_avatar}>
        {name}
      </ul>
      <ul className={style.img_avatar} >
        <Image src={image} alt="Avatar image" width={300} height={300} />
      </ul>
    </li>
  )
}
