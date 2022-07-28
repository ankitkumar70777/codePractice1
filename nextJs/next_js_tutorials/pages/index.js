import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1>pre-rendering</h1>
      <Link href='/userList'>
        <a>navigate to userList</a>
      </Link>
    </>
  );
}
