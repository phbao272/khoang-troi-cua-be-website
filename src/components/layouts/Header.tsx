import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Stack} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Link from "next/link";
import menuData from "../../utils/data/json/header.json";
import logoNoBackground from "../../../public/ktcb_logo_no_background.png";

import MenuSection from "./Menu";
import { useState } from "react";
import VerticalMenu from "./Menu/SideMenu/SideMenuSection";
// import { COLORS } from "@/utils/constants";

export type MenuType = typeof menuData;

const Header = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const handleToggleSideMenu = () => {
    setOpenSideMenu((prev) => !prev);
  };

  return (
    <Box
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 15px",
        px: {
          xs: 1,
          md: 2,
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={0}
        sx={{
          py: 2,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <IconButton
          sx={{ display: ["block", "block", "block", "none"] }}
          onClick={handleToggleSideMenu}
        >
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <Link href="/" className="flex items-center">
          <Box
            component="img"
            maxHeight={70}
            width={70}
            src={logoNoBackground.src}
            alt="logoNoBackground"
            loading="lazy"
          ></Box>
        </Link>
        <Box display={["none", "none", "none", "block"]}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={7}
          >
            {menuData.map((menu, index) => (
              <MenuSection key={`${index}menu`} menuData={menu} />
            ))}
          </Stack>
        </Box>

        <Stack direction="row" alignItems="center" gap="12px">
          <Link
            href="/login"
            className="text-sm font-semibold hover:opacity-80 cursor-pointer"
          >
            Đăng nhập
            </Link>
          <Link href="/profile">
          Chào Nguyễn Hữu Minh
          </Link>
          <IconButton>
            <LanguageIcon sx={{ fontSize: 25 }} />
          </IconButton>
        </Stack>
      </Stack>

      <Drawer anchor="left" open={openSideMenu} onClose={handleToggleSideMenu}>
        <VerticalMenu menuDatas={menuData} />
      </Drawer>
    </Box>
  );
};

export default Header;
