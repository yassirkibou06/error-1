import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

import Layout from "../components/layout/Layout";
import { MyAccount } from "../components/my-profile/MyAccount";

export const metadata = {
  title: "KADINLE | My Profile",
};

const page = async ({ params: { locale } }) => {
  const user = cookies().get("KADINLE_USER")?.value;

  if (!user) redirect("/login");
  
  return (
    <Layout hideHeader locale={locale}>
      <MyAccount locale={locale} />
    </Layout>
  );
};

export default page;
