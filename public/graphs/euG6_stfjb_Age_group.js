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
        headerFormat: "Predicted Job Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              y: 5.9145,
              name: "13-29 years old"
            },
            {
              predicted: 5.9539,
              conf.low: 5.7811,
              conf.high: 6.1267,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              y: 5.9539,
              name: "29-41 years old"
            },
            {
              predicted: 5.9695,
              conf.low: 5.797,
              conf.high: 6.142,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              y: 5.9695,
              name: "41-53 years old"
            },
            {
              predicted: 6.1662,
              conf.low: 5.9875,
              conf.high: 6.345,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              y: 6.1662,
              name: "53-66 years old"
            },
            {
              predicted: 6.5191,
              conf.low: 6.2932,
              conf.high: 6.7451,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              y: 6.5191,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              low: 5.74,
              high: 6.09,
              name: "13-29 years old"
            },
            {
              predicted: 5.9539,
              conf.low: 5.7811,
              conf.high: 6.1267,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              low: 5.78,
              high: 6.13,
              name: "29-41 years old"
            },
            {
              predicted: 5.9695,
              conf.low: 5.797,
              conf.high: 6.142,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              low: 5.8,
              high: 6.14,
              name: "41-53 years old"
            },
            {
              predicted: 6.1662,
              conf.low: 5.9875,
              conf.high: 6.345,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              low: 5.99,
              high: 6.34,
              name: "53-66 years old"
            },
            {
              predicted: 6.5191,
              conf.low: 6.2932,
              conf.high: 6.7451,
              id: "Age_group",
              var: "stfjb",
              displayName: "Age Group",
              low: 6.29,
              high: 6.75,
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
