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
        headerFormat: "Predicted Trust in United Nations",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "Religion_Imp",
              var: "trstun",
              displayName: "Religious Strength",
              y: 5.0693,
              name: "Not at all religious"
            },
            {
              predicted: 5.1471,
              conf.low: 5.0648,
              conf.high: 5.2294,
              id: "Religion_Imp",
              var: "trstun",
              displayName: "Religious Strength",
              y: 5.1471,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.4376,
              conf.low: 5.3591,
              conf.high: 5.5162,
              id: "Religion_Imp",
              var: "trstun",
              displayName: "Religious Strength",
              y: 5.4376,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 5.0693,
              conf.low: 4.987,
              conf.high: 5.1516,
              id: "Religion_Imp",
              var: "trstun",
              displayName: "Religious Strength",
              low: 4.99,
              high: 5.15,
              name: "Not at all religious"
            },
            {
              predicted: 5.1471,
              conf.low: 5.0648,
              conf.high: 5.2294,
              id: "Religion_Imp",
              var: "trstun",
              displayName: "Religious Strength",
              low: 5.06,
              high: 5.23,
              name: "Somewhat Religious"
            },
            {
              predicted: 5.4376,
              conf.low: 5.3591,
              conf.high: 5.5162,
              id: "Religion_Imp",
              var: "trstun",
              displayName: "Religious Strength",
              low: 5.36,
              high: 5.52,
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
