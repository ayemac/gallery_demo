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
        headerFormat: "Predicted Fairness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              y: 5.1436,
              name: "13-29 years old"
            },
            {
              predicted: 4.9772,
              conf.low: 4.908,
              conf.high: 5.0463,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              y: 4.9772,
              name: "29-41 years old"
            },
            {
              predicted: 5.0206,
              conf.low: 4.9512,
              conf.high: 5.09,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              y: 5.0206,
              name: "41-53 years old"
            },
            {
              predicted: 5.0512,
              conf.low: 4.9799,
              conf.high: 5.1224,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              y: 5.0512,
              name: "53-66 years old"
            },
            {
              predicted: 5.2907,
              conf.low: 5.2175,
              conf.high: 5.3639,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              y: 5.2907,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              low: 5.07,
              high: 5.21,
              name: "13-29 years old"
            },
            {
              predicted: 4.9772,
              conf.low: 4.908,
              conf.high: 5.0463,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              low: 4.91,
              high: 5.05,
              name: "29-41 years old"
            },
            {
              predicted: 5.0206,
              conf.low: 4.9512,
              conf.high: 5.09,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              low: 4.95,
              high: 5.09,
              name: "41-53 years old"
            },
            {
              predicted: 5.0512,
              conf.low: 4.9799,
              conf.high: 5.1224,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              low: 4.98,
              high: 5.12,
              name: "53-66 years old"
            },
            {
              predicted: 5.2907,
              conf.low: 5.2175,
              conf.high: 5.3639,
              id: "Age_group",
              var: "pplfair",
              displayName: "Age Group",
              low: 5.22,
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
