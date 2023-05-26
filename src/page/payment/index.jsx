import CardNumber from '../../component/cardNumber';
import CrdDetails from '../../component/crdDetails';
import CvvNumber from '../../component/cvvNumber';
import ExpiryDate from '../../component/expiryDate';
import Logo from '../../component/logo';
import Password from '../../component/password';
import PayButton from '../../component/payButton';
import PayCard from '../../component/payCard';
import '../../main.css'; // Import the Tailwind CSS file

function PaymentDetails() {
  return (
    <div className=" mx-auto my-auto">
      <div className="flex bg-white w- p-6 rounded shadow item-center  justify-center">
        <div className="">
          <Logo />
          <CardNumber />
          <CrdDetails />
          <CvvNumber />
          <ExpiryDate />
          <Password />
          <PayButton />
        </div>
        <div className=" ">
          <PayCard />
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
