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
        headerFormat: "Immigration Good for Economy Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 23729,
              mode: "#030303",
              y: 23729,
              name: "0"
            },
            {
              nocFctr: "1",
              n: 16620,
              mode: "#030303",
              y: 16620,
              name: "1"
            },
            {
              nocFctr: "2",
              n: 27187,
              mode: "#030303",
              y: 27187,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 36741,
              mode: "#030303",
              y: 36741,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 34894,
              mode: "#030303",
              y: 34894,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 86075,
              mode: "#68228B",
              y: 86075,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 39197,
              mode: "#030303",
              y: 39197,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 43274,
              mode: "#030303",
              y: 43274,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 32781,
              mode: "#030303",
              y: 32781,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 9875,
              mode: "#030303",
              y: 9875,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 11283,
              mode: "#030303",
              y: 11283,
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
          text: "Distribution of Immigration Good for Economy (10-point scale)"
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
