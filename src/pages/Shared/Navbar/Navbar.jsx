import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {


    const navItems = <>
        <li><Link to={'/'} className="hover:text-[#ab6032f1]">Home</Link></li>
        <li><Link to={'/all-toys'} className="hover:text-[#ab6032f1]">All Toys</Link></li>
        <li><Link to={'/my-toys'} className="hover:text-[#ab6032f1]">My Toys</Link></li>
        <li><Link to={'/add-a-toy'} className="hover:text-[#ab6032f1]">Add A Toys</Link></li>
        <li><Link to={'/blog'} className="hover:text-[#ab6032f1]">Blogs</Link></li>
    </>

    return (
        <>
            <div className="bg-[#ce8c8c66] h20 flex justify-center">
                <div className="hidden lg:block">
                    <Link to={'/'} className="">
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </div>

            <div className="navbar h-20 mb-4">
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex lg:me-auto">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="me-auto">
                    <img className='h-8 w-8 rounded-full' src="https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w=" alt="" />
                    <Link className='ms-4 font-bold rounded-lg bg-white border-2 border-pink-100 px-4 py-2 transition duration-300 ease-in-out hover:bg-pink-100 hover:text-black'>Sign In</Link>
                </div>
            </div>
            <div className="ocean hidden lg:block">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </>
    );
};

export default Navbar;