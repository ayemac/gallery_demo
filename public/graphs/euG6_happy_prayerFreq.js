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
        headerFormat: "Predicted Happiness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "prayerFreq",
              var: "happy",
              displayName: "Prayer Frequency",
              y: 6.6558,
              name: "Prays Weekly +"
            },
            {
              predicted: 6.6962,
              conf.low: 6.6364,
              conf.high: 6.756,
              id: "prayerFreq",
              var: "happy",
              displayName: "Prayer Frequency",
              y: 6.6962,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.8586,
              conf.low: 6.7984,
              conf.high: 6.9188,
              id: "prayerFreq",
              var: "happy",
              displayName: "Prayer Frequency",
              y: 6.8586,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "prayerFreq",
              var: "happy",
              displayName: "Prayer Frequency",
              low: 6.6,
              high: 6.71,
              name: "Prays Weekly +"
            },
            {
              predicted: 6.6962,
              conf.low: 6.6364,
              conf.high: 6.756,
              id: "prayerFreq",
              var: "happy",
              displayName: "Prayer Frequency",
              low: 6.64,
              high: 6.76,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.8586,
              conf.low: 6.7984,
              conf.high: 6.9188,
              id: "prayerFreq",
              var: "happy",
              displayName: "Prayer Frequency",
              low: 6.8,
              high: 6.92,
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
