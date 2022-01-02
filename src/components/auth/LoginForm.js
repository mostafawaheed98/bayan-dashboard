import React from 'react';
import {useForm} from 'react-hook-form';
import {useAuth} from '../../hooks/useAuth';

function LoginForm() {

    const { register, handleSubmit, formState: { errors, ...formState }, setError } = useForm();
          
    const {sendSignInLinkToEmail} = useAuth();

    const onSubmit = async (data)=>{
        try {
            await sendSignInLinkToEmail(data.email);
        } catch (error) {
            setError('email',{
                type: 'manual',
                message: error.message
            })
        }
    }

    return (
        <>
            <h3>Login to Bayan Dashboard</h3>
            <hr/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" {...register("email", { required: true })} className="form-control" aria-describedby="emailError"/>
                    {errors.email && <div className='text-danger mt-2 fw-bold'>Email is required!</div>}
                    
                </div>
                <button type="submit" className="btn btn-primary">
                    {formState.isSubmitting && <div className="spinner-border spinner-border-sm" role="status"></div>} Submit
                </button>
            </form>
        </>
    );
}

export default LoginForm;