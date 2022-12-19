import classNames from 'classnames/bind'

import styles from './TimeBanner.module.scss'
import Clock from '../../../assets/images/Group 7.png'

export default function TimeBanner() {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('wrapper')}>
            <div className={cx("clock")}>
                <img src={Clock} alt="clock__img" className={cx("clock__img")} />
            </div>
            <p className={cx("title")}>
                Good Afternoon
            </p>
        </div>
    )
}