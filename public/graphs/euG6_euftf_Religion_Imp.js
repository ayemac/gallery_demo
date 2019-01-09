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
              id: "Religion_Imp",
              var: "euftf",
              displayName: "Religious Strength",
              y: 5.6238,
              name: "Not at all religious"
            },
            {
              predicted: 5.7349,
              conf.low: 5.637,
              conf.high: 5.8328,
              id: "Religion_Imp",
              var: "euftf",
              displayName: "Religious Strength",
              y: 5.7349,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.9441,
              conf.low: 5.851,
              conf.high: 6.0372,
              id: "Religion_Imp",
              var: "euftf",
              displayName: "Religious Strength",
              y: 5.9441,
              name: "Very religious"
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
              id: "Religion_Imp",
              var: "euftf",
              displayName: "Religious Strength",
              low: 5.53,
              high: 5.72,
              name: "Not at all religious"
            },
            {
              predicted: 5.7349,
              conf.low: 5.637,
              conf.high: 5.8328,
              id: "Religion_Imp",
              var: "euftf",
              displayName: "Religious Strength",
              low: 5.64,
              high: 5.83,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.9441,
              conf.low: 5.851,
              conf.high: 6.0372,
              id: "Religion_Imp",
              var: "euftf",
              displayName: "Religious Strength",
              low: 5.85,
              high: 6.04,
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
