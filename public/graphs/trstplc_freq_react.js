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
    headerFormat: "Trust in Police Level:  {point.x}<br>"
  },
  series: [
    {
      group: "group",
      data: [
        {
          nocFctr: "0",
          n: 19878,
          mode: "#030303",
          y: 19878,
          name: "0"
        },
        {
          nocFctr: "1",
          n: 11429,
          mode: "#030303",
          y: 11429,
          name: "1"
        },
        {
          nocFctr: "2",
          n: 17412,
          mode: "#030303",
          y: 17412,
          name: "2"
        },
        {
          nocFctr: "3",
          n: 24267,
          mode: "#030303",
          y: 24267,
          name: "3"
        },
        {
          nocFctr: "4",
          n: 26739,
          mode: "#030303",
          y: 26739,
          name: "4"
        },
        {
          nocFctr: "5",
          n: 55718,
          mode: "#030303",
          y: 55718,
          name: "5"
        },
        {
          nocFctr: "6",
          n: 41253,
          mode: "#030303",
          y: 41253,
          name: "6"
        },
        {
          nocFctr: "7",
          n: 58940,
          mode: "#030303",
          y: 58940,
          name: "7"
        },
        {
          nocFctr: "8",
          n: 64470,
          mode: "#68228B",
          y: 64470,
          name: "8"
        },
        {
          nocFctr: "9",
          n: 33304,
          mode: "#030303",
          y: 33304,
          name: "9"
        },
        {
          nocFctr: "10",
          n: 22766,
          mode: "#030303",
          y: 22766,
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
      text: "Distribution of Trust in Police (10-point scale)"
    }
  },
  legend: {
    enabled: false
  },
  colors: ["#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#030303", "#68228B", "#030303", "#030303"],
  chart: {
    backgroundColor: "transparent"
  }
}
