import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { SuggestDirectionType } from '../../../services/types/SuggestDirectionType'

import styles from './SuggestDirection.module.scss'

export default function SuggestDirection({ to, question, children }: SuggestDirectionType) {
    const cx = classNames.bind(styles)
    return (
        <div className={cx("direction")}>
            <p className={cx("direction__text")}>
                {question}
            </p>
            <NavLink to={to}>{children}</NavLink>
        </div>
    )
}
