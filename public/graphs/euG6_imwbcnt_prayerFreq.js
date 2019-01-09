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
        headerFormat: "Predicted Immigration Good for Country",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "prayerFreq",
              var: "imwbcnt",
              displayName: "Prayer Frequency",
              y: 4.9648,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.0287,
              conf.low: 4.9565,
              conf.high: 5.101,
              id: "prayerFreq",
              var: "imwbcnt",
              displayName: "Prayer Frequency",
              y: 5.0287,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.0696,
              conf.low: 4.9969,
              conf.high: 5.1424,
              id: "prayerFreq",
              var: "imwbcnt",
              displayName: "Prayer Frequency",
              y: 5.0696,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "prayerFreq",
              var: "imwbcnt",
              displayName: "Prayer Frequency",
              low: 4.89,
              high: 5.04,
              name: "Prays Weekly +"
            },
            {
              predicted: 5.0287,
              conf.low: 4.9565,
              conf.high: 5.101,
              id: "prayerFreq",
              var: "imwbcnt",
              displayName: "Prayer Frequency",
              low: 4.96,
              high: 5.1,
              name: "Prays Sometimes"
            },
            {
              predicted: 5.0696,
              conf.low: 4.9969,
              conf.high: 5.1424,
              id: "prayerFreq",
              var: "imwbcnt",
              displayName: "Prayer Frequency",
              low: 5,
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
