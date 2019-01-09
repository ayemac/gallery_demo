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
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              y: 4.842,
              name: "13-29 years old"
            },
            {
              predicted: 4.3263,
              conf.low: 4.2445,
              conf.high: 4.4081,
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              y: 4.3263,
              name: "29-41 years old"
            },
            {
              predicted: 4.2068,
              conf.low: 4.1247,
              conf.high: 4.289,
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              y: 4.2068,
              name: "41-53 years old"
            },
            {
              predicted: 4.1252,
              conf.low: 4.0408,
              conf.high: 4.2097,
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              y: 4.1252,
              name: "53-66 years old"
            },
            {
              predicted: 4.2223,
              conf.low: 4.1354,
              conf.high: 4.3091,
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              y: 4.2223,
              name: "66+ years old"
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
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              low: 4.76,
              high: 4.92,
              name: "13-29 years old"
            },
            {
              predicted: 4.3263,
              conf.low: 4.2445,
              conf.high: 4.4081,
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              low: 4.24,
              high: 4.41,
              name: "29-41 years old"
            },
            {
              predicted: 4.2068,
              conf.low: 4.1247,
              conf.high: 4.289,
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              low: 4.12,
              high: 4.29,
              name: "41-53 years old"
            },
            {
              predicted: 4.1252,
              conf.low: 4.0408,
              conf.high: 4.2097,
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              low: 4.04,
              high: 4.21,
              name: "53-66 years old"
            },
            {
              predicted: 4.2223,
              conf.low: 4.1354,
              conf.high: 4.3091,
              id: "Age_group",
              var: "trstep",
              displayName: "Age Group",
              low: 4.14,
              high: 4.31,
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
