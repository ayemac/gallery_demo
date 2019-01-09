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
        headerFormat: "Predicted Trust in European Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "Marital_Status",
              var: "trstep",
              displayName: "Marital Status",
              y: 4.842,
              name: "Never married"
            },
            {
              predicted: 4.7357,
              conf.low: 4.6529,
              conf.high: 4.8185,
              id: "Marital_Status",
              var: "trstep",
              displayName: "Marital Status",
              y: 4.7357,
              name: "Married"
            },
            {
              predicted: 4.6383,
              conf.low: 4.5513,
              conf.high: 4.7252,
              id: "Marital_Status",
              var: "trstep",
              displayName: "Marital Status",
              y: 4.6383,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.7355,
              conf.low: 4.648,
              conf.high: 4.823,
              id: "Marital_Status",
              var: "trstep",
              displayName: "Marital Status",
              y: 4.7355,
              name: "Widowed"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "Marital_Status",
              var: "trstep",
              displayName: "Marital Status",
              low: 4.76,
              high: 4.92,
              name: "Never married"
            },
            {
              predicted: 4.7357,
              conf.low: 4.6529,
              conf.high: 4.8185,
              id: "Marital_Status",
              var: "trstep",
              displayName: "Marital Status",
              low: 4.65,
              high: 4.82,
              name: "Married"
            },
            {
              predicted: 4.6383,
              conf.low: 4.5513,
              conf.high: 4.7252,
              id: "Marital_Status",
              var: "trstep",
              displayName: "Marital Status",
              low: 4.55,
              high: 4.73,
              name: "Divorced/Sep"
            },
            {
              predicted: 4.7355,
              conf.low: 4.648,
              conf.high: 4.823,
              id: "Marital_Status",
              var: "trstep",
              displayName: "Marital Status",
              low: 4.65,
              high: 4.82,
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
