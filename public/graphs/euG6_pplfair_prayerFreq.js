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
        headerFormat: "Predicted Fairness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "prayerFreq",
              var: "pplfair",
              displayName: "Prayer Frequency",
              y: 5.1436,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.235,
              conf.low: 5.1646,
              conf.high: 5.3053,
              id: "prayerFreq",
              var: "pplfair",
              displayName: "Prayer Frequency",
              y: 5.235,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.3697,
              conf.low: 5.2989,
              conf.high: 5.4405,
              id: "prayerFreq",
              var: "pplfair",
              displayName: "Prayer Frequency",
              y: 5.3697,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.1436,
              conf.low: 5.0744,
              conf.high: 5.2128,
              id: "prayerFreq",
              var: "pplfair",
              displayName: "Prayer Frequency",
              low: 5.07,
              high: 5.21,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.235,
              conf.low: 5.1646,
              conf.high: 5.3053,
              id: "prayerFreq",
              var: "pplfair",
              displayName: "Prayer Frequency",
              low: 5.16,
              high: 5.31,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.3697,
              conf.low: 5.2989,
              conf.high: 5.4405,
              id: "prayerFreq",
              var: "pplfair",
              displayName: "Prayer Frequency",
              low: 5.3,
              high: 5.44,
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
