import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { ButtonType } from '../../../services/types/ButtonType'

import styles from './Button.module.scss'

export default function Button({ to, primary, secondary, children, rightIcon, submit, small, rounded }: ButtonType) {
    const cx = classNames.bind(styles)
    let TypeBtn: string | React.ComponentType<any> = 'button'
    if (to) {
        TypeBtn = NavLink
    }
    let props = {

    }
    if (submit) {
        props = { ...props, type: "submit" }
    }
    const classes = cx('button', {
        primary,
        secondary,
        small,
        rounded
    })
    return (
        <TypeBtn className={classes} to={to} {...props}>
            {children}
            {rightIcon && <span className={cx("button__icon--right")}>
                {rightIcon}
            </span>}
        </TypeBtn>
    )
}
