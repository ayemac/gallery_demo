$(function () {
  $('#container').highcharts({
      title: {
        text: ""
      },
      yAxis: {
        title: {
          text: "Importance"
        },
        type: "linear",
        min: 0,
        max: 1
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
          colorByPoint: true,
          dataLabels: {
            enabled: true,
            format: "{point.y:.2f}"
          },
          enableMouseTracking: true
        }
      },
      annotationsOptions: {
        enabledButtons: false
      },
      tooltip: {
        delayForDisplay: 10,
        crosshairs: {
          enabled: true,
          color: "rgba(43,144,143,0.15)"
        },
        backgroundColor: "#f0f0f0",
        pointFormat: "{point.y:.2f}",
        shared: true,
        borderWidth: 1
      },
      series: [
        {
          group: "group",
          data: [
            {
              A: "religiousDenom",
              B: "Protestant",
              coefficients: 0.8036,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#458B74",
              y: 0.8036,
              name: "Religion: Protestant"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.7532,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.7532,
              name: "Religion: Islamic"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.4967,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.4967,
              name: "Politics: Political Right"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.46,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.46,
              name: "Union Member: Current Member"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.4241,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.4241,
              name: "Education: High Education"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.4223,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.4223,
              name: "Income: High Income"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.3985,
              sign: "POS",
              var: "trstprl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.3985,
              name: "Year: 2002"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.3723,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.3723,
              name: "Religious Strength: Very religious"
            },
            {
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.2372,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#C4C4C4",
              y: 0.2372,
              name: "Age Group: 66+ years old"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1807,
              sign: "POS",
              var: "trstprl",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1807,
              name: "Marital Status: Never married"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.1629,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.1629,
              name: "Politics: Political Left"
            },
            {
              A: "year",
              B: "2004",
              coefficients: 0.1608,
              sign: "POS",
              var: "trstprl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2004",
              col: "#C4C4C4",
              y: 0.1608,
              name: "Year: 2004"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.147,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.147,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.1201,
              sign: "POS",
              var: "trstprl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.1201,
              name: "Year: 2016"
            },
            {
              A: "prayerFreq",
              B: "Never Prays",
              coefficients: 0.0924,
              sign: "POS",
              var: "trstprl",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Never Prays",
              col: "#C4C4C4",
              y: 0.0924,
              name: "Prayer Frequency: Never Prays"
            }
          ],
          type: "bar",
          name: "Importance"
        }
      ],
      xAxis: {
        type: "category",
        title: {
          text: ""
        }
      },
      subtitle: {
        text: "Increases Probability of Trust in Parliament",
        style: {
          color: "#2b908f",
          fontWeight: "normal",
          fontSize: "16px"
        }
      },
      legend: {
        enabled: false,
        layout: "horizontal",
        verticalAlign: "bottom",
        floating: false,
        align: "center",
        style: {
          fontsize: "14px"
        }
      },
      colors: ["#458B74", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4"],
      chart: {
        backgroundColor: "transparent"
      }
    }
  );
});
