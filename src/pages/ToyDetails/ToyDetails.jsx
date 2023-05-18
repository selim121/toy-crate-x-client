import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {

    const toy = useLoaderData();
    const { name, email, productName, details, price, rating, quantity, subCategory, toyPhoto } = toy;
    console.log(toy);

    return (
        <div className="mt-3">
            <p>{productName}</p>
        </div>
    );
};

export default ToyDetails;