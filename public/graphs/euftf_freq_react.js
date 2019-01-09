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
    headerFormat: "Support for the E.U. Level:  {point.x}<br>"
  },
  series: [
    {
      group: "group",
      data: [
        {
          nocFctr: "0",
          n: 16917,
          mode: "#030303",
          y: 16917,
          name: "0"
        },
        {
          nocFctr: "1",
          n: 10413,
          mode: "#030303",
          y: 10413,
          name: "1"
        },
        {
          nocFctr: "2",
          n: 17726,
          mode: "#030303",
          y: 17726,
          name: "2"
        },
        {
          nocFctr: "3",
          n: 23764,
          mode: "#030303",
          y: 23764,
          name: "3"
        },
        {
          nocFctr: "4",
          n: 22815,
          mode: "#030303",
          y: 22815,
          name: "4"
        },
        {
          nocFctr: "5",
          n: 57236,
          mode: "#030303",
          y: 57236,
          name: "5"
        },
        {
          nocFctr: "6",
          n: 26175,
          mode: "#030303",
          y: 26175,
          name: "6"
        },
        {
          nocFctr: "7",
          n: 28476,
          mode: "#030303",
          y: 28476,
          name: "7"
        },
        {
          nocFctr: "8",
          n: 24949,
          mode: "#030303",
          y: 24949,
          name: "8"
        },
        {
          nocFctr: "9",
          n: 10156,
          mode: "#030303",
          y: 10156,
          name: "9"
        },
        {
          nocFctr: "10",
          n: 17637,
          mode: "#030303",
          y: 17637,
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
      text: "Distribution of Support for the E.U. (10-point scale)"
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
