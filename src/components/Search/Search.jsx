import SearchIcon from "@/svg/SearchIcon";
import styles from "./Search.module.scss"

export default function Search({handleChange}) {
    return (
        <div className={styles.container}>
            <SearchIcon className='stroke-text_grey dark:stroke-text_light'/>
            <input className={styles.container__input} type="text" placeholder='Search' onChange={handleChange}/>
        </div>
    )
}
