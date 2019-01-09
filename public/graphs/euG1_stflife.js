$(function () {
  $('#container').highcharts({
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
        headerFormat: "Life Satisfaction Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 7448,
              mode: "#030303",
              y: 7448,
              name: "0"
            },
            {
              nocFctr: "1",
              n: 5153,
              mode: "#030303",
              y: 5153,
              name: "1"
            },
            {
              nocFctr: "2",
              n: 9431,
              mode: "#030303",
              y: 9431,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 16470,
              mode: "#030303",
              y: 16470,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 17646,
              mode: "#030303",
              y: 17646,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 44695,
              mode: "#030303",
              y: 44695,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 34225,
              mode: "#030303",
              y: 34225,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 62639,
              mode: "#030303",
              y: 62639,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 90919,
              mode: "#68228B",
              y: 90919,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 52007,
              mode: "#030303",
              y: 52007,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 38620,
              mode: "#030303",
              y: 38620,
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
          text: "Distribution of Life Satisfaction (10-point scale)"
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
  );
});
