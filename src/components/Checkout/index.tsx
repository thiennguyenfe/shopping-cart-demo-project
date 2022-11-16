import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";

export default function CheckoutForm() {
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret =
      "pi_3LhJBLJRL8dIVi1Z1639cyIR_secret_rPzmsIvTj1RJONO6cH71A097e";

    if (!clientSecret) {
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }: any) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          case "requires_payment_method":
            setMessage("Your payment was not successful, please try again.");
            break;
          default:
            setMessage("Something went wrong.");
            break;
        }
      });
  }, [stripe]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://e78ky9.csb.app/",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const handleCheckout = () => {
    setIsLoading(false);
    router.push("/checkout/success");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            // onClick={handleCheckout}
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </div>
  );
}
