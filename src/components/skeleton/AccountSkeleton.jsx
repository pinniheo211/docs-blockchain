import { Badge, Grid, Skeleton } from "@mui/material";

export const AccountSkeleton = () => {
  return (
    <div className="container max-w-6xl mx-auto flex items-center justify-center flex-col gap-3 mt-4">
      <Badge badgeContent={"Level 4"} color="success" variant="dot">
        <Skeleton variant="circular" width={300} height={300} />
      </Badge>
      <Skeleton animation="wave" width={200} height={50}></Skeleton>
      <Skeleton
        animation="wave"
        className="my-5"
        width={200}
        height={50}
      ></Skeleton>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Skeleton animation="wave" className="w-full" height={70}></Skeleton>
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton animation="wave" className="w-full" height={70}></Skeleton>
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton animation="wave" className="w-full" height={70}></Skeleton>
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton animation="wave" className="w-full" height={70}></Skeleton>
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton animation="wave" className="w-full" height={70}></Skeleton>
        </Grid>
        <Grid item xs={12} md={6}>
          <Skeleton animation="wave" className="w-full" height={70}></Skeleton>
        </Grid>
      </Grid>
    </div>
  );
};
