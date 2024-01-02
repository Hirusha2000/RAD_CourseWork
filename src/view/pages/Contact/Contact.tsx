import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-3xl text-blue-400 text-center font-bold mb-4">
                        Contact Us
                    </h2>

                    <p className="text-sm mb-4">
                        Want to contact us? Please let us assist you.
                    </p>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs">Your Email:</label>
                            <input
                                className="w-full border border-green-200 rounded p-2"
                                type="email"
                            />
                        </div>
                        <div>
                            <label className="block text-xs">Your Subject:</label>
                            <input
                                className="w-full border border-green-200 rounded p-2"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block text-xs">Your Message:</label>
                            <textarea
                                className="w-full border border-green-200 rounded p-2"
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                className="w-full bg-green-400 text-xs text-white py-2"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}