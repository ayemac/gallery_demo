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
        headerFormat: "Predicted Immigration Good for Economy",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "prayerFreq",
              var: "imbgeco",
              displayName: "Prayer Frequency",
              y: 4.9488,
              name: "Prays Weekly +"
            },
            {
              predicted: 4.9964,
              conf.low: 4.9186,
              conf.high: 5.0743,
              id: "prayerFreq",
              var: "imbgeco",
              displayName: "Prayer Frequency",
              y: 4.9964,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.0717,
              conf.low: 4.9933,
              conf.high: 5.1501,
              id: "prayerFreq",
              var: "imbgeco",
              displayName: "Prayer Frequency",
              y: 5.0717,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9488,
              conf.low: 4.8722,
              conf.high: 5.0253,
              id: "prayerFreq",
              var: "imbgeco",
              displayName: "Prayer Frequency",
              low: 4.87,
              high: 5.03,
              name: "Prays Weekly +"
            },
            {
              predicted: 4.9964,
              conf.low: 4.9186,
              conf.high: 5.0743,
              id: "prayerFreq",
              var: "imbgeco",
              displayName: "Prayer Frequency",
              low: 4.92,
              high: 5.07,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.0717,
              conf.low: 4.9933,
              conf.high: 5.1501,
              id: "prayerFreq",
              var: "imbgeco",
              displayName: "Prayer Frequency",
              low: 4.99,
              high: 5.15,
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
