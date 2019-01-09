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
        headerFormat: "Predicted Happiness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "union",
              var: "happy",
              displayName: "Union Member",
              y: 6.6558,
              name: "Current Member"
            },
            {
              predicted: 6.5276,
              conf.low: 6.4695,
              conf.high: 6.5858,
              id: "union",
              var: "happy",
              displayName: "Union Member",
              y: 6.5276,
              name: "Former Member"
            },
            {
              predicted: 6.6062,
              conf.low: 6.5505,
              conf.high: 6.6619,
              id: "union",
              var: "happy",
              displayName: "Union Member",
              y: 6.6062,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "union",
              var: "happy",
              displayName: "Union Member",
              low: 6.6,
              high: 6.71,
              name: "Current Member"
            },
            {
              predicted: 6.5276,
              conf.low: 6.4695,
              conf.high: 6.5858,
              id: "union",
              var: "happy",
              displayName: "Union Member",
              low: 6.47,
              high: 6.59,
              name: "Former Member"
            },
            {
              predicted: 6.6062,
              conf.low: 6.5505,
              conf.high: 6.6619,
              id: "union",
              var: "happy",
              displayName: "Union Member",
              low: 6.55,
              high: 6.66,
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
