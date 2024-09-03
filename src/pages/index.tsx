/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "styles/main/Home.module.scss";
import { NextPage } from "next";
import Head from "next/head";

const Main: NextPage<any> = () => {

  return (
    <div className={styles.main}>
      <Head>
        <title>lechixy | react base</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>Welcome my dear 💖</div>
        <div className={styles.subtitle}>Now you can start to create project</div>
      </div>
    </div>
  );
};

export default Main;