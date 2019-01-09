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
    headerFormat: "Job Satisfaction Level:  {point.x}<br>"
  },
  series: [
    {
      group: "group",
      data: [
        {
          nocFctr: "0",
          n: 484,
          mode: "#030303",
          y: 484,
          name: "0"
        },
        {
          nocFctr: "1",
          n: 382,
          mode: "#030303",
          y: 382,
          name: "1"
        },
        {
          nocFctr: "2",
          n: 836,
          mode: "#030303",
          y: 836,
          name: "2"
        },
        {
          nocFctr: "3",
          n: 1453,
          mode: "#030303",
          y: 1453,
          name: "3"
        },
        {
          nocFctr: "4",
          n: 1653,
          mode: "#030303",
          y: 1653,
          name: "4"
        },
        {
          nocFctr: "5",
          n: 4492,
          mode: "#030303",
          y: 4492,
          name: "5"
        },
        {
          nocFctr: "6",
          n: 4503,
          mode: "#030303",
          y: 4503,
          name: "6"
        },
        {
          nocFctr: "7",
          n: 8643,
          mode: "#030303",
          y: 8643,
          name: "7"
        },
        {
          nocFctr: "8",
          n: 12964,
          mode: "#030303",
          y: 12964,
          name: "8"
        },
        {
          nocFctr: "9",
          n: 7737,
          mode: "#030303",
          y: 7737,
          name: "9"
        },
        {
          nocFctr: "10",
          n: 6679,
          mode: "#030303",
          y: 6679,
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
      text: "Distribution of Job Satisfaction (10-point scale)"
    }
  },
  legend: {
    enabled: false
  },
  colors: ["#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303"],
  chart: {
    backgroundColor: "transparent"
  }
}
