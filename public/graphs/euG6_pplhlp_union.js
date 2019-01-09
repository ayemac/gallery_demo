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
        headerFormat: "Predicted Helpfulness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "union",
              var: "pplhlp",
              displayName: "Union Member",
              y: 4.4109,
              name: "Current Member"
            },
            {
              predicted: 4.314,
              conf.low: 4.2444,
              conf.high: 4.3836,
              id: "union",
              var: "pplhlp",
              displayName: "Union Member",
              y: 4.314,
              name: "Former Member"
            },
            {
              predicted: 4.3679,
              conf.low: 4.3013,
              conf.high: 4.4345,
              id: "union",
              var: "pplhlp",
              displayName: "Union Member",
              y: 4.3679,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "union",
              var: "pplhlp",
              displayName: "Union Member",
              low: 4.34,
              high: 4.48,
              name: "Current Member"
            },
            {
              predicted: 4.314,
              conf.low: 4.2444,
              conf.high: 4.3836,
              id: "union",
              var: "pplhlp",
              displayName: "Union Member",
              low: 4.24,
              high: 4.38,
              name: "Former Member"
            },
            {
              predicted: 4.3679,
              conf.low: 4.3013,
              conf.high: 4.4345,
              id: "union",
              var: "pplhlp",
              displayName: "Union Member",
              low: 4.3,
              high: 4.43,
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
