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
        headerFormat: "Predicted Helpfulness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "prayerFreq",
              var: "pplhlp",
              displayName: "Prayer Frequency",
              y: 4.4109,
              name: "Prays Weekly +"
            },
            {
              predicted: 4.5149,
              conf.low: 4.4433,
              conf.high: 4.5864,
              id: "prayerFreq",
              var: "pplhlp",
              displayName: "Prayer Frequency",
              y: 4.5149,
              name: "Prays Sometimes"
            },
            {
              predicted: 4.5625,
              conf.low: 4.4905,
              conf.high: 4.6345,
              id: "prayerFreq",
              var: "pplhlp",
              displayName: "Prayer Frequency",
              y: 4.5625,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "prayerFreq",
              var: "pplhlp",
              displayName: "Prayer Frequency",
              low: 4.34,
              high: 4.48,
              name: "Prays Weekly +"
            },
            {
              predicted: 4.5149,
              conf.low: 4.4433,
              conf.high: 4.5864,
              id: "prayerFreq",
              var: "pplhlp",
              displayName: "Prayer Frequency",
              low: 4.44,
              high: 4.59,
              name: "Prays Sometimes"
            },
            {
              predicted: 4.5625,
              conf.low: 4.4905,
              conf.high: 4.6345,
              id: "prayerFreq",
              var: "pplhlp",
              displayName: "Prayer Frequency",
              low: 4.49,
              high: 4.63,
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
