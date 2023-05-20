/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {

    const toy = useLoaderData();
    const { _id, name, email, productName, details, price, quantity, rating, subCategory, toyPhoto } = toy;


    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleUpdate = (data,e) => {
        fetch(`https://toy-crate-x-server.vercel.app/toy/update/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            alert('Toy update successfully');
                            e.target.reset();
                        }
                    })
                    .catch (error => {
                        console.log(error());
                        
                    })
    }

    return (
        <>
            <div className="mt-3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/4779576.jpg')" }}>

                <div className="rounded-xl shadow-2xl hero">
                    <div className="card-body mt-12">
                        <form onSubmit={handleSubmit(handleUpdate)}>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input defaultValue={name} type="text" className="input input-bordered" {...register("name", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input defaultValue={email} type="email" className="input input-bordered" {...register("email", { required: true })} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input defaultValue={productName} type="text" placeholder="Product name" className="input input-bordered" {...register("productName", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-category</span>
                                    </label>
                                    <input defaultValue={subCategory} type="text" placeholder="Sub-category" className="input input-bordered" {...register("subCategory", { required: true })} />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input defaultValue={price} type="text" placeholder="Enter price" className="input input-bordered" {...register("price", { required: true })} />
                                </div>
                                <div className="form-control me-4">
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input defaultValue={quantity} type="text" placeholder="Available quantity" className="input input-bordered" {...register("quantity", { required: true })} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input defaultValue={rating} type="text" placeholder="Rating" className="input input-bordered" {...register("rating", { required: true })} />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Photo URL</span>
                                </label>
                                <input defaultValue={toyPhoto} type="url" placeholder="Photo URL of the toy" className="input input-bordered" {...register("toyPhoto", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details Description</span>
                                </label>
                                <textarea defaultValue={details} className="input input-bordered" {...register("details")} />
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <div className="form-control">
                                <input className="btn border-0 mt-2 bg-[#ab6032f1]" type="submit" value="Update Toy" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateToy;