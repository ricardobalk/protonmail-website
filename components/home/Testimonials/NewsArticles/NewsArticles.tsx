import Image from "next/image";
import Link from "next/link";
import { ArticleProperties } from "./NewsArticles.interfaces";
import styles from "./NewsArticles.module.scss";
import articlesData from "./NewsArticles.json";

const data: ArticleProperties[] = articlesData;

export const NewsArticles = () => {
  return (
    <div className={styles.container}>
      {data.map((article, index) => (
        <Link key={index} href={article.link}>
          <a className={styles.article} title={`${article.author}: ${article.title}`}>
            <Image
              src={article.image.location}
              width={article.image.width}
              height={article.image.height}
              alt={`${article.author}: ${article.title}`}
              className={styles.article}
            />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NewsArticles;
