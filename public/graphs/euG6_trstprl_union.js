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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "union",
              var: "trstprl",
              displayName: "Union Member",
              y: 4.6353,
              name: "Current Member"
            },
            {
              predicted: 4.5116,
              conf.low: 4.4362,
              conf.high: 4.587,
              id: "union",
              var: "trstprl",
              displayName: "Union Member",
              y: 4.5116,
              name: "Former Member"
            },
            {
              predicted: 4.5734,
              conf.low: 4.5011,
              conf.high: 4.6456,
              id: "union",
              var: "trstprl",
              displayName: "Union Member",
              y: 4.5734,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "union",
              var: "trstprl",
              displayName: "Union Member",
              low: 4.56,
              high: 4.71,
              name: "Current Member"
            },
            {
              predicted: 4.5116,
              conf.low: 4.4362,
              conf.high: 4.587,
              id: "union",
              var: "trstprl",
              displayName: "Union Member",
              low: 4.44,
              high: 4.59,
              name: "Former Member"
            },
            {
              predicted: 4.5734,
              conf.low: 4.5011,
              conf.high: 4.6456,
              id: "union",
              var: "trstprl",
              displayName: "Union Member",
              low: 4.5,
              high: 4.65,
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
