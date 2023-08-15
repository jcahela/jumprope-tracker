import styles from '@/styles/Home.module.css'

export default function RoundCount({ completedRounds }: {completedRounds: number}) {
  return (
    <h1 className={styles.patopleft1}>
      Rounds Completed: { completedRounds }
    </h1>
  )
}
