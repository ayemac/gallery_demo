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
        headerFormat: "Predicted Trust in Parliament",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Religion_Imp",
              var: "trstprl",
              displayName: "Religious Strength",
              y: 4.6353,
              name: "Not at all religious"
            },
            {
              predicted: 4.7259,
              conf.low: 4.6497,
              conf.high: 4.802,
              id: "Religion_Imp",
              var: "trstprl",
              displayName: "Religious Strength",
              y: 4.7259,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.0701,
              conf.low: 4.9975,
              conf.high: 5.1428,
              id: "Religion_Imp",
              var: "trstprl",
              displayName: "Religious Strength",
              y: 5.0701,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.6353,
              conf.low: 4.5592,
              conf.high: 4.7115,
              id: "Religion_Imp",
              var: "trstprl",
              displayName: "Religious Strength",
              low: 4.56,
              high: 4.71,
              name: "Not at all religious"
            },
            {
              predicted: 4.7259,
              conf.low: 4.6497,
              conf.high: 4.802,
              id: "Religion_Imp",
              var: "trstprl",
              displayName: "Religious Strength",
              low: 4.65,
              high: 4.8,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.0701,
              conf.low: 4.9975,
              conf.high: 5.1428,
              id: "Religion_Imp",
              var: "trstprl",
              displayName: "Religious Strength",
              low: 5,
              high: 5.14,
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
