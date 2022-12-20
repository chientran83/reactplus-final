import classNames from 'classnames/bind'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../components/common/Button'
import Banner from '../../layouts/components/Banner'
import styles from './Login.module.scss'
import { LoginSchema } from '../../services/yupSchemas/LoginSchema'
import SuggestDirection from '../../components/common/SuggestDirection';
import { UserType } from '../../services/types/UserType';
import Spin from '../../components/common/Spin';

export default function Login() {
    const cx = classNames.bind(styles)
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(LoginSchema),
        mode: "onBlur",
        reValidateMode: "onBlur",
        shouldFocusError: true
    })

    const submitForm: SubmitHandler<UserType> = (data) => {
        navigate("/dashboard")
    }

    return (
        <div className={cx('wrapper')}>
            <Banner small />
            <div className={cx("content")}>
                <div className={cx("article")}>
                    <div className={cx("article__title")}>
                        <p className={cx("article__title--small")}>
                            Welcome back to
                        </p>
                        <p className={cx("article__title--larger")}>
                            OUR REMINDER
                        </p>
                    </div>
                </div>
            </div>
            <form className={cx("login-form")} onSubmit={handleSubmit(submitForm)}>
                <div className={cx("login-form__group", { error: !!errors.email })}>
                    <input type="text" className={cx("login-form__input")} placeholder="Enter your email" {...register('email')} />
                    <p className={cx("login-form__message")}>
                        {errors?.email && `${errors?.email.message}`}
                    </p>
                </div>
                <div className={cx("login-form__group", { error: !!errors.password })}>
                    <input type="text" className={cx("login-form__input")} placeholder="Enter password" {...register('password')} />
                    <p className={cx("login-form__message")}>
                        {errors?.password && `${errors?.password.message}`}
                    </p>
                </div>
                <Spin spinning={false} round>
                    <Button primary submit>Sign In</Button>
                </Spin>
            </form>
            <SuggestDirection to='/register' question='Don’t have an account ?'>Sign Up</SuggestDirection>
        </div>
    )
}
