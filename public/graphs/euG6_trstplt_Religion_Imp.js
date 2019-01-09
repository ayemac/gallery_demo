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
        headerFormat: "Predicted Trust in Politicians",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "Religion_Imp",
              var: "trstplt",
              displayName: "Religious Strength",
              y: 3.7098,
              name: "Not at all religious"
            },
            {
              predicted: 3.819,
              conf.low: 3.7486,
              conf.high: 3.8894,
              id: "Religion_Imp",
              var: "trstplt",
              displayName: "Religious Strength",
              y: 3.819,
              name: "Somewhat Religious"
            },
            {
              predicted: 4.1411,
              conf.low: 4.0739,
              conf.high: 4.2082,
              id: "Religion_Imp",
              var: "trstplt",
              displayName: "Religious Strength",
              y: 4.1411,
              name: "Very religious"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 3.7098,
              conf.low: 3.6394,
              conf.high: 3.7803,
              id: "Religion_Imp",
              var: "trstplt",
              displayName: "Religious Strength",
              low: 3.64,
              high: 3.78,
              name: "Not at all religious"
            },
            {
              predicted: 3.819,
              conf.low: 3.7486,
              conf.high: 3.8894,
              id: "Religion_Imp",
              var: "trstplt",
              displayName: "Religious Strength",
              low: 3.75,
              high: 3.89,
              name: "Somewhat Religious"
            },
            {
              predicted: 4.1411,
              conf.low: 4.0739,
              conf.high: 4.2082,
              id: "Religion_Imp",
              var: "trstplt",
              displayName: "Religious Strength",
              low: 4.07,
              high: 4.21,
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
