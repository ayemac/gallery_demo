$(function () {
  $('#container').highcharts({
      title: {
        text: null
      },
      yAxis: {
        title: {
          text: ""
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
          showInLegend: false,
          marker: {
            enabled: true
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
        bar: {
          dataLabels: {
            enabled: true,
            format: "{point.y}"
          },
          enableMouseTracking: true
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
        backgroundColor: "#ffffff",
        shared: true,
        borderWidth: 1,
        headerFormat: "Trust in United Nations Level:  {point.x}<br>"
      },
      series: [
        {
          group: "group",
          data: [
            {
              nocFctr: "0",
              n: 27367,
              mode: "#030303",
              y: 27367,
              name: "0"
            },
            {
              nocFctr: "1",
              n: 14016,
              mode: "#030303",
              y: 14016,
              name: "1"
            },
            {
              nocFctr: "2",
              n: 19644,
              mode: "#030303",
              y: 19644,
              name: "2"
            },
            {
              nocFctr: "3",
              n: 26752,
              mode: "#030303",
              y: 26752,
              name: "3"
            },
            {
              nocFctr: "4",
              n: 30373,
              mode: "#030303",
              y: 30373,
              name: "4"
            },
            {
              nocFctr: "5",
              n: 65536,
              mode: "#68228B",
              y: 65536,
              name: "5"
            },
            {
              nocFctr: "6",
              n: 42246,
              mode: "#030303",
              y: 42246,
              name: "6"
            },
            {
              nocFctr: "7",
              n: 47730,
              mode: "#030303",
              y: 47730,
              name: "7"
            },
            {
              nocFctr: "8",
              n: 39570,
              mode: "#030303",
              y: 39570,
              name: "8"
            },
            {
              nocFctr: "9",
              n: 16122,
              mode: "#030303",
              y: 16122,
              name: "9"
            },
            {
              nocFctr: "10",
              n: 10317,
              mode: "#030303",
              y: 10317,
              name: "10"
            }
          ],
          type: "column",
          name: "Frequency",
          colorByPoint: true
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: "Distribution of Trust in United Nations (10-point scale)"
        }
      },
      legend: {
        enabled: false
      },
      colors: ["#030303", "#030303", "#030303", "#030303", "#030303", "#68228B", "#030303", "#030303", "#030303", "#030303", "#030303"]
    }
  );
});
