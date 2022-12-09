import classNames from 'classnames/bind'

import styles from './Article.module.scss'

export default function Article() {
  const cx = classNames.bind(styles)
  return (
    <div className={cx('wrapper')}>
      <div className={cx("content")}>
        <div className={cx("article")}>
          <div className={cx("article__title")}>
            <p className={cx("article__title--small")}>
              Welcome to
            </p>
            <p className={cx("article__title--larger")}>
              OUR REMINDER
            </p>
          </div>
          <p className={cx("article__text")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
          </p>
        </div>
      </div>
    </div>
  )
}
