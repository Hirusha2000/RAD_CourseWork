import {Component} from "react";
import {Link} from "react-router-dom";

export class CreateAccount extends Component {
    render() {

            return (
                <div className="flex h-screen bg-gray-800 justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-md w-96">
                        <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
                            Create Account
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm block text-gray-600">
                                    Name:
                                </label>
                                <input
                                    id="name"
                                    className="w-full p-2 border border-green-200 rounded"
                                    type="text"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="tp" className="text-sm block text-gray-600">
                                    Phone Number:
                                </label>
                                <input
                                    id="tp"
                                    className="w-full p-2 border border-green-200 rounded"
                                    type="tel"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label htmlFor="gmail" className="text-sm block text-gray-600">
                                    Email (Gmail):
                                </label>
                                <input
                                    id="gmail"
                                    className="w-full p-2 border border-green-200 rounded"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="text-sm block text-gray-600">
                                    Password:
                                </label>
                                <input
                                    id="password"
                                    className="w-full p-2 border border-green-200 rounded"
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="text-sm block text-gray-600">
                                    City:
                                </label>
                                <input
                                    id="city"
                                    className="w-full p-2 border border-green-200 rounded"
                                    type="text"
                                    placeholder="Enter your city"
                                />
                            </div>
                            <div>
                                <button
                                    className="w-full bg-green-400 text-white p-2 rounded hover:bg-green-500"
                                    type="submit"
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-gray-600">
                                Already have an account?{" "}
                                <Link to="/login" className="text-blue-500 hover:underline">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

}