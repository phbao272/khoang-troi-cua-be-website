import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DonorRegistrationInputSchema,
  DonorRegistrationInputType,
} from "./types";
import { Button, Typography, Grid } from "@mui/material";
import { Container } from "@/components/layouts/Container";
import { toast } from "react-toastify";
import ktcbBackground from "@public/mission-background.jpg";
import { useRouter } from "next/router";
import { DonorDonate, DonorInformation } from "./components";

export const DonorRegistration = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<DonorRegistrationInputType>({
    resolver: zodResolver(DonorRegistrationInputSchema),
    defaultValues: {
      full_name: "",
      birthday: Date.now(),
      phone_number: "",
      email: "",

      // donate
      kind_of_donate: "1",
      image_url: "",
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
            disabled
            color="secondary"
            onClick={() => router.push("/donor-registration")}
          >
            Trở thành nhà hảo tâm
          </Button>
        </div>

        <Typography fontSize={28} fontWeight={"bold"}>
          Đăng ký trở thành nhà hảo tâm Khoảng Trời Của Bé
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <DonorInformation control={control} errors={errors} />

            <DonorDonate control={control} errors={errors} setError={setError}/>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className="w-[150px] h-[150px] border-solid border-2 border-black">
              QR code
            </div>
          </Grid>
        </Grid>

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
