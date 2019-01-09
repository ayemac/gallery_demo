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
        headerFormat: "Predicted Life Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "union",
              var: "stflife",
              displayName: "Union Member",
              y: 6.0801,
              name: "Current Member"
            },
            {
              predicted: 5.9157,
              conf.low: 5.8508,
              conf.high: 5.9807,
              id: "union",
              var: "stflife",
              displayName: "Union Member",
              y: 5.9157,
              name: "Former Member"
            },
            {
              predicted: 6.0434,
              conf.low: 5.9811,
              conf.high: 6.1056,
              id: "union",
              var: "stflife",
              displayName: "Union Member",
              y: 6.0434,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "union",
              var: "stflife",
              displayName: "Union Member",
              low: 6.01,
              high: 6.15,
              name: "Current Member"
            },
            {
              predicted: 5.9157,
              conf.low: 5.8508,
              conf.high: 5.9807,
              id: "union",
              var: "stflife",
              displayName: "Union Member",
              low: 5.85,
              high: 5.98,
              name: "Former Member"
            },
            {
              predicted: 6.0434,
              conf.low: 5.9811,
              conf.high: 6.1056,
              id: "union",
              var: "stflife",
              displayName: "Union Member",
              low: 5.98,
              high: 6.11,
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
