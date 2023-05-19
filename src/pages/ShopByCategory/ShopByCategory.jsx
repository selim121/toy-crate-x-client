
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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



            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;