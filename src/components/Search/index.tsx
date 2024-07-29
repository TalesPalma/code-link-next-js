import styles from './Search.module.css'

export const Search = () => {
  return (
    <form className={styles.container} action={'/'}>
      <input
        type="text"
        className={styles.searchInput}
        name='q'
        placeholder='Digite o que voce quer pesquisar...'
      />
      <button className={styles.searchButton}>Search</button>
    </form>
  );
}
