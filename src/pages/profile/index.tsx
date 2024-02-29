import { IBankVietQR } from "@/@types/common";
import { Profile } from "@/components/features/profile";
import { SEO } from "@/configs/seo.config";
import { GetServerSideProps } from "next";
import { DefaultSeo } from "next-seo";
import React from "react";

interface ProfilePageProps {
  banks: IBankVietQR[];
}

const ProfilePage = ({ banks }: ProfilePageProps) => {
  return (
    <>
      <DefaultSeo {...SEO} title="Thông tin cá nhân" />
      <Profile banks={banks} />
    </>
  );
};

export default ProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const res = await fetch("https://api.vietqr.io/v2/banks");

  const json = await res.json();

  return { props: { banks: json.data } };
};
