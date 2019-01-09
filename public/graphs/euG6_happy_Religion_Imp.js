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
        headerFormat: "Predicted Happiness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "Religion_Imp",
              var: "happy",
              displayName: "Religious Strength",
              y: 6.6558,
              name: "Not at all religious"
            },
            {
              predicted: 6.8198,
              conf.low: 6.7611,
              conf.high: 6.8786,
              id: "Religion_Imp",
              var: "happy",
              displayName: "Religious Strength",
              y: 6.8198,
              name: "Somewhat Religious"
            },
            {
              predicted: 7.0495,
              conf.low: 6.9935,
              conf.high: 7.1056,
              id: "Religion_Imp",
              var: "happy",
              displayName: "Religious Strength",
              y: 7.0495,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 6.6558,
              conf.low: 6.597,
              conf.high: 6.7146,
              id: "Religion_Imp",
              var: "happy",
              displayName: "Religious Strength",
              low: 6.6,
              high: 6.71,
              name: "Not at all religious"
            },
            {
              predicted: 6.8198,
              conf.low: 6.7611,
              conf.high: 6.8786,
              id: "Religion_Imp",
              var: "happy",
              displayName: "Religious Strength",
              low: 6.76,
              high: 6.88,
              name: "Somewhat Religious"
            },
            {
              predicted: 7.0495,
              conf.low: 6.9935,
              conf.high: 7.1056,
              id: "Religion_Imp",
              var: "happy",
              displayName: "Religious Strength",
              low: 6.99,
              high: 7.11,
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
