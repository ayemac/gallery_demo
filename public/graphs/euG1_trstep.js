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
        headerFormat: "Trust in European Parliament Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 34790,
              mode: "#030303",
              y: 34790,
              name: "0"
            },
            {
              nocFctr: "1",
              n: 18291,
              mode: "#030303",
              y: 18291,
              name: "1"
            },
            {
              nocFctr: "2",
              n: 26682,
              mode: "#030303",
              y: 26682,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 35367,
              mode: "#030303",
              y: 35367,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 37201,
              mode: "#030303",
              y: 37201,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 71726,
              mode: "#68228B",
              y: 71726,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 39938,
              mode: "#030303",
              y: 39938,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 35291,
              mode: "#030303",
              y: 35291,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 22981,
              mode: "#030303",
              y: 22981,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 7578,
              mode: "#030303",
              y: 7578,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 5690,
              mode: "#030303",
              y: 5690,
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
          text: "Distribution of Trust in European Parliament (10-point scale)"
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
