import {ImgHTMLAttributes} from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean; /* ?: é pra dizer q nao e obrigatorio */
}
export function Avatar({hasBorder = true, ...props}: AvatarProps){ /*{hasBorder sera sempre true caso a nao for declarado nos components */

    return(
        <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
        {...props}
        />

    );
}

