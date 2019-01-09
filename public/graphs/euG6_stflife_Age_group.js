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
        headerFormat: "Predicted Life Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              y: 6.0801,
              name: "13-29 years old"
            },
            {
              predicted: 5.5585,
              conf.low: 5.4929,
              conf.high: 5.6241,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              y: 5.5585,
              name: "29-41 years old"
            },
            {
              predicted: 5.3185,
              conf.low: 5.2527,
              conf.high: 5.3844,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              y: 5.3185,
              name: "41-53 years old"
            },
            {
              predicted: 5.3872,
              conf.low: 5.3195,
              conf.high: 5.4549,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              y: 5.3872,
              name: "53-66 years old"
            },
            {
              predicted: 5.6468,
              conf.low: 5.5773,
              conf.high: 5.7163,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              y: 5.6468,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              low: 6.01,
              high: 6.15,
              name: "13-29 years old"
            },
            {
              predicted: 5.5585,
              conf.low: 5.4929,
              conf.high: 5.6241,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              low: 5.49,
              high: 5.62,
              name: "29-41 years old"
            },
            {
              predicted: 5.3185,
              conf.low: 5.2527,
              conf.high: 5.3844,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              low: 5.25,
              high: 5.38,
              name: "41-53 years old"
            },
            {
              predicted: 5.3872,
              conf.low: 5.3195,
              conf.high: 5.4549,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              low: 5.32,
              high: 5.45,
              name: "53-66 years old"
            },
            {
              predicted: 5.6468,
              conf.low: 5.5773,
              conf.high: 5.7163,
              id: "Age_group",
              var: "stflife",
              displayName: "Age Group",
              low: 5.58,
              high: 5.72,
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
