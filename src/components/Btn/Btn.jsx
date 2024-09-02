import styles from "./Btn.module.scss"

export default function Btn({svg: SvgIcon, text, onClick}) {
    return(
        <button className={styles.btn} onClick={onClick}>
            {
                SvgIcon && <SvgIcon/>
            }
            {text}
        </button>
    )
}