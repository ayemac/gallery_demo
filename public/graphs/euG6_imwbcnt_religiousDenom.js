$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Religion\n  <br/>\n<\/h4>",
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
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              y: 4.9648,
              name: "Roman Catholic"
            },
            {
              predicted: 5.0592,
              conf.low: 4.9872,
              conf.high: 5.1313,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              y: 5.0592,
              name: "Protestant"
            },
            {
              predicted: 5.1136,
              conf.low: 5.0339,
              conf.high: 5.1933,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              y: 5.1136,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.2185,
              conf.low: 5.1483,
              conf.high: 5.2886,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              y: 5.2185,
              name: "Other Religion"
            },
            {
              predicted: 7.1924,
              conf.low: 7.0768,
              conf.high: 7.308,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              y: 7.1924,
              name: "Jewish"
            },
            {
              predicted: 5.5497,
              conf.low: 5.4679,
              conf.high: 5.6316,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              y: 5.5497,
              name: "Islamic"
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
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              low: 4.89,
              high: 5.04,
              name: "Roman Catholic"
            },
            {
              predicted: 5.0592,
              conf.low: 4.9872,
              conf.high: 5.1313,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              low: 4.99,
              high: 5.13,
              name: "Protestant"
            },
            {
              predicted: 5.1136,
              conf.low: 5.0339,
              conf.high: 5.1933,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              low: 5.03,
              high: 5.19,
              name: "Eastern Orthodox"
            },
            {
              predicted: 5.2185,
              conf.low: 5.1483,
              conf.high: 5.2886,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              low: 5.15,
              high: 5.29,
              name: "Other Religion"
            },
            {
              predicted: 7.1924,
              conf.low: 7.0768,
              conf.high: 7.308,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              low: 7.08,
              high: 7.31,
              name: "Jewish"
            },
            {
              predicted: 5.5497,
              conf.low: 5.4679,
              conf.high: 5.6316,
              id: "religiousDenom",
              var: "imwbcnt",
              displayName: "Religion",
              low: 5.47,
              high: 5.63,
              name: "Islamic"
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
