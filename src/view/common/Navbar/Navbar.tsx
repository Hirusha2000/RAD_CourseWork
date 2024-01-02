import {Component} from "react";
import logo from '../../../images/darshana.svg'
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-between">

                <Link to="/">
                    <div className="flex">
                        <h1 style={{fontFamily: 'Ubuntu, sans-serif', fontWeight: 'bold', color: '#000000'}}
                            className="text-2xl text-secondary">
                            Darshana Mobile
                        </h1>

                        <img className="h-8 w-20 ml-1 pt-0 object-cover" src={logo} alt=""/>

                    </div>
                </Link>

                <ul className="list-none flex mt-1">
                    <li style={{fontFamily: 'Ubuntu, sans-serif', fontWeight: '600'}}
                        className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li style={{fontFamily: 'Ubuntu, sans-serif', fontWeight: '600'}}
                        className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li style={{fontFamily: 'Ubuntu, sans-serif', fontWeight: '600'}}
                        className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/about">About</Link>
                    </li>
                    <li style={{fontFamily: 'Ubuntu, sans-serif', fontWeight: '600'}}
                        className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">
                        <Link to="/shopping-cart">My-Cart</Link>
                    </li>

                </ul>

                <button className="text-[8px] text-[#e6f0e6] font-bold
                   bg-gradient-to-r from-green-400 to-blue-500
                   px-4 py-2 rounded-md
                   hover:text-tertiary hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-400
                   transition duration-300">
                    <Link to="/login">Sign In</Link>
                </button>

            </div>
        );
    }
}