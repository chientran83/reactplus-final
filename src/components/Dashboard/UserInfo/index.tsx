import classNames from 'classnames/bind'

import Button from '../../common/Button/index'
import styles from './UserInfo.module.scss'
import Avatar from '../../../assets/images/Ellipse 2.png'

export default function UserInfo() {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('wrapper')}>
            <div className={cx("user-info")}>
                <div className={cx("user-info__image")}>
                    <img src={Avatar} alt="Avatar_img" />
                </div>
                <p className={cx("user-info__name")}>
                    Monica Gamage
                </p>
                <p className={cx("user-info__caption")}>
                    @monicagamage
                </p>
                <div className="user-info__button">
                    <Button secondary>Log out</Button>
                </div>
            </div>
        </div>
    )
}
