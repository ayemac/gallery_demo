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
        headerFormat: "Predicted Happiness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              y: 6.6558,
              name: "13-29 years old"
            },
            {
              predicted: 6.1686,
              conf.low: 6.1098,
              conf.high: 6.2273,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              y: 6.1686,
              name: "29-41 years old"
            },
            {
              predicted: 5.9125,
              conf.low: 5.8536,
              conf.high: 5.9715,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              y: 5.9125,
              name: "41-53 years old"
            },
            {
              predicted: 5.925,
              conf.low: 5.8644,
              conf.high: 5.9856,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              y: 5.925,
              name: "53-66 years old"
            },
            {
              predicted: 6.0671,
              conf.low: 6.0049,
              conf.high: 6.1293,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              y: 6.0671,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              low: 6.6,
              high: 6.71,
              name: "13-29 years old"
            },
            {
              predicted: 6.1686,
              conf.low: 6.1098,
              conf.high: 6.2273,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              low: 6.11,
              high: 6.23,
              name: "29-41 years old"
            },
            {
              predicted: 5.9125,
              conf.low: 5.8536,
              conf.high: 5.9715,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              low: 5.85,
              high: 5.97,
              name: "41-53 years old"
            },
            {
              predicted: 5.925,
              conf.low: 5.8644,
              conf.high: 5.9856,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              low: 5.86,
              high: 5.99,
              name: "53-66 years old"
            },
            {
              predicted: 6.0671,
              conf.low: 6.0049,
              conf.high: 6.1293,
              id: "Age_group",
              var: "happy",
              displayName: "Age Group",
              low: 6,
              high: 6.13,
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
