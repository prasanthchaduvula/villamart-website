import React from 'react';
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineAppstoreAdd,
  AiOutlineApi
} from 'react-icons/ai';
import { BsBuilding } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

class FarmerSec1 extends React.Component {
  render() {
    return (
      <section className="wrapper rwrapper ">
        <div className="farmer-sec1-cont rpd-vertical-1rem r-d-block">
          <div className="farmer-sec1-item rpd-vertical-1rem">
            <div className="basebg farmer-sec1-item-left">
              <AiOutlineClockCircle className="farmer-sec1-item-img" />
            </div>
            <div className="farmer-sec1-item-right">
              <p className="farmer-sec1-item-right-heading fs-1-3">
                You’re in charge
              </p>
              <p className="farmer-sec1-item-right-subheading  fs-1">
                There is no one to report to, you are your own boss
              </p>
            </div>
          </div>
          <div className="farmer-sec1-item rpd-vertical-1rem">
            <div className="basebg farmer-sec1-item-left">
              <AiOutlineStar className=" farmer-sec1-item-img" />
            </div>
            <div className="farmer-sec1-item-right">
              <p className="farmer-sec1-item-right-heading fs-1-3">
                You’re in charge
              </p>
              <p className="farmer-sec1-item-right-subheading  fs-1">
                There is no one to report to, you are your own boss
              </p>
            </div>
          </div>
          <div className="farmer-sec1-item rpd-vertical-1rem">
            <div className="basebg farmer-sec1-item-left">
              <AiOutlineAppstoreAdd className=" farmer-sec1-item-img" />
            </div>
            <div className="farmer-sec1-item-right">
              <p className="farmer-sec1-item-right-heading fs-1-3">
                You’re in charge
              </p>
              <p className="farmer-sec1-item-right-subheading  fs-1">
                There is no one to report to, you are your own boss
              </p>
            </div>
          </div>
          <div className="farmer-sec1-item rpd-vertical-1rem">
            <div className="basebg farmer-sec1-item-left">
              <BsBuilding className=" farmer-sec1-item-img" />
            </div>
            <div className="farmer-sec1-item-right">
              <p className="farmer-sec1-item-right-heading fs-1-3">
                You’re in charge
              </p>
              <p className="farmer-sec1-item-right-subheading  fs-1">
                There is no one to report to, you are your own boss
              </p>
            </div>
          </div>
          <div className="farmer-sec1-item rpd-vertical-1rem">
            <div className="basebg farmer-sec1-item-left">
              <FaRegMoneyBillAlt className=" farmer-sec1-item-img" />
            </div>
            <div className="farmer-sec1-item-right">
              <p className="farmer-sec1-item-right-heading fs-1-3">
                You’re in charge
              </p>
              <p className="farmer-sec1-item-right-subheading  fs-1">
                There is no one to report to, you are your own boss
              </p>
            </div>
          </div>
          <div className="farmer-sec1-item rpd-vertical-1rem">
            <div className="basebg farmer-sec1-item-left">
              <AiOutlineApi className=" farmer-sec1-item-img" />
            </div>
            <div className="farmer-sec1-item-right">
              <p className="farmer-sec1-item-right-heading fs-1-3">
                You’re in charge
              </p>
              <p className="farmer-sec1-item-right-subheading  fs-1">
                There is no one to report to, you are your own boss
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FarmerSec1;
