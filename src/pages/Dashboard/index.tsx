import { useEffect } from 'react'
import classNames from 'classnames/bind'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Dashboard.module.scss'
import UserInfo from '../../components/Dashboard/UserInfo'
import TimeBanner from '../../components/Dashboard/TimeBanner'
import Tasks from '../../components/Dashboard/Tasks'
import { taskFetch } from '../../redux/actions/taskAction'
import { TaskType } from '../../services/types/TaskType'

export default function Dashboard() {
    const cx = classNames.bind(styles)
    const dispatch = useDispatch()

    interface TaskDataType {
        tasks: TaskType[]
    }

    const taskDatas: TaskDataType = useSelector(
        (state: any) => {
            return state.task
        }
    )

    useEffect(() => {
        dispatch(taskFetch())
    }, [])
    
    return (
        <div className={cx('wrapper')}>
            <UserInfo />
            <div className={cx("content")}>
                <TimeBanner />
                <Tasks taskDatas={taskDatas} />
            </div>
        </div>
    )
}
