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
        headerFormat: "Social Trust Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 23566,
              mode: "#030303",
              y: 23566,
              name: "0"
            },
            {
              nocFctr: "1",
              n: 16982,
              mode: "#030303",
              y: 16982,
              name: "1"
            },
            {
              nocFctr: "2",
              n: 26913,
              mode: "#030303",
              y: 26913,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 39602,
              mode: "#030303",
              y: 39602,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 36328,
              mode: "#030303",
              y: 36328,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 76115,
              mode: "#68228B",
              y: 76115,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 40844,
              mode: "#030303",
              y: 40844,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 56323,
              mode: "#030303",
              y: 56323,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 43751,
              mode: "#030303",
              y: 43751,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 11866,
              mode: "#030303",
              y: 11866,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 7566,
              mode: "#030303",
              y: 7566,
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
          text: "Distribution of Social Trust (10-point scale)"
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
