import React from "react";
import { UserInformation, UserKTCB, UserSocialActivities } from "./components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  MemberRegistrationInputSchema,
  MemberRegistrationInputType,
} from "./types";
import { Button, Typography } from "@mui/material";
import { Container } from "@/components/layouts/Container";
import { toast } from "react-toastify";
import ktcbBackground from "@public/mission-background.jpg";
import { useRouter } from "next/router";

export const MemberRegistration = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<MemberRegistrationInputType>({
    resolver: zodResolver(MemberRegistrationInputSchema),
    defaultValues: {
      full_name: "",
      birthday: Date.now(),
      phone_number: "",
      email: "",
      address: "",
      work_place: "",

      // social activities
      has_social_activities: "1",
      memories: "",

      // ktcb
      position: "1",
      hope_to_receive: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    toast.success("Xác nhận thành công. Cảm ơn đã gửi thông tin");
  });

  return (
    <Container
      sx={{
        backgroundImage: `url(${ktcbBackground.src})`,
        backgroundSize: "100% 100%;",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col mt-9 gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
              color: "#fff",
            }}
            disabled
            color="secondary"
            onClick={() => router.push("/member-registration")}
          >
            Trở thành thành viên
          </Button>
          <Button
            variant="contained"
            sx={{
              width: "fit-content",
              color: "#fff",
            }}
            color="secondary"
            onClick={() => router.push("/donor-registration")}
          >
            Trở thành nhà hảo tâm
          </Button>
        </div>

        <Typography fontSize={28} fontWeight={"bold"}>
          Đăng ký trở thành thành viên Khoảng Trời Của Bé
        </Typography>

        <UserInformation control={control} errors={errors} />

        <UserSocialActivities control={control} errors={errors} />

        <UserKTCB control={control} errors={errors} />

        <Button
          variant="contained"
          sx={{
            marginTop: "1rem",
            width: "fit-content",
            alignSelf: "center",
            color: "#fff",
          }}
          color="secondary"
          onClick={onSubmit}
        >
          Gửi thông tin
        </Button>
      </div>
    </Container>
  );
};
