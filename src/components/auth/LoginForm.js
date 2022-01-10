import React from 'react';
import {useForm} from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth';
import {Helmet} from 'react-helmet';

function LoginForm() {

    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful }, setError } = useForm({mode: 'onChange'});
          
    const {user, sendLoginInLinkToUserEmail} = useAuth();

    const onSubmit = async (data)=>{
        try {
            await sendLoginInLinkToUserEmail(data.email);
        } catch (error) {
            setError('email',{
                type: 'manual',
                message: error.message
            })
        }
    }

    return (
        <>
            {user && <Navigate to="/dashboard"/>}
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h3>Login to Bayan Dashboard</h3>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    {errors.email && <div className="alert alert-danger" role="alert">{errors.email.message}</div>}
                    {isSubmitSuccessful && <div className="alert alert-success" role="alert">Check your email to complete login!</div>}
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" {...register("email", { required: "Email is required!" })} className="form-control" aria-describedby="emailError"/>
                </div>
                <button type="submit" className="btn btn-primary">
                    {isSubmitting && <div className="spinner-border spinner-border-sm" role="status"></div>} Submit
                </button>
            </form>
        </>
    );
}

export default LoginForm;