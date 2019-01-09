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
              id: "Religion_Imp",
              var: "trstprt",
              displayName: "Religious Strength",
              y: 3.7422,
              name: "Not at all religious"
            },
            {
              predicted: 3.8675,
              conf.low: 3.7945,
              conf.high: 3.9406,
              id: "Religion_Imp",
              var: "trstprt",
              displayName: "Religious Strength",
              y: 3.8675,
              name: "Somewhat Religious"
            },
            {
              predicted: 4.1709,
              conf.low: 4.1014,
              conf.high: 4.2405,
              id: "Religion_Imp",
              var: "trstprt",
              displayName: "Religious Strength",
              y: 4.1709,
              name: "Very religious"
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
              id: "Religion_Imp",
              var: "trstprt",
              displayName: "Religious Strength",
              low: 3.67,
              high: 3.82,
              name: "Not at all religious"
            },
            {
              predicted: 3.8675,
              conf.low: 3.7945,
              conf.high: 3.9406,
              id: "Religion_Imp",
              var: "trstprt",
              displayName: "Religious Strength",
              low: 3.79,
              high: 3.94,
              name: "Somewhat Religious"
            },
            {
              predicted: 4.1709,
              conf.low: 4.1014,
              conf.high: 4.2405,
              id: "Religion_Imp",
              var: "trstprt",
              displayName: "Religious Strength",
              low: 4.1,
              high: 4.24,
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
