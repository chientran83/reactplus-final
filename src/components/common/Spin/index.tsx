import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import styles from './Spin.module.scss'

export default function Spin({ spinning, children ,round }: { spinning: boolean, children: JSX.Element ,round?:boolean }) {
    const cx = classNames.bind(styles)
    const classes : any = cx("wrapper",{
        round
    })
    return (
        <div className={classes}>
            {spinning &&
                <div className={cx("spin")}>
                    <FontAwesomeIcon icon={faSpinner} spin size="xl" color="rgba(0, 0, 0, 0.45)" className={cx('spin__icon')} />
                </div>}
            {children}
        </div>
    )
}
