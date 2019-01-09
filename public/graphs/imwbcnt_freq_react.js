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
    headerFormat: "Immigration Good for Country Level:  {point.x}<br>"
  },
  series: [
    {
      group: "group",
      data: [
        {
          nocFctr: "0",
          n: 20038,
          mode: "#030303",
          y: 20038,
          name: "0"
        },
        {
          nocFctr: "1",
          n: 14804,
          mode: "#030303",
          y: 14804,
          name: "1"
        },
        {
          nocFctr: "2",
          n: 25525,
          mode: "#030303",
          y: 25525,
          name: "2"
        },
        {
          nocFctr: "3",
          n: 35957,
          mode: "#030303",
          y: 35957,
          name: "3"
        },
        {
          nocFctr: "4",
          n: 37755,
          mode: "#030303",
          y: 37755,
          name: "4"
        },
        {
          nocFctr: "5",
          n: 106912,
          mode: "#68228B",
          y: 106912,
          name: "5"
        },
        {
          nocFctr: "6",
          n: 36094,
          mode: "#030303",
          y: 36094,
          name: "6"
        },
        {
          nocFctr: "7",
          n: 36478,
          mode: "#030303",
          y: 36478,
          name: "7"
        },
        {
          nocFctr: "8",
          n: 28021,
          mode: "#030303",
          y: 28021,
          name: "8"
        },
        {
          nocFctr: "9",
          n: 9169,
          mode: "#030303",
          y: 9169,
          name: "9"
        },
        {
          nocFctr: "10",
          n: 10248,
          mode: "#030303",
          y: 10248,
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
      text: "Distribution of Immigration Good for Country (10-point scale)"
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
