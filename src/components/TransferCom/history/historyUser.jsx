import CustomAutocomplete from "@/lib/mui/CustomAutocomplete";
import {
  Box,
  Button,
  Stack,
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
import { useDispatch } from "react-redux";

export default function TabHistory({ action, type }) {
  const dispatch = useDispatch();
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

  const [open, setOpen] = useState(false);
  const [transferDetail, setTransferDetail] = useState(null);
  const [historyFilter, setHistoryFilter] = useState({
    page: 0,
    rowsPerPage: 10,
    status: "",
  });

  const dataFilter = {
    page: historyFilter?.page,
    limit: historyFilter?.rowsPerPage,
    status: action !== "RECEIVER" ? historyFilter?.status : "COMPLETED",
    type: type,
    action: action,
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
    <div className="container">
      {action !== "RECEIVER" && (
        <CustomAutocomplete
          className="max-w-[300px] w-full ml-auto mt-2"
          options={OPTION_STATUS || []}
          renderInput={(params) => <TextField {...params} label="Trạng thái" />}
          onChange={(_, option, reason) => {
            setHistoryFilter({
              ...historyFilter,
              status: option?.value ?? null,
            });
          }}
        />
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>
                <p className="min-w-max">
                  {" "}
                  {action === "SENDER" ? "Đến" : "Từ"}{" "}
                  {type === "WALLET" ? "Địa chỉ" : "Tên đăng nhập"}
                </p>
              </TableCell>
              <TableCell>
                <p className="min-w-max">Số tiền</p>
              </TableCell>
              <TableCell>
                <p className="min-w-max">Số thực </p>
              </TableCell>
              <TableCell>
                <p className="min-w-max">Phí</p>
              </TableCell>
              <TableCell>
                <p className="min-w-max">Trạng thái</p>
              </TableCell>
              <TableCell>
                <p className="min-w-max">Ngày tạo</p>
              </TableCell>
              {action !== "RECEIVER" && (
                <TableCell>
                  <p className="min-w-max">Thao tác</p>
                </TableCell>
              )}
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
                  1
                </Typography>
              </TableCell>

              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              {/* {action !== "RECEIVER" && (
                <TableCell>
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
                          cancelTransferLoading
                        }
                        variant="contained"
                        color="error"
                        onClick={() => handleCancelTransfer(row?.id)}
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
                          setTransferDetail({
                            id: row?.id,
                            to: row?.to,
                          });
                          setOpen(true);
                        }}
                      >
                        Verify
                      </Button>
                    </div>
                  </Box>
                </TableCell>
              )} */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[2, 10, 15, 20, 25, 50, 100]}
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
