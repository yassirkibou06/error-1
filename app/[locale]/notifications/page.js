import { getNotification } from "@/app/api/supabase/user";
import React from "react";

import Layout from "../components/layout/Layout";
import Notifications from "../components/my-profile/Notifications";

export const metadata = {
  title: "KADINLE | Notifications",
};

const page = async ({ params: { locale } }) => {
  const notifications = await getNotification();

  return (
    <Layout locale={locale} hideHeader>
      <Notifications notifications={notifications?.data} />
    </Layout>
  );
};

export default page;
