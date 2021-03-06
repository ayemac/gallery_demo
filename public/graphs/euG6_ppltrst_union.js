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
        headerFormat: "Predicted Social Trust",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "union",
              var: "ppltrst",
              displayName: "Union Member",
              y: 4.1117,
              name: "Current Member"
            },
            {
              predicted: 4.0284,
              conf.low: 3.9565,
              conf.high: 4.1002,
              id: "union",
              var: "ppltrst",
              displayName: "Union Member",
              y: 4.0284,
              name: "Former Member"
            },
            {
              predicted: 4.0565,
              conf.low: 3.9877,
              conf.high: 4.1253,
              id: "union",
              var: "ppltrst",
              displayName: "Union Member",
              y: 4.0565,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "union",
              var: "ppltrst",
              displayName: "Union Member",
              low: 4.04,
              high: 4.18,
              name: "Current Member"
            },
            {
              predicted: 4.0284,
              conf.low: 3.9565,
              conf.high: 4.1002,
              id: "union",
              var: "ppltrst",
              displayName: "Union Member",
              low: 3.96,
              high: 4.1,
              name: "Former Member"
            },
            {
              predicted: 4.0565,
              conf.low: 3.9877,
              conf.high: 4.1253,
              id: "union",
              var: "ppltrst",
              displayName: "Union Member",
              low: 3.99,
              high: 4.13,
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
