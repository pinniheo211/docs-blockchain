/* eslint-disable react-hooks/exhaustive-deps */
import LoaderStyleOne from "@/components/LoaderStyleOne";
import FileUploaderSingle from "@/lib/file-uploader/FileUploaderSingle";
import CustomAutocomplete from "@/lib/mui/AutocompleteCustom";
import { ThemeMdx } from "@/lib/mui/custom-theme";
import {
  actionGetDistrict,
  actionGetProvince,
  actionGetWard,
} from "@/store/address";
import { actionGetProfile, actionKYC } from "@/store/profile";
import { SCHEMA_KYC } from "@/until/schema";
import { loginTheme } from "@/until/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Unstable_Grid2 as Grid,
  Radio,
  RadioGroup,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export const KYCProfileDetail = ({ setConfirmKYC }) => {
  const dispatch = useDispatch();

  const { data: dataCountry } = useSelector((state) => state.address.country);
  const { data: dataProvince } = useSelector((state) => state.address.province);
  const { data: dataDistrict } = useSelector((state) => state.address.district);
  const { data: dataWard } = useSelector((state) => state.address.ward);
  const { data: dataProfile } = useSelector(
    (state) => state.profile.getProfile
  );
  const { loading: loadingKYC } = useSelector((state) => state.profile.KYC);

  const {
    control,
    handleSubmit,
    setValue,
    resetField,
    getValues,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      phoneCode: null,
      countryId: null,
      provinceId: null,
      districtId: null,
      wardId: null,
      street: "",
      frontCard: null,
      backCard: null,
      selfie: null,
      fullname: "",
      gender: "male",
      dayOfBirth: null,
      phone: null,
      cardId: null,
    },
    resolver: yupResolver(SCHEMA_KYC),
  });

  const onSubmitForm = (data) => {
    const address = `${data?.street}, ${data?.wardId?.name}, ${data?.districtId?.name}, ${data?.provinceId?.name}`;
    const dataAPI = {
      frontCard: data?.frontCard,
      backCard: data?.backCard,
      selfie: data?.selfie,
      fullname: data?.fullname,
      gender: data?.gender,
      dayOfBirth: dayjs(data?.dayOfBirth).format("DD-MM-YYYY").toString(),
      phone: data?.phone,
      cardId: data?.cardId,
      address: address,
    };
    dispatch(actionKYC(dataAPI)).then((res) => {
      if (!res.payload?.error && res.payload) {
        dispatch(actionGetProfile());
        setConfirmKYC();
      }
    });
  };

  const findLabelById = (arr, geonameId) => {
    if (arr?.length > 0) {
      return arr?.find((item) => item?.geonameId === geonameId)?.name;
    }
  };

  useEffect(() => {
    if (dataProfile) {
      dataProfile?.province && setValue("provinceId", dataProfile?.province);
      dataProfile?.district?.id &&
        dispatch(actionGetDistrict(dataProfile?.province?.id)).then((res) => {
          if (res?.payload?.length > 0) {
            setValue("districtId", dataProfile?.district);
          }
        });
      dataProfile?.ward?.id &&
        dispatch(actionGetWard(dataProfile?.district?.id)).then((res) => {
          if (res?.payload?.length > 0) {
            setValue("wardId", dataProfile?.ward);
          }
        });
      dataProfile?.street && setValue("street", dataProfile?.street);
    }
  }, [dataProfile]);
  return (
    <div>
      {dataProfile && (
        <div>
          <form autoComplete="off" onSubmit={handleSubmit(onSubmitForm)}>
            <ThemeProvider theme={loginTheme}>
              <Card className="p-4 !bg-gradient-toearnnow !rounded-xl !bg-transparent">
                <CardHeader title="Account information" />
                <CardContent sx={{ pt: 0 }}>
                  <Box sx={{ m: -1.5 }}>
                    <Grid container spacing={3}>
                      <Grid xs={12} md={6}>
                        <Controller
                          name="fullname"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              variant="filled"
                              shrink="true"
                              {...field}
                              fullWidth
                              error={Boolean(errors.fullname)}
                              helperText={errors.fullname?.message || ""}
                              label="Fullname"
                            />
                          )}
                        />
                      </Grid>
                      <Grid container xs={12} md={6} spacing={1}>
                        <Grid item xs={2}>
                          <Controller
                            name="countryId"
                            control={control}
                            render={({ field }) => (
                              <CustomAutocomplete
                                fullWidth
                                options={dataCountry}
                                id="autocomplete-custom-country"
                                getOptionLabel={(option) =>
                                  option.phoneCode || ""
                                }
                                renderInput={(params) => (
                                  <TextField
                                    variant="filled"
                                    shrink="true"
                                    {...params}
                                    label="Phone Code"
                                    error={Boolean(errors.countryId)}
                                    helperText={errors.countryId?.message || ""}
                                  />
                                )}
                                {...field}
                                onChange={(_, option, reason) => {
                                  field.onChange(option);
                                }}
                              />
                            )}
                          />
                        </Grid>
                        <Grid item xs={10}>
                          <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                              <TextField
                                variant="filled"
                                shrink="true"
                                {...field}
                                fullWidth
                                type="number"
                                error={Boolean(errors.phone)}
                                helperText={errors.phone?.message || ""}
                                label="Phone"
                              />
                            )}
                          />
                        </Grid>
                      </Grid>
                      <Grid xs={12} md={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Controller
                            name="dayOfBirth"
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                              <DateField
                                {...field}
                                label="Birthday"
                                placeholder="Birthday"
                                clearable
                                fullWidth
                                variant="filled"
                                className="text-sm"
                                error={Boolean(errors.dayOfBirth)}
                                helperText={errors.dayOfBirth?.message || ""}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </Grid>
                      <Grid xs={12} md={6}>
                        <Controller
                          name="cardId"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              variant="filled"
                              shrink="true"
                              type="number"
                              {...field}
                              fullWidth
                              error={Boolean(errors.cardId)}
                              helperText={errors.cardId?.message || ""}
                              label="ID Card Number"
                            />
                          )}
                        />
                      </Grid>

                      <Grid xs={12} md={6}>
                        <Controller
                          name="countryId"
                          control={control}
                          render={({ field }) => (
                            <CustomAutocomplete
                              fullWidth
                              options={dataCountry}
                              id="autocomplete-custom-country"
                              getOptionLabel={(option) => option.name || ""}
                              renderInput={(params) => (
                                <TextField
                                  variant="filled"
                                  shrink="true"
                                  {...params}
                                  label="Country"
                                  error={Boolean(errors.countryId)}
                                  helperText={errors.countryId?.message || ""}
                                />
                              )}
                              {...field}
                              onChange={(_, option, reason) => {
                                setValue("wardId", null);
                                setValue("districtId", null);
                                setValue("provinceId", null);
                                // resetField("district");
                                field.onChange(option);
                                if (option && reason !== "clear") {
                                  dispatch(
                                    actionGetProvince(option?.geonameId)
                                  );
                                }
                              }}
                            />
                          )}
                        />
                      </Grid>

                      <Grid xs={12} md={6}>
                        <Controller
                          name="provinceId"
                          control={control}
                          render={({ field }) => (
                            <CustomAutocomplete
                              fullWidth
                              options={dataProvince}
                              id="autocomplete-custom-province"
                              getOptionLabel={(option) => option.name || ""}
                              renderInput={(params) => (
                                <TextField
                                  variant="filled"
                                  shrink="true"
                                  {...params}
                                  label="Province"
                                  error={Boolean(errors.provinceId)}
                                  helperText={errors.provinceId?.message || ""}
                                />
                              )}
                              {...field}
                              onChange={(_, option, reason) => {
                                setValue("wardId", null);
                                setValue("districtId", null);
                                field.onChange(option);
                                if (option && reason !== "clear") {
                                  dispatch(
                                    actionGetDistrict(option?.geonameId)
                                  );
                                }
                              }}
                            />
                          )}
                        />
                      </Grid>

                      <Grid xs={12} md={6}>
                        <Controller
                          name="districtId"
                          control={control}
                          render={({ field }) => (
                            <CustomAutocomplete
                              fullWidth
                              options={dataDistrict}
                              id="autocomplete-custom-district"
                              getOptionLabel={(option) =>
                                findLabelById(
                                  dataDistrict,
                                  option?.geonameId
                                ) || ""
                              }
                              renderInput={(params) => (
                                <TextField
                                  variant="filled"
                                  shrink="true"
                                  {...params}
                                  label="District"
                                  error={Boolean(errors.districtId)}
                                  helperText={errors.districtId?.message || ""}
                                />
                              )}
                              {...field}
                              onChange={(_, option, reason) => {
                                resetField("wardId");
                                field.onChange(option);
                                if (option && reason !== "clear") {
                                  dispatch(actionGetWard(option?.geonameId));
                                }
                              }}
                            />
                          )}
                          disabled={!getValues("provinceId")}
                        />
                      </Grid>
                      <Grid xs={12} md={6}>
                        <Controller
                          name="wardId"
                          control={control}
                          render={({ field }) => (
                            <CustomAutocomplete
                              fullWidth
                              options={dataWard}
                              id="autocomplete-custom-ward"
                              getOptionLabel={(option) =>
                                findLabelById(dataWard, option?.geonameId) || ""
                              }
                              renderInput={(params) => (
                                <TextField
                                  variant="filled"
                                  shrink="true"
                                  {...params}
                                  label="Wards"
                                  error={Boolean(errors.wardId)}
                                  helperText={errors.wardId?.message || ""}
                                />
                              )}
                              {...field}
                              onChange={(_, option) => {
                                field.onChange(option);
                              }}
                            />
                          )}
                          disabled={
                            !getValues("districtId") || !getValues("provinceId")
                          }
                        />
                      </Grid>
                      <Grid xs={12} md={12}>
                        <Controller
                          name="street"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              variant="filled"
                              shrink="true"
                              {...field}
                              fullWidth
                              error={Boolean(errors.street)}
                              helperText={errors.street?.message || ""}
                              label="House number, street name"
                            />
                          )}
                        />
                      </Grid>
                      <Grid xs={12} md={12}>
                        <p>Gender</p>
                        <Controller
                          name="gender"
                          control={control}
                          defaultValue=""
                          render={({ field }) => (
                            <RadioGroup
                              {...field}
                              row
                              aria-label="gender"
                              error={Boolean(errors.gender)}
                            >
                              <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                              />
                              <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                              />
                            </RadioGroup>
                          )}
                        />
                      </Grid>
                      <Grid xs={12} md={6}>
                        <p>ID Card Front</p>
                        <FileUploaderSingle
                          setValue={setValue}
                          trigger={trigger}
                          error={errors.frontCard}
                          name="frontCard"
                        />
                      </Grid>
                      <Grid xs={12} md={6}>
                        <p>ID Card Back</p>
                        <FileUploaderSingle
                          setValue={setValue}
                          name="backCard"
                          trigger={trigger}
                          error={errors.backCard}
                        />
                      </Grid>
                      <Grid xs={12} md={6} className="mx-auto">
                        <p>Face photo with ID Card</p>
                        <FileUploaderSingle
                          setValue={setValue}
                          name="selfie"
                          trigger={trigger}
                          error={errors.selfie}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <button
                    type="type"
                    className="disabled:opacity-50 disabled:-translate-y-0 bg-primary-4 hover:-translate-y-1 duration-300 transition-all rounded-xl text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                  >
                    <span className="text-sm text-white block">
                      {" "}
                      Send authentication request (KYC)
                    </span>
                    {loadingKYC && (
                      <span
                        className="w-5 "
                        style={{ transform: "scale(0.3)" }}
                      >
                        <LoaderStyleOne />
                      </span>
                    )}
                  </button>
                </CardActions>
              </Card>
            </ThemeProvider>
          </form>
        </div>
      )}
    </div>
  );
};
