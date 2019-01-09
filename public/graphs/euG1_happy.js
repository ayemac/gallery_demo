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
        headerFormat: "Happiness Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 3092,
              mode: "#030303",
              y: 3092,
              name: "0"
            },
            {
              nocFctr: "1",
              n: 2892,
              mode: "#030303",
              y: 2892,
              name: "1"
            },
            {
              nocFctr: "2",
              n: 5749,
              mode: "#030303",
              y: 5749,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 10939,
              mode: "#030303",
              y: 10939,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 13463,
              mode: "#030303",
              y: 13463,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 41586,
              mode: "#030303",
              y: 41586,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 33861,
              mode: "#030303",
              y: 33861,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 67454,
              mode: "#030303",
              y: 67454,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 100875,
              mode: "#68228B",
              y: 100875,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 59646,
              mode: "#030303",
              y: 59646,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 39112,
              mode: "#030303",
              y: 39112,
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
          text: "Distribution of Happiness (10-point scale)"
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
