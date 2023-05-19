
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import CategoryToyCard from './CategoryToyCard';

const ShopByCategory = () => {

    const autoSLider = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const category = ['Regular', 'Police', 'Jeep', 'Sports'];
    const [tabIndex, setTabIndex] = useState(0);
    const [subCategory, setSubCategory] = useState('');
    const [subCategoryToys, setSubCategoryToys] = useState([]);
    // console.log(subCategory);

    useEffect(() => {
        fetch(`https://toy-crate-x-server.vercel.app/toy/${subCategory}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSubCategoryToys(data);
            })
    }, [subCategory])


    return (
        <div className='py-12 bg-[#e2d5d566]'>
            <h1 className="pb-4 text-center text-5xl font-bold text-[#ab6032f1]">
                Shop By Category
            </h1>

            <div>
                <Slider {...autoSLider} className='py-12'>
                    <div>
                        <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/9yyFJHx/2.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/PFy3YWy/4.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/wK1Jt4f/7.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/yks0PHW/6.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/k8h5QHn/3.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/1Z9tDrC/1.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/zxDw9D5/1.jpg" alt="" />
                    </div>
                    <div>
                        <img className='h-52 w-60 rounded-lg shadow-md hover:opacity-50' src="https://i.ibb.co/RTgpk0Z/3.jpg" alt="" />
                    </div>
                </Slider>
            </div>

            <div className="py-12">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => {
                    setTabIndex(index);
                    setSubCategory(category[index]);
                }}>
                    <TabList>
                        <Tab><span className='font-bold text-[#ab6032f1]'>Regular Car</span></Tab>
                        <Tab><span className='font-bold text-[#ab6032f1]'>Police Car</span></Tab>
                        <Tab><span className='font-bold text-[#ab6032f1]'>Jeep</span></Tab>
                        <Tab><span className='font-bold text-[#ab6032f1]'>Sports Car</span></Tab>
                    </TabList>

                    <TabPanel>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 bg-[#e2d5d566]">
                            {
                                subCategoryToys.map(subCategoryToy => <CategoryToyCard
                                    key={subCategoryToy._id}
                                    subCategoryToy={subCategoryToy}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 bg-[#e2d5d566]">
                            {
                                subCategoryToys.map(subCategoryToy => <CategoryToyCard
                                    key={subCategoryToy._id}
                                    subCategoryToy={subCategoryToy}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 bg-[#e2d5d566]">
                            {
                                subCategoryToys.map(subCategoryToy => <CategoryToyCard
                                    key={subCategoryToy._id}
                                    subCategoryToy={subCategoryToy}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 bg-[#e2d5d566]">
                            {
                                subCategoryToys.map(subCategoryToy => <CategoryToyCard
                                    key={subCategoryToy._id}
                                    subCategoryToy={subCategoryToy}
                                ></CategoryToyCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopByCategory;