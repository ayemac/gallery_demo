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
        headerFormat: "Predicted Immigration Good for Culture",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              y: 6.1338,
              name: "13-29 years old"
            },
            {
              predicted: 6.0547,
              conf.low: 5.9782,
              conf.high: 6.1312,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              y: 6.0547,
              name: "29-41 years old"
            },
            {
              predicted: 6.0186,
              conf.low: 5.9418,
              conf.high: 6.0954,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              y: 6.0186,
              name: "41-53 years old"
            },
            {
              predicted: 5.8841,
              conf.low: 5.8052,
              conf.high: 5.9631,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              y: 5.8841,
              name: "53-66 years old"
            },
            {
              predicted: 5.734,
              conf.low: 5.6528,
              conf.high: 5.8151,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              y: 5.734,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              low: 6.06,
              high: 6.21,
              name: "13-29 years old"
            },
            {
              predicted: 6.0547,
              conf.low: 5.9782,
              conf.high: 6.1312,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              low: 5.98,
              high: 6.13,
              name: "29-41 years old"
            },
            {
              predicted: 6.0186,
              conf.low: 5.9418,
              conf.high: 6.0954,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              low: 5.94,
              high: 6.1,
              name: "41-53 years old"
            },
            {
              predicted: 5.8841,
              conf.low: 5.8052,
              conf.high: 5.9631,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              low: 5.81,
              high: 5.96,
              name: "53-66 years old"
            },
            {
              predicted: 5.734,
              conf.low: 5.6528,
              conf.high: 5.8151,
              id: "Age_group",
              var: "imueclt",
              displayName: "Age Group",
              low: 5.65,
              high: 5.82,
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
