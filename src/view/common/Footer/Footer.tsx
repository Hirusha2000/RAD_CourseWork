import {Component} from "react";
import logo from '../../../images/darshana.svg'
import {Link} from "react-router-dom";

export class Footer extends Component {
    render() {


        return (
            <div className="p-2 bg-[#808080] flex justify-center">

                    <div className="flex">
                        <h1 className="text-1xl text-secondary">
          <span style={{ fontFamily: '', fontSize: '12' }}>
            All Rights Reserved by&nbsp;
          </span>    <Link to="/">
                            <span style={{ color: 'whitesmoke' }}>Darshana Mobile (PVT) LTD</span>

                        </Link>  @2024.
                        </h1>

                    </div>

            </div>
        );

    }
}