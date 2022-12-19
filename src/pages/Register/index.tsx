import classNames from 'classnames/bind'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '../../components/common/Button'
import Banner from '../../layouts/components/Banner'
import styles from './Register.module.scss'
import { userRegister } from '../../redux/actions/userAction'
import { RegisterSchema } from '../../services/yupSchemas/RegisterSchema'
import SuggestDirection from '../../components/common/SuggestDirection';

export default function Register() {
    interface UserDataType {
        email?: string,
        name?: string,
        password?: string,
        passwordConfirm?: string
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cx = classNames.bind(styles)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(RegisterSchema),
        mode: "onBlur",
        reValidateMode: "onBlur",
        shouldFocusError: true
    })

    const { loading } = useSelector(
        (state: any) => state.user
    )

    const submitForm: SubmitHandler<UserDataType> = async (data) => {
        if (loading) {
            return
        }
        if (data.password !== data.passwordConfirm) {
            alert("Password confirm not correct !");
            return
        }
        await dispatch(userRegister(data))
        navigate("/login")
        
    }

    return (
        <div className={cx('wrapper')}>
            <Banner small />
            <div className={cx("content")}>
                <div className={cx("article")}>
                    <div className={cx("article__title")}>
                        OUR REMINDER
                    </div>
                    <p className={cx("article__text")}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
                    </p>
                </div>
            </div>
            <form className={cx("register-form")} onSubmit={handleSubmit(submitForm)}>
                <div className={cx("register-form__group", { error: !!errors.name })}>
                    <input type="text" className={cx("register-form__input")} placeholder="Enter your full name" {...register('name')} />
                    <p className={cx("register-form__message")}>
                        {errors?.name && `${errors?.name.message}`}
                    </p>
                </div>
                <div className={cx("register-form__group", { error: !!errors.email })}>
                    <input type="text" className={cx("register-form__input")} placeholder="Enter your email" {...register('email')} />
                    <p className={cx("register-form__message")}>
                        {errors?.email && `${errors?.email.message}`}
                    </p>
                </div>
                <div className={cx("register-form__group", { error: !!errors.password })}>
                    <input type="password" className={cx("register-form__input")} placeholder="Enter password" {...register('password')} />
                    <p className={cx("register-form__message")}>
                        {errors?.password && `${errors?.password.message}`}
                    </p>
                </div>
                <div className={cx("register-form__group")}>
                    <input type="password" className={cx("register-form__input")} placeholder="Confirm Password" {...register('passwordConfirm')} />
                    <p className={cx("register-form__message")}>
                        {errors?.password && `${errors?.password.message}`}
                    </p>
                </div>
                <Button primary submit disable>{loading ? "loading..." : "Register"}</Button>
            </form>
            <SuggestDirection to='/login' question='Already have an account ?'>Sign In</SuggestDirection>
        </div>
    )
}
