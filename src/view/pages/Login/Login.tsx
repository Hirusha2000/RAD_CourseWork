// Import necessary modules
import React, {Component} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {CreateAccount} from "../CreateAccount/CreateAccount";


// App component
const App = () => {
    return (
       /* <Router>
            <Routes>

                <Route path="/register" element={<CreateAccount />} />
            </Routes>
        </Router>*/



    <Routes>
        <Route path="/register" element={<CreateAccount />} />
    </Routes>

);
};

export default App;



// Rest of your code here

export class Login extends Component {
    render() {
        return (
            <div className="flex h-screen bg-gray-800 justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">
                        Sign In
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="email" className="text-sm block text-gray-600">
                                Email:
                            </label>
                            <input
                                id="email"
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
                            <button
                                className="w-full bg-green-400 text-white p-2 rounded hover:bg-green-500"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-500 hover:underline">
                                Create New Account
                            </Link>
                            {/* If not using React Router, you can replace the Link with a button or other navigation mechanism */}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
