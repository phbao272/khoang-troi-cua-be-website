import { MemberListTable } from "@/components/features/member-management";
import { Container } from "@/components/layouts/Container";
import { SEO } from "@/configs/seo.config";
import { Box } from "@mui/material";
import { DefaultSeo } from "next-seo";
import React from "react";

const index = () => {
  return (
    <Container>
      <Box className="py-4">
        <DefaultSeo {...SEO} title="Danh sách thành viên" />
        <MemberListTable />
      </Box>
    </Container>
  );
};

export default index;
