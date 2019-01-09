$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Religious Strength\n  <br/>\n<\/h4>",
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
        headerFormat: "Predicted Immigration Good for Culture",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "Religion_Imp",
              var: "imueclt",
              displayName: "Religious Strength",
              y: 6.1338,
              name: "Not at all religious"
            },
            {
              predicted: 6.1736,
              conf.low: 6.0971,
              conf.high: 6.2502,
              id: "Religion_Imp",
              var: "imueclt",
              displayName: "Religious Strength",
              y: 6.1736,
              name: "Somewhat Religious"
            },
            {
              predicted: 6.4286,
              conf.low: 6.3556,
              conf.high: 6.5016,
              id: "Religion_Imp",
              var: "imueclt",
              displayName: "Religious Strength",
              y: 6.4286,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.1338,
              conf.low: 6.0573,
              conf.high: 6.2104,
              id: "Religion_Imp",
              var: "imueclt",
              displayName: "Religious Strength",
              low: 6.06,
              high: 6.21,
              name: "Not at all religious"
            },
            {
              predicted: 6.1736,
              conf.low: 6.0971,
              conf.high: 6.2502,
              id: "Religion_Imp",
              var: "imueclt",
              displayName: "Religious Strength",
              low: 6.1,
              high: 6.25,
              name: "Somewhat Religious"
            },
            {
              predicted: 6.4286,
              conf.low: 6.3556,
              conf.high: 6.5016,
              id: "Religion_Imp",
              var: "imueclt",
              displayName: "Religious Strength",
              low: 6.36,
              high: 6.5,
              name: "Very religious"
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
