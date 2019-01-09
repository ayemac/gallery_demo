$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Income\n  <br/>\n<\/h4>",
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
        headerFormat: "Predicted Trust in Legal System",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "income",
              var: "trstlgl",
              displayName: "Income",
              y: 5.4946,
              name: "Low Income"
            },
            {
              predicted: 5.6384,
              conf.low: 5.5611,
              conf.high: 5.7158,
              id: "income",
              var: "trstlgl",
              displayName: "Income",
              y: 5.6384,
              name: "Middle Income"
            },
            {
              predicted: 5.8621,
              conf.low: 5.7827,
              conf.high: 5.9415,
              id: "income",
              var: "trstlgl",
              displayName: "Income",
              y: 5.8621,
              name: "High Income"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "income",
              var: "trstlgl",
              displayName: "Income",
              low: 5.42,
              high: 5.57,
              name: "Low Income"
            },
            {
              predicted: 5.6384,
              conf.low: 5.5611,
              conf.high: 5.7158,
              id: "income",
              var: "trstlgl",
              displayName: "Income",
              low: 5.56,
              high: 5.72,
              name: "Middle Income"
            },
            {
              predicted: 5.8621,
              conf.low: 5.7827,
              conf.high: 5.9415,
              id: "income",
              var: "trstlgl",
              displayName: "Income",
              low: 5.78,
              high: 5.94,
              name: "High Income"
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
