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
        headerFormat: "Predicted Trust in European Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "prayerFreq",
              var: "trstep",
              displayName: "Prayer Frequency",
              y: 4.842,
              name: "Prays Weekly +"
            },
            {
              predicted: 4.9872,
              conf.low: 4.9039,
              conf.high: 5.0705,
              id: "prayerFreq",
              var: "trstep",
              displayName: "Prayer Frequency",
              y: 4.9872,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.0559,
              conf.low: 4.972,
              conf.high: 5.1399,
              id: "prayerFreq",
              var: "trstep",
              displayName: "Prayer Frequency",
              y: 5.0559,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.842,
              conf.low: 4.7601,
              conf.high: 4.9239,
              id: "prayerFreq",
              var: "trstep",
              displayName: "Prayer Frequency",
              low: 4.76,
              high: 4.92,
              name: "Prays Weekly +"
            },
            {
              predicted: 4.9872,
              conf.low: 4.9039,
              conf.high: 5.0705,
              id: "prayerFreq",
              var: "trstep",
              displayName: "Prayer Frequency",
              low: 4.9,
              high: 5.07,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.0559,
              conf.low: 4.972,
              conf.high: 5.1399,
              id: "prayerFreq",
              var: "trstep",
              displayName: "Prayer Frequency",
              low: 4.97,
              high: 5.14,
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
