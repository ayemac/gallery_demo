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
        headerFormat: "Predicted Trust in Police",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "Religion_Imp",
              var: "trstplc",
              displayName: "Religious Strength",
              y: 6.2757,
              name: "Not at all religious"
            },
            {
              predicted: 6.3939,
              conf.low: 6.3184,
              conf.high: 6.4693,
              id: "Religion_Imp",
              var: "trstplc",
              displayName: "Religious Strength",
              y: 6.3939,
              name: "Somewhat Religious"
            },
            {
              predicted: 6.7019,
              conf.low: 6.6299,
              conf.high: 6.7738,
              id: "Religion_Imp",
              var: "trstplc",
              displayName: "Religious Strength",
              y: 6.7019,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.2757,
              conf.low: 6.2002,
              conf.high: 6.3512,
              id: "Religion_Imp",
              var: "trstplc",
              displayName: "Religious Strength",
              low: 6.2,
              high: 6.35,
              name: "Not at all religious"
            },
            {
              predicted: 6.3939,
              conf.low: 6.3184,
              conf.high: 6.4693,
              id: "Religion_Imp",
              var: "trstplc",
              displayName: "Religious Strength",
              low: 6.32,
              high: 6.47,
              name: "Somewhat Religious"
            },
            {
              predicted: 6.7019,
              conf.low: 6.6299,
              conf.high: 6.7738,
              id: "Religion_Imp",
              var: "trstplc",
              displayName: "Religious Strength",
              low: 6.63,
              high: 6.77,
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
