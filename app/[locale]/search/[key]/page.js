import React from "react";

import SingleCategory from "../../components/categories/SingleCategory";
import Layout from "../../components/layout/Layout";
import { getSearchResults } from "@/app/api/supabase/home";

export const metadata = {
  title: "KADINLE | Search",
};

const page = async ({ params }) => {
  const { key, locale } = params;
  const res = await getSearchResults(key);

  return (
    <Layout locale={locale} searchOnly>
      <SingleCategory layout="search" category={res?.data} />
    </Layout>
  );
};
export default page;
