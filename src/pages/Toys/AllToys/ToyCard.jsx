import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const ToyCard = ({ toy }) => {

    const { _id, name, productName, price, quantity, subCategory } = toy;

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();


    const handleViewDetailsClick = () => {
        if (!user?.email){
            localStorage.setItem("redirectTo", `${location.href}`);
            console.log(localStorage.getItem("redirectTo"));
            Swal.fire({
                title: 'Error!',
                text: 'You have to log in first.',
                icon: 'error',
                confirmButtonText: 'Login Now',
            });
            navigate("/sign-in");
        }else {
            navigate(`/details/${_id}`);
        }
    };

    return (
        <>
            <tr>
                <td className="md:w-1/5 font-bold">
                    {productName ? productName : ''}
                </td>
                <td className="md:w-1/5">
                    {price ? price : ''}
                </td>
                <td className="md:w-1/5">{subCategory ? subCategory : ''}</td>
                <td className="md:w-1/5">{quantity ? quantity : ''}</td>
                <td className="md:w-1/5">
                    {name ? name : ''}
                </td>
                <th className="w-1/5 md:w-auto">
                    <button
                        onClick={handleViewDetailsClick}
                        className="bg-[#ab6032f1] hover:bg-[#944e22f1] text-white py-2 px-4 rounded-md"
                    >
                        View Details
                    </button>
                </th>
            </tr>
        </>
    );
};

export default ToyCard;