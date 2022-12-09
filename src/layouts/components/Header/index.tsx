import classNames from 'classnames/bind'

import styles from './Header.module.scss'
import Battery from '../../../assets/images/Battery.png'
import MobileSignal from '../../../assets/images/Mobile Signal.png'
import Wifi from '../../../assets/images/Wifi.png'

export default function Header() {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header__left')}>
                    9:41
                </div>
                <div className={cx('header__right')}>
                    <img src={MobileSignal} alt="MobileSignal_img" className={cx("header__item")} />
                    <img src={Wifi} alt="Wifi_img" className={cx("header__item")} />
                    <img src={Battery} alt="Battery_img" className={cx("header__item")} />
                </div>
            </div>
        </div>
    )
}
