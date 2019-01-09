$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Age Group\n  <br/>\n<\/h4>",
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
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              y: 5.4946,
              name: "13-29 years old"
            },
            {
              predicted: 5.2867,
              conf.low: 5.2087,
              conf.high: 5.3646,
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              y: 5.2867,
              name: "29-41 years old"
            },
            {
              predicted: 5.2572,
              conf.low: 5.179,
              conf.high: 5.3355,
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              y: 5.2572,
              name: "41-53 years old"
            },
            {
              predicted: 5.1581,
              conf.low: 5.0777,
              conf.high: 5.2385,
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              y: 5.1581,
              name: "53-66 years old"
            },
            {
              predicted: 5.2685,
              conf.low: 5.1859,
              conf.high: 5.3511,
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              y: 5.2685,
              name: "66+ years old"
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
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              low: 5.42,
              high: 5.57,
              name: "13-29 years old"
            },
            {
              predicted: 5.2867,
              conf.low: 5.2087,
              conf.high: 5.3646,
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              low: 5.21,
              high: 5.36,
              name: "29-41 years old"
            },
            {
              predicted: 5.2572,
              conf.low: 5.179,
              conf.high: 5.3355,
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              low: 5.18,
              high: 5.34,
              name: "41-53 years old"
            },
            {
              predicted: 5.1581,
              conf.low: 5.0777,
              conf.high: 5.2385,
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              low: 5.08,
              high: 5.24,
              name: "53-66 years old"
            },
            {
              predicted: 5.2685,
              conf.low: 5.1859,
              conf.high: 5.3511,
              id: "Age_group",
              var: "trstlgl",
              displayName: "Age Group",
              low: 5.19,
              high: 5.35,
              name: "66+ years old"
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
