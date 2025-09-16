import React from "react";
import MoreInfoTab from "./MoreInfoTab";

const Faq = () => {
  const FAQuestions = [
    {
      question: "WHAT PAYMENT METHODS CAN I USE?",
      answer:
        "We offer 35 different payment methods including major providers like Mastercard, Visa, PayPal, American Express and Diners as well as many differnt local payment methods including Klama, iDEAL, AliPay, Sofort, giropay, and many more.",
    },
    {
      question: "CAN I PURCHASE ITEMS WITH ANOTHER CURRENCY?",
      answer: "Yes, you may select a currency based on your personal preference. When you select your country in the country selector on the upper right of the website or are taken directly to your country's version of the website, you will see prices listed in the regional currency",
    },
    {
      question: "CAN I MAKE CHANGES TO MY ORDER AFTER IT HAS BEEN PLACED?",
      answer: "We do everything we can to fulfill orders quickly and unfortunately cannot make updates after an order has been placed. These changes include removing or adding products and/or changing the delivery address. if a mistake has been made with your order information, it's quickest to create a new order with the correct information and then let our Customer Service know",
    },
    {
      question: "DO YOU OFFER E-GIFT CARDS FOR INTERNATIONAL CUSTOMERS?",
      answer: "E-gift cards are only available to customers shipping within the U.S.",
    },
    {
      question: "HOW DO I SET UP A SUBSCRIPTION ORDER?",
      answer: "We will deliver products to you as  soon as reasonably possible. Orders are usually dispatched between 1-3 days from the date of the order being placed. Please contact us our customer service team if your delivery has not been received within the dates described.",
    },
    {
      question: "HOW TO RETURN MY ITEMS?",
      answer: "We do not currently offer free returns to overseas customers. You will therefore need to cover costs of returning any items to us yourself. We advise that you mark your package 'returned goods' to avoid further duties. Remember: We strongly recommend that you return any items via a registered trackable service, obtain and retain proof of posting as we do not take responsibility for items that fail to arrive to us",
    },
  ];

  return (
    <div>
      <div className="mb-5">
        <h2 className="w-full h-7.5 text-2xl text-center font-bold xy-center">
          F.A.Q.
        </h2>
        <p className="w-full h-7.5 text-xs text-center ">
          They appreciate cut and details, things that aren't so obvious
        </p>
      </div>
      <div className="">
        {FAQuestions.map((faq, index) => {
          return <MoreInfoTab
          key={index}
          title={faq.question}
          content={faq.answer}
          fontSize="[13px]"
          color="black"
        />
        })}
      </div>
    </div>
  );
};

export default Faq;
