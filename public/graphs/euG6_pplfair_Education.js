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
              id: "Education",
              var: "pplfair",
              displayName: "Education",
              y: 5.1436,
              name: "Low Education"
            },
            {
              predicted: 5.3075,
              conf.low: 5.2391,
              conf.high: 5.3758,
              id: "Education",
              var: "pplfair",
              displayName: "Education",
              y: 5.3075,
              name: "Middle Education"
            },
            {
              predicted: 5.6565,
              conf.low: 5.5872,
              conf.high: 5.7259,
              id: "Education",
              var: "pplfair",
              displayName: "Education",
              y: 5.6565,
              name: "High Education"
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
              id: "Education",
              var: "pplfair",
              displayName: "Education",
              low: 5.07,
              high: 5.21,
              name: "Low Education"
            },
            {
              predicted: 5.3075,
              conf.low: 5.2391,
              conf.high: 5.3758,
              id: "Education",
              var: "pplfair",
              displayName: "Education",
              low: 5.24,
              high: 5.38,
              name: "Middle Education"
            },
            {
              predicted: 5.6565,
              conf.low: 5.5872,
              conf.high: 5.7259,
              id: "Education",
              var: "pplfair",
              displayName: "Education",
              low: 5.59,
              high: 5.73,
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
