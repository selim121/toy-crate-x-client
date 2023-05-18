import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";

const AllToys = () => {

    const toys = useLoaderData();
    const limit = 20;

    return (
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 bg-[#e2d5d566]">
            {
                toys.slice(0, limit).map(toy => <ToyCard
                    key={toy._id}
                    toy={toy}
                ></ToyCard>)
            }
        </div>
    );
};

export default AllToys;