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
        headerFormat: "Trust in Parliament Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 42756,
              mode: "#030303",
              y: 42756,
              name: "0"
            },
            {
              nocFctr: "1",
              n: 21475,
              mode: "#030303",
              y: 21475,
              name: "1"
            },
            {
              nocFctr: "2",
              n: 32060,
              mode: "#030303",
              y: 32060,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 42644,
              mode: "#030303",
              y: 42644,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 38683,
              mode: "#030303",
              y: 38683,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 69093,
              mode: "#68228B",
              y: 69093,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 39189,
              mode: "#030303",
              y: 39189,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 40044,
              mode: "#030303",
              y: 40044,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 28286,
              mode: "#030303",
              y: 28286,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 8602,
              mode: "#030303",
              y: 8602,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 7531,
              mode: "#030303",
              y: 7531,
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
          text: "Distribution of Trust in Parliament (10-point scale)"
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
