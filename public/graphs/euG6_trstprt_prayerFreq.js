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
        headerFormat: "Predicted Trust in Political Parties",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "prayerFreq",
              var: "trstprt",
              displayName: "Prayer Frequency",
              y: 3.7422,
              name: "Prays Weekly +"
            },
            {
              predicted: 3.8982,
              conf.low: 3.8238,
              conf.high: 3.9727,
              id: "prayerFreq",
              var: "trstprt",
              displayName: "Prayer Frequency",
              y: 3.8982,
              name: "Prays Sometimes"
            },
            {
              predicted: 3.936,
              conf.low: 3.861,
              conf.high: 4.0111,
              id: "prayerFreq",
              var: "trstprt",
              displayName: "Prayer Frequency",
              y: 3.936,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7422,
              conf.low: 3.6691,
              conf.high: 3.8153,
              id: "prayerFreq",
              var: "trstprt",
              displayName: "Prayer Frequency",
              low: 3.67,
              high: 3.82,
              name: "Prays Weekly +"
            },
            {
              predicted: 3.8982,
              conf.low: 3.8238,
              conf.high: 3.9727,
              id: "prayerFreq",
              var: "trstprt",
              displayName: "Prayer Frequency",
              low: 3.82,
              high: 3.97,
              name: "Prays Sometimes"
            },
            {
              predicted: 3.936,
              conf.low: 3.861,
              conf.high: 4.0111,
              id: "prayerFreq",
              var: "trstprt",
              displayName: "Prayer Frequency",
              low: 3.86,
              high: 4.01,
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
