import { getTranslations } from "next-intl/server";
import ScrollUpComponent from "../../components/global/ScrollUpComponent";
import { SuppliersForm } from "../../components/forms/SuppliersForm";
import Layout from "./../../components/layout/Layout";
import { StaticPageTitle } from "../../components/global/StaticPageTitle";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations(locale);
  return {
    title: `${locale === "ar" ? "كادينلي" : "KADINLE"} | ${t(
      "supplier_registration"
    )}`,
    description: t("suppliers_msg1"),
  };
}

const page = async ({ params: { locale } }) => {
  const t = await getTranslations(locale);

  return (
    <Layout locale={locale} bodyClassName="!max-w-full">
      <ScrollUpComponent />
      <StaticPageTitle title={t("supplier_registration")} />
      <div className="px-4 flex flex-col poppins  md:max-w-[575px] md:mx-auto w-full text-xs">
        <SuppliersForm />
      </div>
    </Layout>
  );
};

export default page;
