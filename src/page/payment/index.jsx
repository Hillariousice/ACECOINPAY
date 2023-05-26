
import CardNumber from '../../component/cardNumber';
import CrdDetails from '../../component/crdDetails';
import CvvNumber from '../../component/cvvNumber';
import ExpiryDate from '../../component/expiryDate';
import Logo from '../../component/logo';
import Password from '../../component/password';
import PayButton from '../../component/payButton';
import PayCard from '../../component/payCard';
import './paymentD.css';

function PaymentDetails() {
  return (
    <div className="payD">
    <div className="col-span-12 md:col-span-8">
      <Logo />
      <CardNumber />
      <CrdDetails />
      <CvvNumber />
      <ExpiryDate />
      <Password />
      <PayButton />
    </div>
    <div className="col-span-12 md:col-span-4">
      <PayCard />
    </div>
  </div>
  );
}

export default PaymentDetails;
