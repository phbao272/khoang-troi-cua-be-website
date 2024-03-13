import { ExpenseCreation } from "@/components/features/expense-management/expense-creation";
import { SEO } from "@/configs/seo.config";
import { DefaultSeo } from "next-seo";
import React from "react";

const ExpenseCreationPage = () => {
  return (
    <>
      <DefaultSeo {...SEO} title="Tạo yêu cầu thu chi" />
      <ExpenseCreation />
    </>
  );
};

export default ExpenseCreationPage;
