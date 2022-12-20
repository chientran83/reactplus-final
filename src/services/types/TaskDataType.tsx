import { TaskType } from "./TaskType"

export interface TaskDataType {
    tasks: TaskType[],
    loading: boolean,
    error?: string
}