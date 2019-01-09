$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Prayer Frequency\n  <br/>\n<\/h4>",
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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "prayerFreq",
              var: "trstprl",
              displayName: "Prayer Frequency",
              y: 4.6353,
              name: "Prays Weekly +"
            },
            {
              predicted: 4.7615,
              conf.low: 4.684,
              conf.high: 4.839,
              id: "prayerFreq",
              var: "trstprl",
              displayName: "Prayer Frequency",
              y: 4.7615,
              name: "Prays Sometimes"
            },
            {
              predicted: 4.8359,
              conf.low: 4.7579,
              conf.high: 4.914,
              id: "prayerFreq",
              var: "trstprl",
              displayName: "Prayer Frequency",
              y: 4.8359,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "prayerFreq",
              var: "trstprl",
              displayName: "Prayer Frequency",
              low: 4.56,
              high: 4.71,
              name: "Prays Weekly +"
            },
            {
              predicted: 4.7615,
              conf.low: 4.684,
              conf.high: 4.839,
              id: "prayerFreq",
              var: "trstprl",
              displayName: "Prayer Frequency",
              low: 4.68,
              high: 4.84,
              name: "Prays Sometimes"
            },
            {
              predicted: 4.8359,
              conf.low: 4.7579,
              conf.high: 4.914,
              id: "prayerFreq",
              var: "trstprl",
              displayName: "Prayer Frequency",
              low: 4.76,
              high: 4.91,
              name: "Never Prays"
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
