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
        headerFormat: "Predicted Support for the E.U.",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "prayerFreq",
              var: "euftf",
              displayName: "Prayer Frequency",
              y: 5.6238,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.7395,
              conf.low: 5.6397,
              conf.high: 5.8393,
              id: "prayerFreq",
              var: "euftf",
              displayName: "Prayer Frequency",
              y: 5.7395,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.813,
              conf.low: 5.7124,
              conf.high: 5.9136,
              id: "prayerFreq",
              var: "euftf",
              displayName: "Prayer Frequency",
              y: 5.813,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.6238,
              conf.low: 5.5259,
              conf.high: 5.7218,
              id: "prayerFreq",
              var: "euftf",
              displayName: "Prayer Frequency",
              low: 5.53,
              high: 5.72,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.7395,
              conf.low: 5.6397,
              conf.high: 5.8393,
              id: "prayerFreq",
              var: "euftf",
              displayName: "Prayer Frequency",
              low: 5.64,
              high: 5.84,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.813,
              conf.low: 5.7124,
              conf.high: 5.9136,
              id: "prayerFreq",
              var: "euftf",
              displayName: "Prayer Frequency",
              low: 5.71,
              high: 5.91,
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
