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
        headerFormat: "Predicted Trust in Legal System",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "Religion_Imp",
              var: "trstlgl",
              displayName: "Religious Strength",
              y: 5.4946,
              name: "Not at all religious"
            },
            {
              predicted: 5.5331,
              conf.low: 5.4552,
              conf.high: 5.6111,
              id: "Religion_Imp",
              var: "trstlgl",
              displayName: "Religious Strength",
              y: 5.5331,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.8995,
              conf.low: 5.8251,
              conf.high: 5.9739,
              id: "Religion_Imp",
              var: "trstlgl",
              displayName: "Religious Strength",
              y: 5.8995,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.4946,
              conf.low: 5.4166,
              conf.high: 5.5726,
              id: "Religion_Imp",
              var: "trstlgl",
              displayName: "Religious Strength",
              low: 5.42,
              high: 5.57,
              name: "Not at all religious"
            },
            {
              predicted: 5.5331,
              conf.low: 5.4552,
              conf.high: 5.6111,
              id: "Religion_Imp",
              var: "trstlgl",
              displayName: "Religious Strength",
              low: 5.46,
              high: 5.61,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.8995,
              conf.low: 5.8251,
              conf.high: 5.9739,
              id: "Religion_Imp",
              var: "trstlgl",
              displayName: "Religious Strength",
              low: 5.83,
              high: 5.97,
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
