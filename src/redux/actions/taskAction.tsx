import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'

import { httpRequest } from '../../services/helper/axios'
import { ValidationErrorsType } from '../../services/types/ValidationErrorsType'

export const taskFetch: any = createAsyncThunk(
    'task/fetch',
    async () => {
        try {
            const res = await httpRequest.get('/tasks');
            return res.data
        } catch (error: AxiosError<ValidationErrorsType> | any) {
            return error;
        }

    }
)