import Image from 'next/image'
import styles from './aside.module.css'
import logo from './icon.svg'
export const Aside = () => {
  return (
    <aside className={styles.Aside_desktop}>
      <Image src={logo} alt='Logo site' className={styles.Logo} />
    </aside>
  )
}



