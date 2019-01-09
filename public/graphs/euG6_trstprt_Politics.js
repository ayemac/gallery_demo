$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Politics\n  <br/>\n<\/h4>",
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
              id: "Politics",
              var: "trstprt",
              displayName: "Politics",
              y: 3.7422,
              name: "Political Left"
            },
            {
              predicted: 3.5039,
              conf.low: 3.4307,
              conf.high: 3.577,
              id: "Politics",
              var: "trstprt",
              displayName: "Politics",
              y: 3.5039,
              name: "Political Center"
            },
            {
              predicted: 3.9656,
              conf.low: 3.8912,
              conf.high: 4.0399,
              id: "Politics",
              var: "trstprt",
              displayName: "Politics",
              y: 3.9656,
              name: "Political Right"
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
              id: "Politics",
              var: "trstprt",
              displayName: "Politics",
              low: 3.67,
              high: 3.82,
              name: "Political Left"
            },
            {
              predicted: 3.5039,
              conf.low: 3.4307,
              conf.high: 3.577,
              id: "Politics",
              var: "trstprt",
              displayName: "Politics",
              low: 3.43,
              high: 3.58,
              name: "Political Center"
            },
            {
              predicted: 3.9656,
              conf.low: 3.8912,
              conf.high: 4.0399,
              id: "Politics",
              var: "trstprt",
              displayName: "Politics",
              low: 3.89,
              high: 4.04,
              name: "Political Right"
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
