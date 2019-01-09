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
        headerFormat: "Predicted Life Satisfaction",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "prayerFreq",
              var: "stflife",
              displayName: "Prayer Frequency",
              y: 6.0801,
              name: "Prays Weekly +"
            },
            {
              predicted: 6.1487,
              conf.low: 6.0819,
              conf.high: 6.2155,
              id: "prayerFreq",
              var: "stflife",
              displayName: "Prayer Frequency",
              y: 6.1487,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.3195,
              conf.low: 6.2522,
              conf.high: 6.3867,
              id: "prayerFreq",
              var: "stflife",
              displayName: "Prayer Frequency",
              y: 6.3195,
              name: "Never Prays"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.0801,
              conf.low: 6.0145,
              conf.high: 6.1458,
              id: "prayerFreq",
              var: "stflife",
              displayName: "Prayer Frequency",
              low: 6.01,
              high: 6.15,
              name: "Prays Weekly +"
            },
            {
              predicted: 6.1487,
              conf.low: 6.0819,
              conf.high: 6.2155,
              id: "prayerFreq",
              var: "stflife",
              displayName: "Prayer Frequency",
              low: 6.08,
              high: 6.22,
              name: "Prays Sometimes"
            },
            {
              predicted: 6.3195,
              conf.low: 6.2522,
              conf.high: 6.3867,
              id: "prayerFreq",
              var: "stflife",
              displayName: "Prayer Frequency",
              low: 6.25,
              high: 6.39,
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
