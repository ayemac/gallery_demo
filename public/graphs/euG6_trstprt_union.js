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
        headerFormat: "Predicted Trust in Political Parties",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "union",
              var: "trstprt",
              displayName: "Union Member",
              y: 3.7422,
              name: "Current Member"
            },
            {
              predicted: 3.6244,
              conf.low: 3.5522,
              conf.high: 3.6966,
              id: "union",
              var: "trstprt",
              displayName: "Union Member",
              y: 3.6244,
              name: "Former Member"
            },
            {
              predicted: 3.6931,
              conf.low: 3.6241,
              conf.high: 3.7622,
              id: "union",
              var: "trstprt",
              displayName: "Union Member",
              y: 3.6931,
              name: "Non-member"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "union",
              var: "trstprt",
              displayName: "Union Member",
              low: 3.67,
              high: 3.82,
              name: "Current Member"
            },
            {
              predicted: 3.6244,
              conf.low: 3.5522,
              conf.high: 3.6966,
              id: "union",
              var: "trstprt",
              displayName: "Union Member",
              low: 3.55,
              high: 3.7,
              name: "Former Member"
            },
            {
              predicted: 3.6931,
              conf.low: 3.6241,
              conf.high: 3.7622,
              id: "union",
              var: "trstprt",
              displayName: "Union Member",
              low: 3.62,
              high: 3.76,
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
