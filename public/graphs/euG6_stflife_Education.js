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
              id: "Education",
              var: "stflife",
              displayName: "Education",
              y: 6.0801,
              name: "Low Education"
            },
            {
              predicted: 6.1834,
              conf.low: 6.1185,
              conf.high: 6.2482,
              id: "Education",
              var: "stflife",
              displayName: "Education",
              y: 6.1834,
              name: "Middle Education"
            },
            {
              predicted: 6.4325,
              conf.low: 6.3667,
              conf.high: 6.4983,
              id: "Education",
              var: "stflife",
              displayName: "Education",
              y: 6.4325,
              name: "High Education"
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
              id: "Education",
              var: "stflife",
              displayName: "Education",
              low: 6.01,
              high: 6.15,
              name: "Low Education"
            },
            {
              predicted: 6.1834,
              conf.low: 6.1185,
              conf.high: 6.2482,
              id: "Education",
              var: "stflife",
              displayName: "Education",
              low: 6.12,
              high: 6.25,
              name: "Middle Education"
            },
            {
              predicted: 6.4325,
              conf.low: 6.3667,
              conf.high: 6.4983,
              id: "Education",
              var: "stflife",
              displayName: "Education",
              low: 6.37,
              high: 6.5,
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
