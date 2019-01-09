$(function () {
  $('#container').highcharts({
      title: {
        text: "<h4>\n  Education\n  <br/>\n<\/h4>",
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
        headerFormat: "Predicted Immigration Good for Country",
        pointFormat: ": {point.y}"
      },
      series: [
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "Education",
              var: "imwbcnt",
              displayName: "Education",
              y: 4.9648,
              name: "Low Education"
            },
            {
              predicted: 5.2536,
              conf.low: 5.1835,
              conf.high: 5.3238,
              id: "Education",
              var: "imwbcnt",
              displayName: "Education",
              y: 5.2536,
              name: "Middle Education"
            },
            {
              predicted: 5.8685,
              conf.low: 5.7973,
              conf.high: 5.9397,
              id: "Education",
              var: "imwbcnt",
              displayName: "Education",
              y: 5.8685,
              name: "High Education"
            }
          ],
          type: "line"
        },
        {
          group: "group",
          data: [
            {
              predicted: 4.9648,
              conf.low: 4.8938,
              conf.high: 5.0359,
              id: "Education",
              var: "imwbcnt",
              displayName: "Education",
              low: 4.89,
              high: 5.04,
              name: "Low Education"
            },
            {
              predicted: 5.2536,
              conf.low: 5.1835,
              conf.high: 5.3238,
              id: "Education",
              var: "imwbcnt",
              displayName: "Education",
              low: 5.18,
              high: 5.32,
              name: "Middle Education"
            },
            {
              predicted: 5.8685,
              conf.low: 5.7973,
              conf.high: 5.9397,
              id: "Education",
              var: "imwbcnt",
              displayName: "Education",
              low: 5.8,
              high: 5.94,
              name: "High Education"
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
