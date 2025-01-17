import React from "react";
import { Control, Controller, FieldErrors, UseFormSetError } from "react-hook-form";
import { DonorRegistrationInputType } from "../types";
import { Stack, Typography, Grid } from "@mui/material";
import { Input, Radio, SelectBox } from "@/components/shared/inputs";
import { KIND_OF_DONATION_OPTIONS } from "@/utils/constants";
import { UploadFile } from "@/components/shared/inputs/upload";

interface Props {
  control: Control<DonorRegistrationInputType>;
  errors: FieldErrors<DonorRegistrationInputType>;
  setError: UseFormSetError<DonorRegistrationInputType>;
}

const COL_SPAN = {
  xs: 12,
  md: 6,
};


export const DonorDonate: React.FC<Props> = ({ control, errors, setError }) => {
  return (
    <Stack>
      <Typography variant="h5" mb={2}>
        Bạn hãy cung cấp một số thông tin quyên góp nhé…
      </Typography>

      <Grid container spacing={2}>
        <Grid item {...COL_SPAN}>
          <Controller
            name="kind_of_donate"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Radio
                label={"Bạn muốn quyên góp tiền hay hiện vật?"}
                required
                fullWidth
                value={value}
                onChange={onChange}
                error={!!errors.kind_of_donate?.message}
                helperText={errors.kind_of_donate?.message}
                options={KIND_OF_DONATION_OPTIONS}
              />
            )}
          />
        </Grid>

        <Grid item {...COL_SPAN}>
          <Controller
            name="image_url"
            control={control}
            render={({ field: { onChange } }) => (
              <UploadFile
              name="image_url"
              label={`Bạn hãy cho chúng mình xin một vài hình ảnh về nội dung quyên góp nhé.\n
                Đối với tiền, bạn hãy gửi ảnh chụp màn hình chuyển khoản.\n
                Đối với hiện vật, bạn hãy chụp ảnh hiện vật.`}
                fullWidth
                required
                onChange={onChange}
                error={!!errors.image_url?.message}
                helperText={errors.image_url?.message as string}
                setError={setError}

                // hasPreviewUrl={true}
                // previewUrl={imageUrl}
              />
            )}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};
