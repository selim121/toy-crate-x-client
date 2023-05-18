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
                        <th>Products</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Seller</th>
                        <th>Edit</th>
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