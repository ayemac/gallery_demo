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
        headerFormat: "Predicted Trust in Police",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              y: 6.2757,
              name: "13-29 years old"
            },
            {
              predicted: 6.2228,
              conf.low: 6.1474,
              conf.high: 6.2982,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              y: 6.2228,
              name: "29-41 years old"
            },
            {
              predicted: 6.1983,
              conf.low: 6.1226,
              conf.high: 6.274,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              y: 6.1983,
              name: "41-53 years old"
            },
            {
              predicted: 6.2066,
              conf.low: 6.1288,
              conf.high: 6.2844,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              y: 6.2066,
              name: "53-66 years old"
            },
            {
              predicted: 6.5108,
              conf.low: 6.4309,
              conf.high: 6.5907,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              y: 6.5108,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              low: 6.2,
              high: 6.35,
              name: "13-29 years old"
            },
            {
              predicted: 6.2228,
              conf.low: 6.1474,
              conf.high: 6.2982,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              low: 6.15,
              high: 6.3,
              name: "29-41 years old"
            },
            {
              predicted: 6.1983,
              conf.low: 6.1226,
              conf.high: 6.274,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              low: 6.12,
              high: 6.27,
              name: "41-53 years old"
            },
            {
              predicted: 6.2066,
              conf.low: 6.1288,
              conf.high: 6.2844,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              low: 6.13,
              high: 6.28,
              name: "53-66 years old"
            },
            {
              predicted: 6.5108,
              conf.low: 6.4309,
              conf.high: 6.5907,
              id: "Age_group",
              var: "trstplc",
              displayName: "Age Group",
              low: 6.43,
              high: 6.59,
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
