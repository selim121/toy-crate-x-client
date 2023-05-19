
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";


const UpdateToy = () => {

    useTitle('ToyCrateX - Update Toy')

    const { id } = useParams();
    const [profile, setProfile] = useState('');

    useEffect(() => {
        fetch(`https://toy-crate-x-server.vercel.app/toy/update/${id}`)
            .then(res => res.json())
            .then(data => {
                setProfile(data);
            })
    }, [id])

    const {name, email, productName, rating, subCategory, toyPhoto} = profile;



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        // fetch(`https://toy-crate-x-server.vercel.app/toy/update/${id}`, {
        //     method: "PUT",
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(data),
        // })
        // .then(res => res.json())
        // .then(result => {
        //     console.log(result);
        // })
        console.log(data);
    }

    return (
        <div className="mt-3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/4779576.jpg')" }}>
            <div className="rounded-xl shadow-2xl hero bg-[#e2d5d566]">

                <div className="card-body py-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input disabled type="text" defaultValue={name} className="input input-bordered" {...register("name", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input disabled type="email" defaultValue={email} className="input input-bordered" {...register("email", { required: true })} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input disabled type="text" defaultValue={productName} className="input input-bordered" {...register("productName", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <input disabled type="text" defaultValue={subCategory} className="input input-bordered" {...register("subCategory", { required: true })} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Update price" className="input input-bordered" {...register("price", { required: true })} />
                            </div>
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" placeholder="Update quantity" className="input input-bordered" {...register("quantity", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input disabled type="text" defaultValue={rating} className="input input-bordered" {...register("rating", { required: true })} />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Photo URL</span>
                            </label>
                            <input disabled type="url" defaultValue={toyPhoto} className="input input-bordered" {...register("toyPhoto", { required: true })} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details Description</span>
                            </label>
                            <textarea className="input input-bordered" {...register("details")} />
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="form-control">
                            <input className="btn border-0 mt-2 bg-[#ab6032f1]" type="submit" value="Update Toy" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;