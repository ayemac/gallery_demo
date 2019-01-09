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
        headerFormat: "Predicted Fairness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "union",
              var: "pplfair",
              displayName: "Union Member",
              y: 5.1436,
              name: "Current Member"
            },
            {
              predicted: 5.0704,
              conf.low: 5.002,
              conf.high: 5.1389,
              id: "union",
              var: "pplfair",
              displayName: "Union Member",
              y: 5.0704,
              name: "Former Member"
            },
            {
              predicted: 5.0878,
              conf.low: 5.0223,
              conf.high: 5.1534,
              id: "union",
              var: "pplfair",
              displayName: "Union Member",
              y: 5.0878,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "union",
              var: "pplfair",
              displayName: "Union Member",
              low: 5.07,
              high: 5.21,
              name: "Current Member"
            },
            {
              predicted: 5.0704,
              conf.low: 5.002,
              conf.high: 5.1389,
              id: "union",
              var: "pplfair",
              displayName: "Union Member",
              low: 5,
              high: 5.14,
              name: "Former Member"
            },
            {
              predicted: 5.0878,
              conf.low: 5.0223,
              conf.high: 5.1534,
              id: "union",
              var: "pplfair",
              displayName: "Union Member",
              low: 5.02,
              high: 5.15,
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
