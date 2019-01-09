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
        headerFormat: "Predicted Support for the E.U.",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              y: 5.6238,
              name: "13-29 years old"
            },
            {
              predicted: 5.3094,
              conf.low: 5.2115,
              conf.high: 5.4073,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              y: 5.3094,
              name: "29-41 years old"
            },
            {
              predicted: 5.2425,
              conf.low: 5.1444,
              conf.high: 5.3407,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              y: 5.2425,
              name: "41-53 years old"
            },
            {
              predicted: 5.2373,
              conf.low: 5.1364,
              conf.high: 5.3381,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              y: 5.2373,
              name: "53-66 years old"
            },
            {
              predicted: 5.2565,
              conf.low: 5.1527,
              conf.high: 5.3604,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              y: 5.2565,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              low: 5.53,
              high: 5.72,
              name: "13-29 years old"
            },
            {
              predicted: 5.3094,
              conf.low: 5.2115,
              conf.high: 5.4073,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              low: 5.21,
              high: 5.41,
              name: "29-41 years old"
            },
            {
              predicted: 5.2425,
              conf.low: 5.1444,
              conf.high: 5.3407,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              low: 5.14,
              high: 5.34,
              name: "41-53 years old"
            },
            {
              predicted: 5.2373,
              conf.low: 5.1364,
              conf.high: 5.3381,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              low: 5.14,
              high: 5.34,
              name: "53-66 years old"
            },
            {
              predicted: 5.2565,
              conf.low: 5.1527,
              conf.high: 5.3604,
              id: "Age_group",
              var: "euftf",
              displayName: "Age Group",
              low: 5.15,
              high: 5.36,
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
