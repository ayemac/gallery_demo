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
        headerFormat: "Predicted Social Trust",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              y: 4.1117,
              name: "13-29 years old"
            },
            {
              predicted: 3.973,
              conf.low: 3.9004,
              conf.high: 4.0456,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              y: 3.973,
              name: "29-41 years old"
            },
            {
              predicted: 4.0351,
              conf.low: 3.9622,
              conf.high: 4.1079,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              y: 4.0351,
              name: "41-53 years old"
            },
            {
              predicted: 3.9988,
              conf.low: 3.924,
              conf.high: 4.0736,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              y: 3.9988,
              name: "53-66 years old"
            },
            {
              predicted: 4.0495,
              conf.low: 3.9727,
              conf.high: 4.1263,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              y: 4.0495,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              low: 4.04,
              high: 4.18,
              name: "13-29 years old"
            },
            {
              predicted: 3.973,
              conf.low: 3.9004,
              conf.high: 4.0456,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              low: 3.9,
              high: 4.05,
              name: "29-41 years old"
            },
            {
              predicted: 4.0351,
              conf.low: 3.9622,
              conf.high: 4.1079,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              low: 3.96,
              high: 4.11,
              name: "41-53 years old"
            },
            {
              predicted: 3.9988,
              conf.low: 3.924,
              conf.high: 4.0736,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              low: 3.92,
              high: 4.07,
              name: "53-66 years old"
            },
            {
              predicted: 4.0495,
              conf.low: 3.9727,
              conf.high: 4.1263,
              id: "Age_group",
              var: "ppltrst",
              displayName: "Age Group",
              low: 3.97,
              high: 4.13,
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
