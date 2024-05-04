import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const SkeletonWithdraw = () => {
  return (
    <>
      <Skeleton animation="wave" width="200px" height="50px"></Skeleton>

      <Skeleton
        variant="rectangular"
        className=" mb-4 rounded-lg"
        height="30px"
        width="100px"
      />

      <div className="mt-10 w-full flex items-center justify-center flex-col gap-5">
        <Skeleton
          variant="rectangular"
          className=" mb-4 rounded-lg"
          height="30px"
          width="200px"
        />

        <div className="mt-10 flex flex-col  gap-10 w-full lg:w-2/4">
          <Skeleton
            variant="rectangular"
            className="w-full rounded-lg"
            height="50px"
          />
          <Skeleton
            variant="rectangular"
            className="w-full rounded-lg"
            height="50px"
          />

          <Skeleton
            variant="rectangular"
            className="w-full rounded-lg"
            height="50px"
          />
          <Skeleton
            variant="rectangular"
            className="w-full rounded-lg"
            height="50px"
          />
        </div>
      </div>
      <div className="mt-10">
        <Skeleton variant="rounded" className="mb-5" width={200} height={30} />

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                "& .MuiTableCell-root": {
                  borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                },
              }}
            >
              <TableRow>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>

                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
                <TableCell>
                  <Skeleton variant="rounded" width={50} height={10} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default SkeletonWithdraw;
