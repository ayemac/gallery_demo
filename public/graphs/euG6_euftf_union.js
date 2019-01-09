$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Union Member\n  <br/>\n<\/h4>",
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
              id: "union",
              var: "euftf",
              displayName: "Union Member",
              y: 5.6238,
              name: "Current Member"
            },
            {
              predicted: 5.6367,
              conf.low: 5.5398,
              conf.high: 5.7335,
              id: "union",
              var: "euftf",
              displayName: "Union Member",
              y: 5.6367,
              name: "Former Member"
            },
            {
              predicted: 5.7068,
              conf.low: 5.6142,
              conf.high: 5.7993,
              id: "union",
              var: "euftf",
              displayName: "Union Member",
              y: 5.7068,
              name: "Non-member"
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
              id: "union",
              var: "euftf",
              displayName: "Union Member",
              low: 5.53,
              high: 5.72,
              name: "Current Member"
            },
            {
              predicted: 5.6367,
              conf.low: 5.5398,
              conf.high: 5.7335,
              id: "union",
              var: "euftf",
              displayName: "Union Member",
              low: 5.54,
              high: 5.73,
              name: "Former Member"
            },
            {
              predicted: 5.7068,
              conf.low: 5.6142,
              conf.high: 5.7993,
              id: "union",
              var: "euftf",
              displayName: "Union Member",
              low: 5.61,
              high: 5.8,
              name: "Non-member"
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
