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
    headerFormat: "Immigration Good for Culture Level:  {point.x}<br>"
  },
  series: [
    {
      group: "group",
      data: [
        {
          nocFctr: "0",
          n: 17763,
          mode: "#030303",
          y: 17763,
          name: "0"
        },
        {
          nocFctr: "1",
          n: 13150,
          mode: "#030303",
          y: 13150,
          name: "1"
        },
        {
          nocFctr: "2",
          n: 21703,
          mode: "#030303",
          y: 21703,
          name: "2"
        },
        {
          nocFctr: "3",
          n: 29866,
          mode: "#030303",
          y: 29866,
          name: "3"
        },
        {
          nocFctr: "4",
          n: 29300,
          mode: "#030303",
          y: 29300,
          name: "4"
        },
        {
          nocFctr: "5",
          n: 73646,
          mode: "#68228B",
          y: 73646,
          name: "5"
        },
        {
          nocFctr: "6",
          n: 39006,
          mode: "#030303",
          y: 39006,
          name: "6"
        },
        {
          nocFctr: "7",
          n: 51801,
          mode: "#030303",
          y: 51801,
          name: "7"
        },
        {
          nocFctr: "8",
          n: 47438,
          mode: "#030303",
          y: 47438,
          name: "8"
        },
        {
          nocFctr: "9",
          n: 18194,
          mode: "#030303",
          y: 18194,
          name: "9"
        },
        {
          nocFctr: "10",
          n: 20630,
          mode: "#030303",
          y: 20630,
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
      text: "Distribution of Immigration Good for Culture (10-point scale)"
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
