import { SignInButton } from "../SignInButton";
import { ActiveLink } from "../ActiveLink";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink
            activeClassName={styles.active}
            href={`${process.env.NEXT_PUBLIC_APP_URL}/`}
          >
            <a>Home</a>
          </ActiveLink>
          <ActiveLink
            activeClassName={styles.active}
            href={`${process.env.NEXT_PUBLIC_APP_URL}/posts`}
          >
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
