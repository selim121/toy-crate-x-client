import { Link } from 'react-router-dom';
import img0 from '../../../assets/images/banner/slide0.png';
import img1 from '../../../assets/images/banner/slide1.png';
import img2 from '../../../assets/images/banner/slide2.jpeg';
import img3 from '../../../assets/images/banner/slide3.jpeg';
import img4 from '../../../assets/images/banner/slide4.jpeg';

const Banner = () => {
    return (
        <>
            <div>
                <div className="carousel w-full h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img0} className="w-full rounded-xl" />
                        <div className="absolute h-1/2 w-full rounded-xl flex items-center justify-center  bottom-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide5" className="btn btn-circle  hover:bg-[#ce8c8c66] mr-5">❮</a>
                            <a href="#slide2" className="btn btn-circle  hover:bg-[#ce8c8c66]">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img1} className="w-full rounded-xl" />
                        <div className="absolute h-1/2 w-full rounded-xl flex items-center justify-center  bottom-0 bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <Link className='font-bold text-2xl text-white rounded-lg border-2 border-[#d2bfbf66] px-8 py-3 bg-[#ce8c8c66]'>View Products</Link>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide1" className="btn btn-circle  hover:bg-[#ce8c8c66] mr-5">❮</a>
                            <a href="#slide3" className="btn btn-circle  hover:bg-[#ce8c8c66]">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img2} className="w-full rounded-xl" />
                        <div className="absolute h-full rounded-xl flex items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 pl-12'>
                                <h2 className='text-4xl font-bold'>
                                    Affordable price and best service <br />
                                    <span>with</span> <br />
                                    ToyCrateX
                                </h2>
                                <div>
                                    <Link className='font-bold text-2xl text-white rounded-lg border-2 border-[#d2bfbf66] px-8 py-3 bg-[#ce8c8c66]'>View Products</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide2" className="btn btn-circle  hover:bg-[#ce8c8c66] mr-5">❮</a>
                            <a href="#slide4" className="btn btn-circle  hover:bg-[#ce8c8c66]">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={img3} className="w-full rounded-xl" />
                        <div className="absolute h-full w-full rounded-xl flex items-start justify-center  top-0 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 text-center'>
                                <h2 className='text-4xl font-bold'>
                                    Affordable price and best service <br />
                                    <span>with</span> <br />
                                    ToyCrateX
                                </h2>
                                <div>
                                    <Link className='font-bold text-2xl text-white rounded-lg border-2 border-[#d2bfbf66] px-8 py-3 bg-[#ce8c8c66]'>View Products</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide3" className="btn btn-circle  hover:bg-[#ce8c8c66] mr-5">❮</a>
                            <a href="#slide5" className="btn btn-circle  hover:bg-[#ce8c8c66]">❯</a>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <img src={img4} className="w-full rounded-xl" />
                        <div className="absolute h-full rounded-xl flex items-center justify-center  right-0 bg-gradient-to-l from-[#151515] to-[rgba(21, 21, 21, 0)]">
                            <div className='text-white space-y-7 text-right'>
                                <h2 className='text-4xl font-bold'>
                                    Affordable price and best service <br />
                                    <span>with</span> <br />
                                    ToyCrateX
                                </h2>
                                <div>
                                    <Link className='font-bold text-2xl text-white rounded-lg border-2 border-[#d2bfbf66] px-8 py-3 bg-[#ce8c8c66]'>View Products</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                            <a href="#slide4" className="btn btn-circle  hover:bg-[#ce8c8c66] mr-5">❮</a>
                            <a href="#slide1" className="btn btn-circle  hover:bg-[#ce8c8c66]">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;