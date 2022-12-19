import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosError } from 'axios'

import { httpRequest } from '../../services/helper/axios'
import { ValidationErrorsType } from '../../services/types/ValidationErrorsType'

export const userRegister: any = createAsyncThunk(
    'user/register',
    async ({ email, password }: any, { rejectWithValue }) => {
        try {
            const res = await httpRequest.post(
                '/tasks',
                { email, password }
            )
            return res.data;
        } catch (error: AxiosError<ValidationErrorsType> | any) {
            return rejectWithValue(error.response.data)
        }

    }
)