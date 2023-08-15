import styles from '@/styles/Home.module.css';

interface TimerProps {
  type: string;
  seconds: number
}

export default function Timer({ type, seconds }: TimerProps) {
  return (
    <div className={`${styles.flexColumn}`}>
      <h1>{ type }</h1>
      <div className={styles.large}>{ seconds }</div>
    </div>
  )
}
