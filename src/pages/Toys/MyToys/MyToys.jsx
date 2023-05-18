import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import MyToyTable from "./MyToyTable";


const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-crate-x-server.vercel.app/my-toys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [user?.email])


    return (
        <div className="mt-3 overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th className="text-[#ab6032f1]">Products</th>
                        <th className="text-[#ab6032f1]">Description</th>
                        <th className="text-[#ab6032f1]">Category</th>
                        <th className="text-[#ab6032f1]">Rating</th>
                        <th className="text-[#ab6032f1]">Quantity</th>
                        <th className="text-[#ab6032f1]">Seller</th>
                        <th className="text-[#ab6032f1]">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <MyToyTable
                            key={toy._id}
                            toy={toy}
                        ></MyToyTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;