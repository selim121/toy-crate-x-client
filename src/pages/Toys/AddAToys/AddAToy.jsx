import { useForm } from "react-hook-form";


const AddAToy = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="mt-3 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/02/23/11/22/blank-1217348_1280.jpg')"}}>

            <div className="rounded-xl shadow-2xl hero">
                <div className="card-body mt-12">
                    <form className="space-y-0 md:space-y-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text" placeholder="Seller name" className="input input-bordered" {...register("name", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="email" placeholder="Seller email" className="input input-bordered" {...register("email", { required: true })} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="Product name" className="input input-bordered" {...register("productName", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-category</span>
                                </label>
                                <input type="text" placeholder="Sub-category" className="input input-bordered" {...register("subCategory", { required: true })} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Enter price" className="input input-bordered" {...register("price", { required: true })} />
                            </div>
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input type="text" placeholder="Available quantity" className="input input-bordered" {...register("quantity", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating" className="input input-bordered" {...register("rating", { required: true })} />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL of the toy" className="input input-bordered" {...register("toyPhoto", { required: true })} />
                        </div>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="form-control">
                            <input className="btn border-0 mt-2 bg-[#ab6032f1]" type="submit" value="Add Toy" />
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default AddAToy;