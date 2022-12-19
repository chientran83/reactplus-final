import { Outlet } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './DefaultLayout.module.scss'
import Header from '../components/Header'

export default function DefaultLayout() {
    const cx = classNames.bind(styles)
    return (
        <div className={cx("container")}>
            <Header />
            <Outlet />
        </div>
    )
}
