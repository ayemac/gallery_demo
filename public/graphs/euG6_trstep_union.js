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
        headerFormat: "Predicted Trust in European Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "union",
              var: "trstep",
              displayName: "Union Member",
              y: 4.842,
              name: "Current Member"
            },
            {
              predicted: 4.8125,
              conf.low: 4.7314,
              conf.high: 4.8936,
              id: "union",
              var: "trstep",
              displayName: "Union Member",
              y: 4.8125,
              name: "Former Member"
            },
            {
              predicted: 4.8651,
              conf.low: 4.7874,
              conf.high: 4.9428,
              id: "union",
              var: "trstep",
              displayName: "Union Member",
              y: 4.8651,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "union",
              var: "trstep",
              displayName: "Union Member",
              low: 4.76,
              high: 4.92,
              name: "Current Member"
            },
            {
              predicted: 4.8125,
              conf.low: 4.7314,
              conf.high: 4.8936,
              id: "union",
              var: "trstep",
              displayName: "Union Member",
              low: 4.73,
              high: 4.89,
              name: "Former Member"
            },
            {
              predicted: 4.8651,
              conf.low: 4.7874,
              conf.high: 4.9428,
              id: "union",
              var: "trstep",
              displayName: "Union Member",
              low: 4.79,
              high: 4.94,
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
