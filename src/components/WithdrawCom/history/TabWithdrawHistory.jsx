import CustomAutocomplete from "@/lib/mui/CustomAutocomplete";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function TabWithDrawHistory({ t }) {
  const statusObj = {
    CANCEL: { text: "Cancel", color: "error" },
    PENDING: { text: "Pending", color: "secondary" },
    VERIFY: { text: "Verify", color: "warning" },
    COMPLETED: { text: "Completed", color: "success" },
  };

  const OPTION_STATUS = [
    {
      label: "CANCEL",
      value: "CANCEL",
    },
    {
      label: "PENDING",
      value: "PENDING",
    },
    {
      label: "VERIFY",
      value: "VERIFY",
    },
    {
      label: "COMPLETED",
      value: "COMPLETED",
    },
  ];

  const [historyFilter, setHistoryFilter] = useState({
    page: 0,
    rowsPerPage: 10,
    tabHistory: "BALANCE",
    status: "",
  });

  const dataFilter = {
    page: historyFilter?.page,
    limit: historyFilter?.rowsPerPage,
    type: historyFilter?.tabHistory,
    status: historyFilter?.status,
  };

  const handleChangePage = (event, newPage) => {
    setHistoryFilter({ ...historyFilter, page: newPage });
  };

  const handleChangeRowsPerPage = (event) => {
    setHistoryFilter({
      ...historyFilter,
      rowsPerPage: +event.target.value,
      page: 0,
    });
  };

  return (
    <div>
      <CustomAutocomplete
        className="max-w-[300px] w-full ml-auto mt-2"
        options={OPTION_STATUS || []}
        renderInput={(params) => <TextField {...params} label="Trạng thái" />}
        onChange={(_, option, reason) => {
          setHistoryFilter({ ...historyFilter, status: option?.value ?? null });
        }}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>
                <p className="min-w-max">Địa chỉ</p>
              </TableCell>
              <TableCell>
                <p className="min-w-max">Số tiền</p>
              </TableCell>
              <TableCell>
                <p className="min-w-max">Số thực</p>
              </TableCell>
              <TableCell>Phí</TableCell>
              <TableCell>
                <p className="min-w-max">Trạng thái</p>
              </TableCell>
              <TableCell>
                <p className="min-w-max">Ngày tạo</p>
              </TableCell>
              <TableCell>
                <p className="min-w-max">Thao tác</p>
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
                <Typography
                  noWrap
                  sx={{
                    fontWeight: 500,
                    color: "text.secondary",
                    paddingLeft: "5px",
                  }}
                >
                  {/* {historyFilter?.page * historyFilter?.rowsPerPage +
                        1 * (index + 1)} */}
                  1
                </Typography>
              </TableCell>

              <TableCell>
                {/* <Tooltip title={row?.wallet_address ?? ""}>
                  <Typography
                    noWrap
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      color: "text.secondary",
                    }}
                  >
                    {row?.wallet_address
                          ? formatAddressDot(row?.wallet_address, 10, 10)
                          : ""}
                  </Typography>
                </Tooltip> */}
              </TableCell>
              <TableCell>
                {/* <p className=" py-1.5 min-w-max  ">
                      {row?.amount ? formatMoneyNowp(row?.amount) : 0}{" "}
                      <span className="text-xs font-medium">{row?.code}</span>
                    </p> */}
              </TableCell>
              <TableCell>
                {/* <p className=" py-1.5 min-w-max  ">
                      {row?.real_quantity
                        ? formatMoneyNowp(row?.real_quantity)
                        : 0}{" "}
                      <span className="text-xs font-medium">{row?.code}</span>
                    </p> */}
              </TableCell>
              <TableCell>
                {/* <p className=" py-1.5 min-w-max  ">
                      {row?.fee ? formatMoneyNowp(row?.fee) : 0}{" "}
                      <span className="text-xs font-medium">{row?.code}</span>
                    </p> */}
              </TableCell>
              <TableCell>
                {/* <CustomChip
                  size="small"
                  skin="light"
                  label={statusObj[row.status]?.text}
                  color={statusObj[row.status]?.color}
                /> */}
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {/* <Typography
                    noWrap
                    variant="body2"
                    sx={{ color: "text.disabled" }}
                  >
                    {DateFormat(row?.create_at)}
                  </Typography> */}
                </Box>
              </TableCell>
              {/* <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          size="small"
                          disabled={
                            row?.status === "CANCEL" ||
                            row?.status === "COMPLETED" ||
                            cancelWithdrawLoading
                          }
                          variant="contained"
                          color="error"
                          onClick={() => handleCancelWithdraw(row?.id)}
                          className="flex items-center justify-center gap-1"
                        >
                          <span>Cancel</span>
                        </Button>
                        <Button
                          size="small"
                          disabled={
                            row?.status === "CANCEL" ||
                            row?.status === "PENDING" ||
                            row?.status === "COMPLETED"
                          }
                          variant="contained"
                          onClick={() => {
                            setWithdrawDetail({
                              id: row?.id,
                              wallet_address: row?.wallet_address,
                            });
                            setOpen(true);
                          }}
                        >
                          Verify
                        </Button>
                      </div>
                    </Box>
                  </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
        component="div"
        count={dataHistory?.data?.count || 0}
        rowsPerPage={historyFilter?.rowsPerPage}
        page={historyFilter?.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </div>
  );
}
