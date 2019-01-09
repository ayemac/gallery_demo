$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Race\n  <br/>\n<\/h4>",
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
              id: "Minority",
              var: "stflife",
              displayName: "Race",
              y: 6.0801,
              name: "Minority"
            },
            {
              predicted: 6.4533,
              conf.low: 6.3948,
              conf.high: 6.5118,
              id: "Minority",
              var: "stflife",
              displayName: "Race",
              y: 6.4533,
              name: "Non-Minority"
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
              id: "Minority",
              var: "stflife",
              displayName: "Race",
              low: 6.01,
              high: 6.15,
              name: "Minority"
            },
            {
              predicted: 6.4533,
              conf.low: 6.3948,
              conf.high: 6.5118,
              id: "Minority",
              var: "stflife",
              displayName: "Race",
              low: 6.39,
              high: 6.51,
              name: "Non-Minority"
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
