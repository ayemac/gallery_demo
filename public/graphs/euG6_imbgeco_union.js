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
        headerFormat: "Predicted Immigration Good for Economy",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "union",
              var: "imbgeco",
              displayName: "Union Member",
              y: 4.9488,
              name: "Current Member"
            },
            {
              predicted: 4.8998,
              conf.low: 4.824,
              conf.high: 4.9755,
              id: "union",
              var: "imbgeco",
              displayName: "Union Member",
              y: 4.8998,
              name: "Former Member"
            },
            {
              predicted: 4.9612,
              conf.low: 4.8886,
              conf.high: 5.0338,
              id: "union",
              var: "imbgeco",
              displayName: "Union Member",
              y: 4.9612,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "union",
              var: "imbgeco",
              displayName: "Union Member",
              low: 4.87,
              high: 5.03,
              name: "Current Member"
            },
            {
              predicted: 4.8998,
              conf.low: 4.824,
              conf.high: 4.9755,
              id: "union",
              var: "imbgeco",
              displayName: "Union Member",
              low: 4.82,
              high: 4.98,
              name: "Former Member"
            },
            {
              predicted: 4.9612,
              conf.low: 4.8886,
              conf.high: 5.0338,
              id: "union",
              var: "imbgeco",
              displayName: "Union Member",
              low: 4.89,
              high: 5.03,
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
