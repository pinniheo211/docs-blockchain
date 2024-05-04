import React from "react";
import Chart from "react-apexcharts";
const RadialBarChart = () => {
  const options = {
    series: [67],
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
          image: "../../assets/images/imgBackupWallet.png",
          imageWidth: 64,
          imageHeight: 64,
          imageClipped: false,
        },
        dataLabels: {
          name: {
            show: true,
            color: "#fff",
          },
          value: {
            show: true,
            color: "#fff",
            offsetY: 40,
            fontSize: "22px",
          },
        },
      },
    },
    colors: ["#F40074"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#451242"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Volatility"],
  };

  return (
    <div id="chart">
      <Chart
        options={options}
        series={options.series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default RadialBarChart;
