import { formatNumber } from "@/until/format";
import { useTheme } from "@mui/material/styles";
import dynamic from "next/dynamic";
import Chart from "react-apexcharts";

const donutColors = {
  series1: "#fdd835",
  series2: "#00d4bd",
  series3: "#826bf8",
  series4: "#1FD5EB",
  series5: "#ffa1a1",
  series6: "#ff6f00",
  series7: "#76ff03",
  series8: "#2979ff",
  series9: "#00b8d4",
  series10: "#ff4081",
};

const ApexDonutChart = () => {
  const theme = useTheme();
  // const formatName = (name) => {
  //   switch (name) {
  //     case "SeriesA: ":
  //       return "SeriesA 15% 150,000,000 0% at TGE, Cliff 6 months, linear distribution monthly 100% in 18 months";
  //     case "IDO Public Sale":
  //       return "IDO Public Sale 5% 50,000,000 Distribution 100% at listing";
  //     case "Advisor":
  //       return "Advisor 8.5% 85,000,000 TGE 0%, Cliff 12 months, linear distribution monthly 100% in 36 months%";
  //     case "Team":
  //       return "Team 10% 100,000,000 TGE 0% Cliff 12 months, linear distribution monthly 100% in 36 months";
  //     case "Ecosystem/Community":
  //       return "Ecosystem/Community 18% 180,000,000 25% at TGE, linear vest 48 months";
  //     case "Airdrop":
  //       return "Airdrop 1.5 15,000,000 TGE 0%, Cliff 3 months, distribution 100% in 3 month";
  //     case "Launch pool":
  //       return "Launch pool 3% 30,000,000 100% at TGE";
  //     case "Lab":
  //       return "Lab 4% 40,000,000 TGE 15%, Cliff 12 months, linear distribution monthly 85% in 36 months";
  //     case "Strategic":
  //       return "Strategic 6.5% 65,000,000 TGE 0% Cliff 12 months, linear distribution monthly 100% in 36 months";
  //     case "Foundation":
  //       return "Foundation 28.5% 285,000,000 Linear vest";
  //     default:
  //       return name;
  //   }
  // };

  const distributeSeriesPercentage = (percentage, total) => {
    const value = (percentage / 100) * total;
    return Math.round(value);
  };

  const series = [15, 5, 8.5, 10, 18, 1.5, 3, 4, 6.5, 28.5];
  const total = 1000000000;

  const options = {
    stroke: { width: 0 },
    labels: [
      "SeriesA",
      "IDO Public Sale",
      "Advisor",
      "Team",
      "Ecosystem/Community",
      "Airdrop",
      "Launch pool",
      "Lab",
      "Strategic",
      "Foundation",
    ],
    colors: [
      donutColors.series1,
      donutColors.series5,
      donutColors.series3,
      donutColors.series2,
    ],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${parseInt(val, 10)}%`,
    },
    legend: {
      position: "bottom",
      markers: { offsetX: -3 },
      labels: { colors: "#ffffff" },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: "20px",
              formatter: (val) => val,
            },
            value: {
              fontSize: "14px",
              color: "#ffffff",
              formatter: (val) =>
                `${formatNumber(distributeSeriesPercentage(val, total))} NOWC`,
            },
            total: {
              show: true,
              fontSize: "14px",
              fontWeight: "bold",
              label: "Total",
              formatter: () => `${formatNumber(total)} NOWC`,
              color: "#ffffff",
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "11px",
                  },
                  value: {
                    fontSize: "11px",
                  },
                  total: {
                    fontWeight: "bold",
                    fontSize: "11px",
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  return <Chart type="donut" height={400} options={options} series={series} />;
};

export default ApexDonutChart;
