import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { MemberRegistrationInputType } from "../types";
import { Stack, Typography, Grid } from "@mui/material";
import { Input, SelectBox } from "@/components/shared/inputs";
import PositionKTCB from "@/utils/data/json/position-ktcb.json";

interface Props {
  control: Control<MemberRegistrationInputType>;
  errors: FieldErrors<MemberRegistrationInputType>;
}

export const UserKTCB: React.FC<Props> = ({ control, errors }) => {
  return (
    <Stack>
      <Typography variant="h5" mb={2}>
        Về Khoảng Trời Của Bé…
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Controller
            name="position"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SelectBox
                label={
                  "Bạn mong muốn tham gia vào vị trí nào trong Khoảng Trời Của Bé?"
                }
                required
                fullWidth
                value={value}
                onChange={onChange}
                error={!!errors.position?.message}
                helperText={errors.position?.message}
                options={PositionKTCB}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <Controller
            name="hope_to_receive"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                label={
                  "Bạn mong muốn nhận được điều gì khi tham gia hoạt động cùng với Khoảng Trời Của Bé?"
                }
                required
                multiline
                rows={4}
                fullWidth
                placeholder={"Nhập điều mong muốn của bạn"}
                value={value}
                onChange={onChange}
                error={!!errors.hope_to_receive?.message}
                helperText={errors.hope_to_receive?.message}
              />
            )}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
