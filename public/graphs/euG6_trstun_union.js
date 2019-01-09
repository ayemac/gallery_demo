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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "union",
              var: "trstun",
              displayName: "Union Member",
              y: 5.0693,
              name: "Current Member"
            },
            {
              predicted: 5.0338,
              conf.low: 4.9522,
              conf.high: 5.1153,
              id: "union",
              var: "trstun",
              displayName: "Union Member",
              y: 5.0338,
              name: "Former Member"
            },
            {
              predicted: 4.9857,
              conf.low: 4.9076,
              conf.high: 5.0639,
              id: "union",
              var: "trstun",
              displayName: "Union Member",
              y: 4.9857,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "union",
              var: "trstun",
              displayName: "Union Member",
              low: 4.99,
              high: 5.15,
              name: "Current Member"
            },
            {
              predicted: 5.0338,
              conf.low: 4.9522,
              conf.high: 5.1153,
              id: "union",
              var: "trstun",
              displayName: "Union Member",
              low: 4.95,
              high: 5.12,
              name: "Former Member"
            },
            {
              predicted: 4.9857,
              conf.low: 4.9076,
              conf.high: 5.0639,
              id: "union",
              var: "trstun",
              displayName: "Union Member",
              low: 4.91,
              high: 5.06,
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
