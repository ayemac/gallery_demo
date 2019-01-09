export default {
  title: {
    text: null
  },
  yAxis: {
    title: {
      text: ""
    },
    type: "linear"
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  plotOptions: {
    series: {
      turboThreshold: 0,
      showInLegend: false,
      marker: {
        enabled: true
      }
    },
    treemap: {
      layoutAlgorithm: "squarified"
    },
    bubble: {
      minSize: 5,
      maxSize: 25
    },
    scatter: {
      marker: {
        symbol: "circle"
      }
    },
    bar: {
      dataLabels: {
        enabled: true,
        format: "{point.y}"
      },
      enableMouseTracking: true
    },
    animation: true
  },
  annotationsOptions: {
    enabledButtons: false
  },
  tooltip: {
    delayForDisplay: 10,
    crosshairs: {
      enabled: true,
      color: "#f7f2e6"
    },
    backgroundColor: "#ffffff",
    shared: true,
    borderWidth: 1,
    headerFormat: "Helpfulness Level:  {point.x}<br>"
  },
  series: [
    {
      group: "group",
      data: [
        {
          nocFctr: "0",
          n: 18590,
          mode: "#030303",
          y: 18590,
          name: "0"
        },
        {
          nocFctr: "1",
          n: 17684,
          mode: "#030303",
          y: 17684,
          name: "1"
        },
        {
          nocFctr: "2",
          n: 31155,
          mode: "#030303",
          y: 31155,
          name: "2"
        },
        {
          nocFctr: "3",
          n: 44383,
          mode: "#030303",
          y: 44383,
          name: "3"
        },
        {
          nocFctr: "4",
          n: 41108,
          mode: "#030303",
          y: 41108,
          name: "4"
        },
        {
          nocFctr: "5",
          n: 78715,
          mode: "#68228B",
          y: 78715,
          name: "5"
        },
        {
          nocFctr: "6",
          n: 44517,
          mode: "#030303",
          y: 44517,
          name: "6"
        },
        {
          nocFctr: "7",
          n: 50528,
          mode: "#030303",
          y: 50528,
          name: "7"
        },
        {
          nocFctr: "8",
          n: 35211,
          mode: "#030303",
          y: 35211,
          name: "8"
        },
        {
          nocFctr: "9",
          n: 10239,
          mode: "#030303",
          y: 10239,
          name: "9"
        },
        {
          nocFctr: "10",
          n: 6983,
          mode: "#030303",
          y: 6983,
          name: "10"
        }
      ],
      type: "column",
      name: "Frequency",
      colorByPoint: true
    }
  ],
  xAxis: {
    type: "category",
    title: {
      text: "Distribution of Helpfulness (10-point scale)"
    }
  },
  legend: {
    enabled: false
  },
  colors: ["#030303", "#030303", "#030303", "#030303", "#030303", "#68228B", "#030303", "#030303", "#030303", "#030303", "#030303"],
  chart: {
    backgroundColor: "transparent"
  }
}
