import React, { useState } from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import ReviewForm from './ReviewForm';

function CheckoutForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: '',
    payment: '',
    review: '',
  });

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);
  const handleFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div>
      <h1>Checkout Process</h1>
      {step === 1 && (
        <AddressForm
          data={formData.address}
          onNext={handleNextStep}
          onDataChange={handleFormData}
        />
      )}
      {step === 2 && (
        <PaymentForm
          data={formData.payment}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          onDataChange={handleFormData}
        />
      )}
      {step === 3 && (
        <ReviewForm
          data={formData}
          onPrev={handlePrevStep}
        />
      )}
    </div>
  );
}

export default CheckoutForm;
