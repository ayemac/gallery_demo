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
        headerFormat: "Predicted Job Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "prayerFreq",
              var: "stfjb",
              displayName: "Prayer Frequency",
              y: 5.9145,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.894,
              conf.low: 5.7158,
              conf.high: 6.0721,
              id: "prayerFreq",
              var: "stfjb",
              displayName: "Prayer Frequency",
              y: 5.894,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.0485,
              conf.low: 5.8688,
              conf.high: 6.2282,
              id: "prayerFreq",
              var: "stfjb",
              displayName: "Prayer Frequency",
              y: 6.0485,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.9145,
              conf.low: 5.7399,
              conf.high: 6.0891,
              id: "prayerFreq",
              var: "stfjb",
              displayName: "Prayer Frequency",
              low: 5.74,
              high: 6.09,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.894,
              conf.low: 5.7158,
              conf.high: 6.0721,
              id: "prayerFreq",
              var: "stfjb",
              displayName: "Prayer Frequency",
              low: 5.72,
              high: 6.07,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.0485,
              conf.low: 5.8688,
              conf.high: 6.2282,
              id: "prayerFreq",
              var: "stfjb",
              displayName: "Prayer Frequency",
              low: 5.87,
              high: 6.23,
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
