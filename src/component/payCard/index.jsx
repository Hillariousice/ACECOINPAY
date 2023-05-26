import './payCard.css';
import Chip from '../../asset/chip.png'
import Wifi from '../../asset/wifi.png'
import MasterCard3 from '../../asset/mastercard-2.svg'
import Applogo from '../../asset/apple-13.svg'
import Docket from '../../asset/docket.png'
import '../../main.css'

const PayCard = () => {
  return (
    <div className="col-span-12 md:col-span-4">
      <div className="py-checkout">
        <span className="py-blu"></span>
        <div className="py-credit-card">
          <div className="py-credit-card__head">
            <img src={Chip} alt="" className="py-chip"/>
            <img src={Wifi}alt="" className="py-wifi"/>
          </div>
          <div className="py-credit-card__body">
            <span className="py-holder">Jonathan Michael</span>
            <div className="py-card-digits">
              <div className="py-hidden-digits">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
              </div>
              <span className="visible-digits">3456</span>
            </div>
          </div>
          <div className="py-credit-card__footer">
            <span className="py-expiry">09/22</span>
            <img src={MasterCard3} alt="" className="logo"/>
          </div>
          <div className="py-card__design">
            <span className="inner"></span>
          </div>
        </div>
        <div className="py-checkout-details">
          <div className="py-purchase-data">
            <div className="-py-data">
              <span className="title">Company</span>
              <span className="value">
                <img src={Applogo} alt="" className='py-app'/>
                <span className="inner-text">Apple</span>
              </span>
            </div>
            <div className="py-data">
              <span className="title">Order number</span>
              <span className="value">
                <span className="inner-text">1266201</span>
              </span>
            </div>
            <div className="py-data">
              <span className="title">Product</span>
              <span className="value">
                <span className="inner-text">MacBook Air</span>
              </span>
            </div>
            <div className="py-data">
              <span className="title">VAT (20%)</span>
              <span className="value">
                <span className="inner-text">$100.00</span>
              </span>
            </div>
          </div>
          <div className="py-divider">
            <div className="left"></div>
            <div className="py-right"></div>
          </div>
          <div className="py-purchase-total">
            <div className="total">
              <span className="desc">You have to pay</span>
              <div className="t-amount">
                <h1 className="amount">549<sub>.99</sub></h1>
                <span className="symbol">USD</span>
              </div>
            </div>
            <img src={Docket} alt="" className=''/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayCard;
