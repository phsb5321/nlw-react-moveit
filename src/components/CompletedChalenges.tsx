import styles from "../styles/components/CompletedChalenges.module.css"
export function CompletedChalenges() {
    return (
        <div className={styles.completedChalengesContainer}>
            <span>Desafios Completos</span>
            <span>00</span>
        </div>
    )
}