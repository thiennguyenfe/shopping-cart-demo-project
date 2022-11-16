import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "../../components/Checkout";
import Layout from "../../components/Layout";

const stripePromise = loadStripe(
  "pk_test_51LNoD5JRL8dIVi1ZrA5L7MflBdaIFaaaF0ZDFmAzbwlNp8cJ4h8EHehCju1LzjJ866eOslvtXpG9kdBBVTjE40uo00NocqzbR4"
);

const Checkout = () => {
  const options = {
    clientSecret:
      "pi_3LhIPfJRL8dIVi1Z00i8s6m6_secret_DjPG2bTVdafrQwHaKTMHSAy8T",
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <div>
      <Layout>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </Layout>
    </div>
  );
};

export default Checkout;
