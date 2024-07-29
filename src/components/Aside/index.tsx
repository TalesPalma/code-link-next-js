import Image from 'next/image'
import styles from './aside.module.css'
import logo from './icon.svg'
import Link from 'next/link'
export const Aside = () => {
  return (
    <aside className={styles.Aside_desktop}>
      <Link href='/?q='><Image src={logo} alt='Logo site' className={styles.Logo} /></Link>
    </aside>
  )
}



