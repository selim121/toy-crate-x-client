import { useState } from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {

    const { _id, name, productName, price, quantity, subCategory, toyPhoto } = toy;

    const [isHovered, setIsHovered] = useState(false);

    // console.log(_id);

    return (
        <>
            <div
                className="bg-white rounded-lg overflow-hidden shadow-md relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    className="w-full h-48 object-cover"
                    src={toyPhoto}
                    alt="Toy Image"
                />
                <div className="p-4">
                    <h3 className="font-bold text-black-800 mb-2">{productName}</h3>
                    <p className="text-gray-600 text-sm mb-2">Sub-category: <span className="text-[#ab6032f1]">{subCategory}</span></p>
                    <p className="text-gray-600 text-sm mb-2">Price: $ <span className="text-[#ab6032f1]">{price}</span></p>
                    <p className="text-gray-600 text-sm mb-2">Posted by: <span className="text-[#ab6032f1]">{name}</span></p>
                    {isHovered && (
                        <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-4 flex justify-between items-center">
                            <Link to={`/details/${_id}`} className="bg-[#ab6032f1] hover:bg-[#944e22f1] text-white py-2 px-4 rounded-md">View Details</Link>
                            <p className="text-gray-600 text-sm mb-0">Available quantity: <span className="text-[#ab6032f1]">{quantity}</span></p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ToyCard;