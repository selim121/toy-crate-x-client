/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
    const { user, createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setSuccess('');
        
        createUser(data.email, data.password)
            .then(result => {
                setError('');
                setSuccess('User has been created successfully.')
                const user = result.user;
                console.log(user);
                fetch('https://toy-crate-x-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            alert('Users added successfully');
                            // form.reset();
                        }
                    })

                

            })
            .catch(error => {
                setError('Something wrong, try again.');
            })
    };


    return (
        <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG95fGVufDB8fDB8fA%3D%3D&w=1000&q=80')" }}>
            <div className="flex items-center sm:ps-12 py-20 ">
                <div className="rounded-xl w-full max-w-md shadow-2xl bg-[#ce8c8c66]">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" className="input input-bordered" {...register("name", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" className="input input-bordered" {...register("email", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Your password" className="input input-bordered" {...register("password", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Your photo url" className="input input-bordered" {...register("photo", { required: true })} />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="form-control mt-6">
                                <input className="btn border-0 bg-[#ab6032f1]" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account ? <Link to={'/sign-in'} className='text-[#ab6032f1] font-bold'>Sign In</Link></p>
                        <div className="mt-2 text-center">
                            <p className="text-red-700 my-2">{error}</p>
                            <p className="text-green-700 my-2">{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;