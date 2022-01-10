import React from 'react';
import {useForm} from 'react-hook-form';
import {Navigate, useLocation, useNavigate} from 'react-router-dom'
import {useAuth} from '../../hooks/useAuth';

function ConfirmForm() {

    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful, ...formState }, setError } = useForm({mode: 'onChange'});
          
    const {user, loginInWithEmailLink} = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const onSubmit = async (data)=>{
        try {
            await loginInWithEmailLink(data.email, location.href);
            navigate('/dashboard')
        } catch (error) {
            setError('email',{
                type: 'manual',
                message: error.message
            })
        }
    }

    return (
        <>
            {location.search == "" && <Navigate to="/login"/>}
            <h3>Confirm your email to login to Bayan Dashboard</h3>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    {errors.email && <div className="alert alert-danger" role="alert">{errors.email.message}</div>}
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

export default ConfirmForm;