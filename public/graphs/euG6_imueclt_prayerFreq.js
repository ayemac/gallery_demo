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
        headerFormat: "Predicted Immigration Good for Culture",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "prayerFreq",
              var: "imueclt",
              displayName: "Prayer Frequency",
              y: 6.1338,
              name: "Prays Weekly +"
            },
            {
              predicted: 6.1677,
              conf.low: 6.0899,
              conf.high: 6.2456,
              id: "prayerFreq",
              var: "imueclt",
              displayName: "Prayer Frequency",
              y: 6.1677,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.2514,
              conf.low: 6.1729,
              conf.high: 6.3298,
              id: "prayerFreq",
              var: "imueclt",
              displayName: "Prayer Frequency",
              y: 6.2514,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "prayerFreq",
              var: "imueclt",
              displayName: "Prayer Frequency",
              low: 6.06,
              high: 6.21,
              name: "Prays Weekly +"
            },
            {
              predicted: 6.1677,
              conf.low: 6.0899,
              conf.high: 6.2456,
              id: "prayerFreq",
              var: "imueclt",
              displayName: "Prayer Frequency",
              low: 6.09,
              high: 6.25,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.2514,
              conf.low: 6.1729,
              conf.high: 6.3298,
              id: "prayerFreq",
              var: "imueclt",
              displayName: "Prayer Frequency",
              low: 6.17,
              high: 6.33,
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
