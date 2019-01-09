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
        headerFormat: "Predicted Trust in Political Parties",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              y: 3.7422,
              name: "13-29 years old"
            },
            {
              predicted: 3.4457,
              conf.low: 3.3725,
              conf.high: 3.5188,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              y: 3.4457,
              name: "29-41 years old"
            },
            {
              predicted: 3.4183,
              conf.low: 3.3451,
              conf.high: 3.4916,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              y: 3.4183,
              name: "41-53 years old"
            },
            {
              predicted: 3.4439,
              conf.low: 3.3687,
              conf.high: 3.5192,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              y: 3.4439,
              name: "53-66 years old"
            },
            {
              predicted: 3.6152,
              conf.low: 3.538,
              conf.high: 3.6924,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              y: 3.6152,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              low: 3.67,
              high: 3.82,
              name: "13-29 years old"
            },
            {
              predicted: 3.4457,
              conf.low: 3.3725,
              conf.high: 3.5188,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              low: 3.37,
              high: 3.52,
              name: "29-41 years old"
            },
            {
              predicted: 3.4183,
              conf.low: 3.3451,
              conf.high: 3.4916,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              low: 3.35,
              high: 3.49,
              name: "41-53 years old"
            },
            {
              predicted: 3.4439,
              conf.low: 3.3687,
              conf.high: 3.5192,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              low: 3.37,
              high: 3.52,
              name: "53-66 years old"
            },
            {
              predicted: 3.6152,
              conf.low: 3.538,
              conf.high: 3.6924,
              id: "Age_group",
              var: "trstprt",
              displayName: "Age Group",
              low: 3.54,
              high: 3.69,
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
