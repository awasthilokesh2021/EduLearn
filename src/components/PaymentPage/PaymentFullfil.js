import React from "react";
import { useNavigate } from "react-router-dom";


const PaymentFullfil = () => {
    const navigate = useNavigate();

    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Payment Successful!</h1>
        <p className="text-lg text-gray-700">Thank you for your purchase. Your order has been placed successfully.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Go to Home
        </button>
      </div>
    );
}

export default PaymentFullfil