import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

import { getAllFilesMetadata } from "../../lib/mdx";

export default function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog JAMStack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mi Blog JAMStack</h1>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className={styles.card}
            >
              <a>
                <h2>{post.title} &rarr;</h2>
                <p>{post.date}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();
  return {
    props: { posts },
  };
}
