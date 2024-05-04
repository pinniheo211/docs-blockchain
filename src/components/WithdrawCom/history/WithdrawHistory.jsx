import { Card, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import TabWithDrawHistory from "./TabWithdrawHistory";

export default function WithDrawHistory() {
  const [historyFilter, setHistoryFilter] = useState({
    tabHistory: "BALANCE",
  });

  const handleChangeHistory = (event, newValue) => {
    setHistoryFilter({ ...historyFilter, tabHistory: newValue });
  };

  return (
    <div className="mt-3">
      <Card className="!shadow p-10">
        {historyFilter.tabHistory === "BALANCE" ? (
          <TabWithDrawHistory />
        ) : (
          // <TabWithDrawRemainHistory t={t} />
          <div></div>
        )}
      </Card>
    </div>
  );
}
