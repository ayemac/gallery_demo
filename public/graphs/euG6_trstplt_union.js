$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Union Member\n  <br/>\n<\/h4>",
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
              id: "union",
              var: "trstplt",
              displayName: "Union Member",
              y: 3.7098,
              name: "Current Member"
            },
            {
              predicted: 3.5933,
              conf.low: 3.5236,
              conf.high: 3.663,
              id: "union",
              var: "trstplt",
              displayName: "Union Member",
              y: 3.5933,
              name: "Former Member"
            },
            {
              predicted: 3.6725,
              conf.low: 3.6057,
              conf.high: 3.7392,
              id: "union",
              var: "trstplt",
              displayName: "Union Member",
              y: 3.6725,
              name: "Non-member"
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
              id: "union",
              var: "trstplt",
              displayName: "Union Member",
              low: 3.64,
              high: 3.78,
              name: "Current Member"
            },
            {
              predicted: 3.5933,
              conf.low: 3.5236,
              conf.high: 3.663,
              id: "union",
              var: "trstplt",
              displayName: "Union Member",
              low: 3.52,
              high: 3.66,
              name: "Former Member"
            },
            {
              predicted: 3.6725,
              conf.low: 3.6057,
              conf.high: 3.7392,
              id: "union",
              var: "trstplt",
              displayName: "Union Member",
              low: 3.61,
              high: 3.74,
              name: "Non-member"
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
