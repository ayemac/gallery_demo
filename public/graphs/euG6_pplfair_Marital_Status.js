$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Marital Status\n  <br/>\n<\/h4>",
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
              id: "Marital_Status",
              var: "pplfair",
              displayName: "Marital Status",
              y: 5.1436,
              name: "Never married"
            },
            {
              predicted: 5.1583,
              conf.low: 5.0884,
              conf.high: 5.2283,
              id: "Marital_Status",
              var: "pplfair",
              displayName: "Marital Status",
              y: 5.1583,
              name: "Married"
            },
            {
              predicted: 4.9376,
              conf.low: 4.8641,
              conf.high: 5.0111,
              id: "Marital_Status",
              var: "pplfair",
              displayName: "Marital Status",
              y: 4.9376,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.1082,
              conf.low: 5.0346,
              conf.high: 5.1818,
              id: "Marital_Status",
              var: "pplfair",
              displayName: "Marital Status",
              y: 5.1082,
              name: "Widowed"
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
              id: "Marital_Status",
              var: "pplfair",
              displayName: "Marital Status",
              low: 5.07,
              high: 5.21,
              name: "Never married"
            },
            {
              predicted: 5.1583,
              conf.low: 5.0884,
              conf.high: 5.2283,
              id: "Marital_Status",
              var: "pplfair",
              displayName: "Marital Status",
              low: 5.09,
              high: 5.23,
              name: "Married"
            },
            {
              predicted: 4.9376,
              conf.low: 4.8641,
              conf.high: 5.0111,
              id: "Marital_Status",
              var: "pplfair",
              displayName: "Marital Status",
              low: 4.86,
              high: 5.01,
              name: "Divorced/Sep"
            },
            {
              predicted: 5.1082,
              conf.low: 5.0346,
              conf.high: 5.1818,
              id: "Marital_Status",
              var: "pplfair",
              displayName: "Marital Status",
              low: 5.03,
              high: 5.18,
              name: "Widowed"
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
