import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";


const UpdateToy = ({location}) => {
    // const [formData, setFormData] = useState(product);
    const { product = {} } = location?.state || {};
  console.log(product);
    useTitle('ToyCrateX - Update Toy');
    // const [profile, setProfile] = useState([]);

    // const {name, email, productName, details, price, quantity, rating, subCategory, toyPhoto } = product;
    const { register, handleSubmit,  formState: { errors } } = useForm();


    // useEffect(()=>{
    //     setFormData(product);
    // },[product])


    // useEffect(()=>{
    //     if(formData){
    //         reset({
    //             name: formData.name,
    //             email: formData.email,
    //             productName: "Red",
    //         })
    //         console.log(formData.productName);
    //     }
    // },[formData])


    // console.log(product);

    const handleUpdate = (data) => {
        // fetch(``)
        console.log(data);

    }

    return (
        <>
            {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                        <div className="rounded-xl shadow-2xl hero">
                <div className="card-body mt-12"> */}
                    <form onSubmit={handleSubmit(handleUpdate)}>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="form-control me-4">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input type="text"  className="input input-bordered" {...register("name", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="email"  className="input input-bordered" {...register("email", { required: true })} />
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
                            <input type="url" placeholder="Photo URL of the toy" className="input input-bordered" {...register("toyPhoto", { required: true })} />
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
            {/* //     </div>
            // </div>
                        

            //         </div>
            //     </div> */}
        </>
    );
};

export default UpdateToy;