$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Kids at Home\n  <br/>\n<\/h4>",
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
              id: "kidsAtHome",
              var: "trstprt",
              displayName: "Kids at Home",
              y: 3.7422,
              name: "Kids at Home"
            },
            {
              predicted: 3.7697,
              conf.low: 3.6987,
              conf.high: 3.8406,
              id: "kidsAtHome",
              var: "trstprt",
              displayName: "Kids at Home",
              y: 3.7697,
              name: "No Kids at Home"
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
              id: "kidsAtHome",
              var: "trstprt",
              displayName: "Kids at Home",
              low: 3.67,
              high: 3.82,
              name: "Kids at Home"
            },
            {
              predicted: 3.7697,
              conf.low: 3.6987,
              conf.high: 3.8406,
              id: "kidsAtHome",
              var: "trstprt",
              displayName: "Kids at Home",
              low: 3.7,
              high: 3.84,
              name: "No Kids at Home"
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
