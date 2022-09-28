import styles from './Avatar.module.css';


export function Avatar({hasBorder = true, src}){ /*{hasBorder sera sempre true caso a nao for declarado nos components */

    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
        src={src}  />

    );
}