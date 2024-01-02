import {Component} from "react";
import bgi from '../../../images/aboutt.svg'
import bgi2 from '../../../images/darshana.svg'

export class About extends Component {
    render() {

/*        const backgroundImage = `url(${bgi2})`;*/
        const backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${bgi2})`;


        return (

            <div className="flex justify-center items-center h-screen"
                 style={{backgroundImage, backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                {/*                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 p-6 bg-white bg-opacity-60">*/}
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
            </div>


        );
    }
}