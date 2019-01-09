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
        headerFormat: "Predicted Trust in Legal System",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "prayerFreq",
              var: "trstlgl",
              displayName: "Prayer Frequency",
              y: 5.4946,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.6492,
              conf.low: 5.5699,
              conf.high: 5.7286,
              id: "prayerFreq",
              var: "trstlgl",
              displayName: "Prayer Frequency",
              y: 5.6492,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.7723,
              conf.low: 5.6924,
              conf.high: 5.8522,
              id: "prayerFreq",
              var: "trstlgl",
              displayName: "Prayer Frequency",
              y: 5.7723,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "prayerFreq",
              var: "trstlgl",
              displayName: "Prayer Frequency",
              low: 5.42,
              high: 5.57,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.6492,
              conf.low: 5.5699,
              conf.high: 5.7286,
              id: "prayerFreq",
              var: "trstlgl",
              displayName: "Prayer Frequency",
              low: 5.57,
              high: 5.73,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.7723,
              conf.low: 5.6924,
              conf.high: 5.8522,
              id: "prayerFreq",
              var: "trstlgl",
              displayName: "Prayer Frequency",
              low: 5.69,
              high: 5.85,
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
