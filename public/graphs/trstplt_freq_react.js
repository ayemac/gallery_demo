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
    headerFormat: "Trust in Politicians Level:  {point.x}<br>"
  },
  series: [
    {
      group: "group",
      data: [
        {
          nocFctr: "0",
          n: 60988,
          mode: "#030303",
          y: 60988,
          name: "0"
        },
        {
          nocFctr: "1",
          n: 33310,
          mode: "#030303",
          y: 33310,
          name: "1"
        },
        {
          nocFctr: "2",
          n: 44542,
          mode: "#030303",
          y: 44542,
          name: "2"
        },
        {
          nocFctr: "3",
          n: 49494,
          mode: "#030303",
          y: 49494,
          name: "3"
        },
        {
          nocFctr: "4",
          n: 43548,
          mode: "#030303",
          y: 43548,
          name: "4"
        },
        {
          nocFctr: "5",
          n: 63930,
          mode: "#68228B",
          y: 63930,
          name: "5"
        },
        {
          nocFctr: "6",
          n: 34775,
          mode: "#030303",
          y: 34775,
          name: "6"
        },
        {
          nocFctr: "7",
          n: 25715,
          mode: "#030303",
          y: 25715,
          name: "7"
        },
        {
          nocFctr: "8",
          n: 11629,
          mode: "#030303",
          y: 11629,
          name: "8"
        },
        {
          nocFctr: "9",
          n: 2875,
          mode: "#030303",
          y: 2875,
          name: "9"
        },
        {
          nocFctr: "10",
          n: 2193,
          mode: "#030303",
          y: 2193,
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
      text: "Distribution of Trust in Politicians (10-point scale)"
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
