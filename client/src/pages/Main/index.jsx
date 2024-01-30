import Header from "components/Header";
import List from "components/List";
import styles from "pages/Main/main.module.css";

function Main() {
  return (
    <main className={styles.container}>
      <Header />
      <List />
    </main>
  );
}

export default Main;
