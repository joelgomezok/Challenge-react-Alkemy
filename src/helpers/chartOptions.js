export const optionsHome = {
  xaxis: {
    categories: [
      "Intelligence",
      "Strength",
      "Speed",
      "Durability",
      "Power",
      "Combat",
    ],
    labels: {
      show: true,
      style: {
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 300,
        cssClass: "apexcharts-xaxis-label",
        colors: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ],
      },
    },
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    theme: "dark",
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2.5,
  },
  plotOptions: {
    radar: {
      size: 80,
      offsetX: -10,
      offsetY: 10,
    },
  },
  dataLabels: {
    enabled: true,
    background: {
      enabled: true,
      borderRadius:2,
    }
  },
};

export const optionsCard = {
  xaxis: {
    categories: [
      "Intelligence",
      "Strength",
      "Speed",
      "Durability",
      "Power",
      "Combat",
    ],
    labels: {
      show: true,
      style: {
        fontSize: "15px",
        colors: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ],
      },
    },
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    theme: "dark",
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2.5,
  },
  plotOptions: {
    radar: {
      size: 90,
      offsetY: -15,
      offsetX: -27,
    },
  },
  dataLabels: {
    enabled: true,
    background: {
      enabled: true,
      borderRadius:2,
    }
  },
};
