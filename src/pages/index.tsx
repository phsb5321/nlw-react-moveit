import { CompletedChalenges } from "../components/CompletedChalenges";
import { CountDown } from "../components/CountDown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import styles from "../styles/pages/Home.module.css"

import Head from "next/head"
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> inicio | moveit </title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChalenges />
          <CountDown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
