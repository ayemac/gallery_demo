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
        headerFormat: "Trust in Political Parties Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 53901,
              mode: "#030303",
              y: 53901,
              name: "0"
            },
            {
              nocFctr: "1",
              n: 30644,
              mode: "#030303",
              y: 30644,
              name: "1"
            },
            {
              nocFctr: "2",
              n: 39949,
              mode: "#030303",
              y: 39949,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 44599,
              mode: "#030303",
              y: 44599,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 38816,
              mode: "#030303",
              y: 38816,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 56930,
              mode: "#68228B",
              y: 56930,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 29462,
              mode: "#030303",
              y: 29462,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 21499,
              mode: "#030303",
              y: 21499,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 9567,
              mode: "#030303",
              y: 9567,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 2379,
              mode: "#030303",
              y: 2379,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 1878,
              mode: "#030303",
              y: 1878,
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
          text: "Distribution of Trust in Political Parties (10-point scale)"
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
