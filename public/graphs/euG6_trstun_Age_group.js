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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              y: 5.0693,
              name: "13-29 years old"
            },
            {
              predicted: 4.6696,
              conf.low: 4.5874,
              conf.high: 4.7518,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              y: 4.6696,
              name: "29-41 years old"
            },
            {
              predicted: 4.5836,
              conf.low: 4.501,
              conf.high: 4.6661,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              y: 4.5836,
              name: "41-53 years old"
            },
            {
              predicted: 4.4931,
              conf.low: 4.4082,
              conf.high: 4.578,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              y: 4.4931,
              name: "53-66 years old"
            },
            {
              predicted: 4.5698,
              conf.low: 4.4825,
              conf.high: 4.6572,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              y: 4.5698,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              low: 4.99,
              high: 5.15,
              name: "13-29 years old"
            },
            {
              predicted: 4.6696,
              conf.low: 4.5874,
              conf.high: 4.7518,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              low: 4.59,
              high: 4.75,
              name: "29-41 years old"
            },
            {
              predicted: 4.5836,
              conf.low: 4.501,
              conf.high: 4.6661,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              low: 4.5,
              high: 4.67,
              name: "41-53 years old"
            },
            {
              predicted: 4.4931,
              conf.low: 4.4082,
              conf.high: 4.578,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              low: 4.41,
              high: 4.58,
              name: "53-66 years old"
            },
            {
              predicted: 4.5698,
              conf.low: 4.4825,
              conf.high: 4.6572,
              id: "Age_group",
              var: "trstun",
              displayName: "Age Group",
              low: 4.48,
              high: 4.66,
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
