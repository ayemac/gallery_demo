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
        headerFormat: "Fairness Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 12483,
              mode: "#030303",
              y: 12483,
              name: "0"
            },
            {
              nocFctr: "1",
              n: 10847,
              mode: "#030303",
              y: 10847,
              name: "1"
            },
            {
              nocFctr: "2",
              n: 19885,
              mode: "#030303",
              y: 19885,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 31000,
              mode: "#030303",
              y: 31000,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 32531,
              mode: "#030303",
              y: 32531,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 78220,
              mode: "#68228B",
              y: 78220,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 43281,
              mode: "#030303",
              y: 43281,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 64422,
              mode: "#030303",
              y: 64422,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 55944,
              mode: "#030303",
              y: 55944,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 17858,
              mode: "#030303",
              y: 17858,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 11027,
              mode: "#030303",
              y: 11027,
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
          text: "Distribution of Fairness (10-point scale)"
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
  );
});
