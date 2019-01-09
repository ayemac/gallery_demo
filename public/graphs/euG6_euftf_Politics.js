$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Politics\n  <br/>\n<\/h4>",
        align: "center"
      },
      yAxis: {
        title: {
          text: "Predicted Happiness (10 Point Scale)"
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
          showInLegend: true,
          marker: {
            enabled: false
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
        backgroundColor: "#f0f0f0",
        valueDecimals: 2,
        shared: true,
        borderWidth: 1,
        headerFormat: "Predicted Support for the E.U.",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "Politics",
              var: "euftf",
              displayName: "Politics",
              y: 5.6238,
              name: "Political Left"
            },
            {
              predicted: 5.3741,
              conf.low: 5.276,
              conf.high: 5.4721,
              id: "Politics",
              var: "euftf",
              displayName: "Politics",
              y: 5.3741,
              name: "Political Center"
            },
            {
              predicted: 5.4783,
              conf.low: 5.3786,
              conf.high: 5.578,
              id: "Politics",
              var: "euftf",
              displayName: "Politics",
              y: 5.4783,
              name: "Political Right"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "Politics",
              var: "euftf",
              displayName: "Politics",
              low: 5.53,
              high: 5.72,
              name: "Political Left"
            },
            {
              predicted: 5.3741,
              conf.low: 5.276,
              conf.high: 5.4721,
              id: "Politics",
              var: "euftf",
              displayName: "Politics",
              low: 5.28,
              high: 5.47,
              name: "Political Center"
            },
            {
              predicted: 5.4783,
              conf.low: 5.3786,
              conf.high: 5.578,
              id: "Politics",
              var: "euftf",
              displayName: "Politics",
              low: 5.38,
              high: 5.58,
              name: "Political Right"
            }
          ],
          type: "errorbar",
          showInLegend: false
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: ""
        }
      },
      legend: {
        enabled: false
      },
      colors: [
        #030303"
      ],
      chart: {
        backgroundColor: "transparent"
      }
    }
  );
});
