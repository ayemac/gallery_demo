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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "prayerFreq",
              var: "trstun",
              displayName: "Prayer Frequency",
              y: 5.0693,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.1903,
              conf.low: 5.1066,
              conf.high: 5.2741,
              id: "prayerFreq",
              var: "trstun",
              displayName: "Prayer Frequency",
              y: 5.1903,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.2588,
              conf.low: 5.1745,
              conf.high: 5.3432,
              id: "prayerFreq",
              var: "trstun",
              displayName: "Prayer Frequency",
              y: 5.2588,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "prayerFreq",
              var: "trstun",
              displayName: "Prayer Frequency",
              low: 4.99,
              high: 5.15,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.1903,
              conf.low: 5.1066,
              conf.high: 5.2741,
              id: "prayerFreq",
              var: "trstun",
              displayName: "Prayer Frequency",
              low: 5.11,
              high: 5.27,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.2588,
              conf.low: 5.1745,
              conf.high: 5.3432,
              id: "prayerFreq",
              var: "trstun",
              displayName: "Prayer Frequency",
              low: 5.17,
              high: 5.34,
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
