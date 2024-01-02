import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6">
                    <h2 className="text-3xl text-blue-400 font-bold mb-4">
                        About Us
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg">
                        At Darshana Mobile, we are passionate about providing you with the
                        latest and most innovative mobile technology. Our journey began with
                        a commitment to offer top-quality mobile devices that cater to your
                        communication and entertainment needs.
                        <br/>
                        <br/>
                        <strong>Mission:</strong> Our mission is to make cutting-edge mobile
                        technology accessible to everyone. We strive to create a seamless
                        and enjoyable experience for our customers by offering a diverse
                        range of high-quality mobile devices and accessories. Darshana
                        Mobile is dedicated to providing exceptional service and staying
                        ahead in the dynamic world of mobile technology.
                    </p>
                </div>
            </div>
        );
    }
}