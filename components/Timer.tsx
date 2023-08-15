import styles from '@/styles/Home.module.css';

interface TimerProps {
  type: string;
  seconds: number;
  round: number | undefined;
}

export default function Timer({ type, seconds, round }: TimerProps) {
  return (
    <div className={`${styles.flexColumn}`}>
      <h1>{ type } { round }</h1>
      <div className={styles.large}>{ seconds }</div>
    </div>
  )
}
