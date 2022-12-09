import classNames from 'classnames/bind'

import Button from '../../components/common/Button'
import Banner from '../../layouts/components/Banner'
import styles from './Home.module.scss'
import Vector from '../../assets/images/Vector.png'
import Article from '../../components/Home/Article'

export default function Home() {
  const cx = classNames.bind(styles)
  return (
    <div className={cx('wrapper')}>
      <Banner larger />
      <Article />
      <div className={cx("button")}>
        <Button to="/login" primary rightIcon={<img src={Vector} alt="Vector_img" />}>Get Start</Button>
      </div>
    </div>
  )
}
