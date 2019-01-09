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
        headerFormat: "Predicted Trust in Politicians",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "prayerFreq",
              var: "trstplt",
              displayName: "Prayer Frequency",
              y: 3.7098,
              name: "Prays Weekly +"
            },
            {
              predicted: 3.8516,
              conf.low: 3.7799,
              conf.high: 3.9232,
              id: "prayerFreq",
              var: "trstplt",
              displayName: "Prayer Frequency",
              y: 3.8516,
              name: "Prays Sometimes"
            },
            {
              predicted: 3.9129,
              conf.low: 3.8408,
              conf.high: 3.9851,
              id: "prayerFreq",
              var: "trstplt",
              displayName: "Prayer Frequency",
              y: 3.9129,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "prayerFreq",
              var: "trstplt",
              displayName: "Prayer Frequency",
              low: 3.64,
              high: 3.78,
              name: "Prays Weekly +"
            },
            {
              predicted: 3.8516,
              conf.low: 3.7799,
              conf.high: 3.9232,
              id: "prayerFreq",
              var: "trstplt",
              displayName: "Prayer Frequency",
              low: 3.78,
              high: 3.92,
              name: "Prays Sometimes"
            },
            {
              predicted: 3.9129,
              conf.low: 3.8408,
              conf.high: 3.9851,
              id: "prayerFreq",
              var: "trstplt",
              displayName: "Prayer Frequency",
              low: 3.84,
              high: 3.99,
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
