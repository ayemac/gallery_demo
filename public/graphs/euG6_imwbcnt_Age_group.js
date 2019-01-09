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
        headerFormat: "Predicted Immigration Good for Country",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              y: 4.9648,
              name: "13-29 years old"
            },
            {
              predicted: 4.8325,
              conf.low: 4.7615,
              conf.high: 4.9035,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              y: 4.8325,
              name: "29-41 years old"
            },
            {
              predicted: 4.7892,
              conf.low: 4.7179,
              conf.high: 4.8604,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              y: 4.7892,
              name: "41-53 years old"
            },
            {
              predicted: 4.6734,
              conf.low: 4.6002,
              conf.high: 4.7467,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              y: 4.6734,
              name: "53-66 years old"
            },
            {
              predicted: 4.5763,
              conf.low: 4.501,
              conf.high: 4.6515,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              y: 4.5763,
              name: "66+ years old"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              low: 4.89,
              high: 5.04,
              name: "13-29 years old"
            },
            {
              predicted: 4.8325,
              conf.low: 4.7615,
              conf.high: 4.9035,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              low: 4.76,
              high: 4.9,
              name: "29-41 years old"
            },
            {
              predicted: 4.7892,
              conf.low: 4.7179,
              conf.high: 4.8604,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              low: 4.72,
              high: 4.86,
              name: "41-53 years old"
            },
            {
              predicted: 4.6734,
              conf.low: 4.6002,
              conf.high: 4.7467,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              low: 4.6,
              high: 4.75,
              name: "53-66 years old"
            },
            {
              predicted: 4.5763,
              conf.low: 4.501,
              conf.high: 4.6515,
              id: "Age_group",
              var: "imwbcnt",
              displayName: "Age Group",
              low: 4.5,
              high: 4.65,
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
