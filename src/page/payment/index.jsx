import { useMediaQuery } from 'react-responsive';

import CardNumber from '../../component/cardNumber';
import CrdDetails from '../../component/crdDetails';
import CvvNumber from '../../component/cvvNumber';
import ExpiryDate from '../../component/expiryDate';
import Logo from '../../component/logo';
import Password from '../../component/password';
import PayButton from '../../component/payButton';
import PayCard from '../../component/payCard';
import '../../main.css'; // Import the Tailwind CSS file
import { GrFormClose } from 'react-icons/gr';

function PaymentDetails() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-16">
      <div className="flex flex-wrap justify-center items-start">
        <div className="w-full md:w-2/3 pr-0 md:pr-8">
          <div className="bg-white p-6 rounded-md shadow-md">
            <GrFormClose className="pb-5 text-right" />
            <div className="overflow-x-hidden">
              {isSmallScreen ? (
                // Render only for small screens
                <>
                  <Logo />
                  <CardNumber />
                  <CrdDetails />
                  <CvvNumber />
                  <ExpiryDate />
                  <Password />
                  <PayButton />
                  <div className="mt-5">
                  <PayCard />
                  </div>
                </>
                
              ) : (
                // Render for larger screens
                <div className="card flex ">
                  <div className="flex-1/2 p-5">
                    <Logo />
                    <CardNumber />
                    <CrdDetails />
                    <CvvNumber />
                    <ExpiryDate />
                    <Password />
                    <PayButton />
                  </div>
                  <div className="flex-1/2 p-5">
                    <PayCard />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
