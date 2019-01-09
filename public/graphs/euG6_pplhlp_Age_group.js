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
        headerFormat: "Predicted Helpfulness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              y: 4.4109,
              name: "13-29 years old"
            },
            {
              predicted: 4.2995,
              conf.low: 4.2292,
              conf.high: 4.3697,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              y: 4.2995,
              name: "29-41 years old"
            },
            {
              predicted: 4.3591,
              conf.low: 4.2885,
              conf.high: 4.4296,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              y: 4.3591,
              name: "41-53 years old"
            },
            {
              predicted: 4.3739,
              conf.low: 4.3014,
              conf.high: 4.4463,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              y: 4.3739,
              name: "53-66 years old"
            },
            {
              predicted: 4.5652,
              conf.low: 4.4907,
              conf.high: 4.6396,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              y: 4.5652,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              low: 4.34,
              high: 4.48,
              name: "13-29 years old"
            },
            {
              predicted: 4.2995,
              conf.low: 4.2292,
              conf.high: 4.3697,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              low: 4.23,
              high: 4.37,
              name: "29-41 years old"
            },
            {
              predicted: 4.3591,
              conf.low: 4.2885,
              conf.high: 4.4296,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              low: 4.29,
              high: 4.43,
              name: "41-53 years old"
            },
            {
              predicted: 4.3739,
              conf.low: 4.3014,
              conf.high: 4.4463,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              low: 4.3,
              high: 4.45,
              name: "53-66 years old"
            },
            {
              predicted: 4.5652,
              conf.low: 4.4907,
              conf.high: 4.6396,
              id: "Age_group",
              var: "pplhlp",
              displayName: "Age Group",
              low: 4.49,
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
