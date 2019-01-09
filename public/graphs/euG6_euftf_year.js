$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Year\n  <br/>\n<\/h4>",
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
              id: "year",
              var: "euftf",
              displayName: "Year",
              y: 5.6238,
              name: "2004"
            },
            {
              predicted: 5.3719,
              conf.low: 5.2735,
              conf.high: 5.4702,
              id: "year",
              var: "euftf",
              displayName: "Year",
              y: 5.3719,
              name: "2006"
            },
            {
              predicted: 5.3774,
              conf.low: 5.279,
              conf.high: 5.4758,
              id: "year",
              var: "euftf",
              displayName: "Year",
              y: 5.3774,
              name: "2008"
            },
            {
              predicted: 5.1411,
              conf.low: 5.0427,
              conf.high: 5.2396,
              id: "year",
              var: "euftf",
              displayName: "Year",
              y: 5.1411,
              name: "2012"
            },
            {
              predicted: 5.1104,
              conf.low: 5.0118,
              conf.high: 5.209,
              id: "year",
              var: "euftf",
              displayName: "Year",
              y: 5.1104,
              name: "2014"
            },
            {
              predicted: 5.1654,
              conf.low: 5.0662,
              conf.high: 5.2646,
              id: "year",
              var: "euftf",
              displayName: "Year",
              y: 5.1654,
              name: "2016"
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
              id: "year",
              var: "euftf",
              displayName: "Year",
              low: 5.53,
              high: 5.72,
              name: "2004"
            },
            {
              predicted: 5.3719,
              conf.low: 5.2735,
              conf.high: 5.4702,
              id: "year",
              var: "euftf",
              displayName: "Year",
              low: 5.27,
              high: 5.47,
              name: "2006"
            },
            {
              predicted: 5.3774,
              conf.low: 5.279,
              conf.high: 5.4758,
              id: "year",
              var: "euftf",
              displayName: "Year",
              low: 5.28,
              high: 5.48,
              name: "2008"
            },
            {
              predicted: 5.1411,
              conf.low: 5.0427,
              conf.high: 5.2396,
              id: "year",
              var: "euftf",
              displayName: "Year",
              low: 5.04,
              high: 5.24,
              name: "2012"
            },
            {
              predicted: 5.1104,
              conf.low: 5.0118,
              conf.high: 5.209,
              id: "year",
              var: "euftf",
              displayName: "Year",
              low: 5.01,
              high: 5.21,
              name: "2014"
            },
            {
              predicted: 5.1654,
              conf.low: 5.0662,
              conf.high: 5.2646,
              id: "year",
              var: "euftf",
              displayName: "Year",
              low: 5.07,
              high: 5.26,
              name: "2016"
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
