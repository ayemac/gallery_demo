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
        headerFormat: "Trust in Legal System Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 30115,
              mode: "#030303",
              y: 30115,
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
              n: 26279,
              mode: "#030303",
              y: 26279,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 35183,
              mode: "#030303",
              y: 35183,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 34326,
              mode: "#030303",
              y: 34326,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 60270,
              mode: "#68228B",
              y: 60270,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 39333,
              mode: "#030303",
              y: 39333,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 48107,
              mode: "#030303",
              y: 48107,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 46689,
              mode: "#030303",
              y: 46689,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 21168,
              mode: "#030303",
              y: 21168,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 12131,
              mode: "#030303",
              y: 12131,
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
          text: "Distribution of Trust in Legal System (10-point scale)"
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
