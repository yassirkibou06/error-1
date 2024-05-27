import React from "react";

import CartPage from "../components/checkout/CartPage";

export const metadata = {
  title: "KADINLE | Cart",
};

const page = ({ params: { locale } }) => {
  return <CartPage locale={locale} />;
};
export default page;
