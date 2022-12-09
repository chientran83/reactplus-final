import classNames from 'classnames/bind'

import styles from './Banner.module.scss'
import Done from '../../../assets/images/Done.png'

export default function Banner({ larger, small }: { larger?: boolean, small?: boolean }) {
    const cx = classNames.bind(styles)
    const classes = cx('banner', {
        larger,
        small
    })
    return (
        <div className={classes}>
            <img src={Done} alt="banner_img" className={cx("banner__img")} />
        </div>
    )
}