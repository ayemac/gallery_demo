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
        headerFormat: "Predicted Social Trust",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "Religion_Imp",
              var: "ppltrst",
              displayName: "Religious Strength",
              y: 4.1117,
              name: "Not at all religious"
            },
            {
              predicted: 4.1389,
              conf.low: 4.0663,
              conf.high: 4.2115,
              id: "Religion_Imp",
              var: "ppltrst",
              displayName: "Religious Strength",
              y: 4.1389,
              name: "Somewhat Religious"
            },
            {
              predicted: 4.411,
              conf.low: 4.3417,
              conf.high: 4.4802,
              id: "Religion_Imp",
              var: "ppltrst",
              displayName: "Religious Strength",
              y: 4.411,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.1117,
              conf.low: 4.0391,
              conf.high: 4.1844,
              id: "Religion_Imp",
              var: "ppltrst",
              displayName: "Religious Strength",
              low: 4.04,
              high: 4.18,
              name: "Not at all religious"
            },
            {
              predicted: 4.1389,
              conf.low: 4.0663,
              conf.high: 4.2115,
              id: "Religion_Imp",
              var: "ppltrst",
              displayName: "Religious Strength",
              low: 4.07,
              high: 4.21,
              name: "Somewhat Religious"
            },
            {
              predicted: 4.411,
              conf.low: 4.3417,
              conf.high: 4.4802,
              id: "Religion_Imp",
              var: "ppltrst",
              displayName: "Religious Strength",
              low: 4.34,
              high: 4.48,
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
