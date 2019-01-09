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
              id: "Politics",
              var: "pplhlp",
              displayName: "Politics",
              y: 4.4109,
              name: "Political Left"
            },
            {
              predicted: 4.3912,
              conf.low: 4.3207,
              conf.high: 4.4616,
              id: "Politics",
              var: "pplhlp",
              displayName: "Politics",
              y: 4.3912,
              name: "Political Center"
            },
            {
              predicted: 4.4921,
              conf.low: 4.4206,
              conf.high: 4.5637,
              id: "Politics",
              var: "pplhlp",
              displayName: "Politics",
              y: 4.4921,
              name: "Political Right"
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
              id: "Politics",
              var: "pplhlp",
              displayName: "Politics",
              low: 4.34,
              high: 4.48,
              name: "Political Left"
            },
            {
              predicted: 4.3912,
              conf.low: 4.3207,
              conf.high: 4.4616,
              id: "Politics",
              var: "pplhlp",
              displayName: "Politics",
              low: 4.32,
              high: 4.46,
              name: "Political Center"
            },
            {
              predicted: 4.4921,
              conf.low: 4.4206,
              conf.high: 4.5637,
              id: "Politics",
              var: "pplhlp",
              displayName: "Politics",
              low: 4.42,
              high: 4.56,
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
