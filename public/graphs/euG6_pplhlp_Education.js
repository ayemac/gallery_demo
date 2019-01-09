$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Education\n  <br/>\n<\/h4>",
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
              id: "Education",
              var: "pplhlp",
              displayName: "Education",
              y: 4.4109,
              name: "Low Education"
            },
            {
              predicted: 4.4522,
              conf.low: 4.3827,
              conf.high: 4.5217,
              id: "Education",
              var: "pplhlp",
              displayName: "Education",
              y: 4.4522,
              name: "Middle Education"
            },
            {
              predicted: 4.6721,
              conf.low: 4.6016,
              conf.high: 4.7426,
              id: "Education",
              var: "pplhlp",
              displayName: "Education",
              y: 4.6721,
              name: "High Education"
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
              id: "Education",
              var: "pplhlp",
              displayName: "Education",
              low: 4.34,
              high: 4.48,
              name: "Low Education"
            },
            {
              predicted: 4.4522,
              conf.low: 4.3827,
              conf.high: 4.5217,
              id: "Education",
              var: "pplhlp",
              displayName: "Education",
              low: 4.38,
              high: 4.52,
              name: "Middle Education"
            },
            {
              predicted: 4.6721,
              conf.low: 4.6016,
              conf.high: 4.7426,
              id: "Education",
              var: "pplhlp",
              displayName: "Education",
              low: 4.6,
              high: 4.74,
              name: "High Education"
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
