import { Card, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import TabHistory from "./historyUser";
export default function TransferHistory({ type }) {
  const [historyFilter, setHistoryFilter] = useState({
    tabHistory: "SENDER",
  });

  const handleChangeHistory = (event, newValue) => {
    setHistoryFilter({ ...historyFilter, tabHistory: newValue });
  };

  return (
    <div className="mt-10">
      <span className="font-semibold text-2xl text-qblacktext">
        Chuyển tiền {type === "WALLET" ? "qua địa chỉ" : "qua tên đăng nhập"}
      </span>
      <div className="mt-3">
        <Card className="!shadow">
          <Tabs
            value={historyFilter.tabHistory}
            onChange={handleChangeHistory}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
          >
            <Tab value="SENDER" label="Lịch sử người gửi" />
            <Tab value="RECEIVER" label="Lịch sử người nhận" />
          </Tabs>
          <TabHistory action={historyFilter.tabHistory} type={type} />
        </Card>
      </div>
    </div>
  );
}
