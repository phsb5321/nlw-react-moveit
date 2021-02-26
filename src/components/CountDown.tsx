import React, { useState, useEffect } from "react"
import styles from "../styles/components/CountDown.module.css"

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false);

    const minutos = Math.floor(time / 60);
    const segundos = time % 60;

    const [minuteLeft, minuteRight] = String(minutos)
        .padStart(2, "0").split("");


    const [secondLeft, secondRight] = String(segundos)
        .padStart(2, "0").split("");

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countDownTimeout)
        setIsActive(false);
        setTime(0.05 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countDownContainer} >
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    type="button"
                    className={styles.countDownButton}
                    onClick={e => resetCountDown()}>
                    Ciclo Terminou
                        <img
                            src="icons/check_circle.svg"
                            alt="check_circle"/>
                </button >
            ) : (
                    <React.Fragment>
                        { isActive ? (
                            <button
                                type="button"
                                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                onClick={e => resetCountDown()}>
                                Abandonar Ciclo
                            </button>
                        ) : (
                                <button
                                    type="button"
                                    className={styles.countDownButton}
                                    onClick={e => startCountDown()} >
                                    Iniciar Ciclo
                                </button>
                            )
                        }
                    </React.Fragment>
                )
            }
        </div>
    )
}








