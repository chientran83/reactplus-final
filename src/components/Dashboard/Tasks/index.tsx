import classNames from 'classnames/bind'

import { TaskType } from '../../../services/types/TaskType'
import Button from '../../common/Button'
import styles from './Tasks.module.scss'
import Spin from '../../common/Spin'
import { TaskDataType } from '../../../services/types/TaskDataType'

export default function Tasks({ taskDatas }: { taskDatas: TaskDataType }) {
    const cx = classNames.bind(styles)

    const handleChangeTaskStatus = () => {
        //update task status
    }

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx("title")}>
                Tasks List
            </h2>
            <Spin spinning={taskDatas.loading}>
                <div className={cx("task")}>
                    <div className={cx("task__header")}>
                        <div className={cx("task__title")}>
                            Tasks List
                        </div>
                        <div className={cx("task__button")}>
                            <Button small rounded>+</Button>
                        </div>
                    </div>
                    <div className={cx("task__list")}>
                        {
                            taskDatas.tasks && taskDatas?.tasks.map((taskItem: TaskType, index: number) => {
                                return <div className={cx("task__group")} key={index}>
                                    <input type="checkbox" className={cx("task__checkbox")} id={taskItem.name} checked={taskItem.completed} onChange={() => handleChangeTaskStatus()} />
                                    <label className={cx("task__label")} htmlFor={taskItem.name}>{taskItem.name}</label>
                                </div>
                            })
                        }
                    </div>
                </div>
            </Spin>
        </div>
    )
}
