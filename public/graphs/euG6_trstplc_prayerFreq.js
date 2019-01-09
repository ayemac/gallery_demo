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
        headerFormat: "Predicted Trust in Police",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "prayerFreq",
              var: "trstplc",
              displayName: "Prayer Frequency",
              y: 6.2757,
              name: "Prays Weekly +"
            },
            {
              predicted: 6.3506,
              conf.low: 6.2738,
              conf.high: 6.4273,
              id: "prayerFreq",
              var: "trstplc",
              displayName: "Prayer Frequency",
              y: 6.3506,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.4831,
              conf.low: 6.4058,
              conf.high: 6.5604,
              id: "prayerFreq",
              var: "trstplc",
              displayName: "Prayer Frequency",
              y: 6.4831,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "prayerFreq",
              var: "trstplc",
              displayName: "Prayer Frequency",
              low: 6.2,
              high: 6.35,
              name: "Prays Weekly +"
            },
            {
              predicted: 6.3506,
              conf.low: 6.2738,
              conf.high: 6.4273,
              id: "prayerFreq",
              var: "trstplc",
              displayName: "Prayer Frequency",
              low: 6.27,
              high: 6.43,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.4831,
              conf.low: 6.4058,
              conf.high: 6.5604,
              id: "prayerFreq",
              var: "trstplc",
              displayName: "Prayer Frequency",
              low: 6.41,
              high: 6.56,
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
