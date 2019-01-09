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
              id: "Minority",
              var: "pplfair",
              displayName: "Race",
              y: 5.1436,
              name: "Minority"
            },
            {
              predicted: 5.4561,
              conf.low: 5.3945,
              conf.high: 5.5177,
              id: "Minority",
              var: "pplfair",
              displayName: "Race",
              y: 5.4561,
              name: "Non-Minority"
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
              id: "Minority",
              var: "pplfair",
              displayName: "Race",
              low: 5.07,
              high: 5.21,
              name: "Minority"
            },
            {
              predicted: 5.4561,
              conf.low: 5.3945,
              conf.high: 5.5177,
              id: "Minority",
              var: "pplfair",
              displayName: "Race",
              low: 5.39,
              high: 5.52,
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
