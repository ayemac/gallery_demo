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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              y: 4.6353,
              name: "13-29 years old"
            },
            {
              predicted: 4.3655,
              conf.low: 4.2894,
              conf.high: 4.4416,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              y: 4.3655,
              name: "29-41 years old"
            },
            {
              predicted: 4.3993,
              conf.low: 4.3229,
              conf.high: 4.4756,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              y: 4.3993,
              name: "41-53 years old"
            },
            {
              predicted: 4.4045,
              conf.low: 4.3261,
              conf.high: 4.483,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              y: 4.4045,
              name: "53-66 years old"
            },
            {
              predicted: 4.5595,
              conf.low: 4.4789,
              conf.high: 4.6401,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              y: 4.5595,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              low: 4.56,
              high: 4.71,
              name: "13-29 years old"
            },
            {
              predicted: 4.3655,
              conf.low: 4.2894,
              conf.high: 4.4416,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              low: 4.29,
              high: 4.44,
              name: "29-41 years old"
            },
            {
              predicted: 4.3993,
              conf.low: 4.3229,
              conf.high: 4.4756,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              low: 4.32,
              high: 4.48,
              name: "41-53 years old"
            },
            {
              predicted: 4.4045,
              conf.low: 4.3261,
              conf.high: 4.483,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              low: 4.33,
              high: 4.48,
              name: "53-66 years old"
            },
            {
              predicted: 4.5595,
              conf.low: 4.4789,
              conf.high: 4.6401,
              id: "Age_group",
              var: "trstprl",
              displayName: "Age Group",
              low: 4.48,
              high: 4.64,
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
