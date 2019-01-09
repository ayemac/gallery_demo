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
        headerFormat: "Predicted Helpfulness",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "Religion_Imp",
              var: "pplhlp",
              displayName: "Religious Strength",
              y: 4.4109,
              name: "Not at all religious"
            },
            {
              predicted: 4.5085,
              conf.low: 4.4382,
              conf.high: 4.5788,
              id: "Religion_Imp",
              var: "pplhlp",
              displayName: "Religious Strength",
              y: 4.5085,
              name: "Somewhat Religious"
            },
            {
              predicted: 4.7008,
              conf.low: 4.6337,
              conf.high: 4.7679,
              id: "Religion_Imp",
              var: "pplhlp",
              displayName: "Religious Strength",
              y: 4.7008,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.4109,
              conf.low: 4.3406,
              conf.high: 4.4812,
              id: "Religion_Imp",
              var: "pplhlp",
              displayName: "Religious Strength",
              low: 4.34,
              high: 4.48,
              name: "Not at all religious"
            },
            {
              predicted: 4.5085,
              conf.low: 4.4382,
              conf.high: 4.5788,
              id: "Religion_Imp",
              var: "pplhlp",
              displayName: "Religious Strength",
              low: 4.44,
              high: 4.58,
              name: "Somewhat Religious"
            },
            {
              predicted: 4.7008,
              conf.low: 4.6337,
              conf.high: 4.7679,
              id: "Religion_Imp",
              var: "pplhlp",
              displayName: "Religious Strength",
              low: 4.63,
              high: 4.77,
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
