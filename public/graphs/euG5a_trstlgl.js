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
              coefficients: 0.8851,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#458B74",
              y: 0.8851,
              name: "Religion: Protestant"
            },
            {
              A: "religiousDenom",
              B: "Islamic",
              coefficients: 0.6034,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#C4C4C4",
              y: 0.6034,
              name: "Religion: Islamic"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.4449,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.4449,
              name: "Union Member: Current Member"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.4358,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.4358,
              name: "Income: High Income"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.4243,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.4243,
              name: "Religious Strength: Very religious"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.3723,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.3723,
              name: "Education: High Education"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.3356,
              sign: "POS",
              var: "trstlgl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.3356,
              name: "Year: 2002"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.3341,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.3341,
              name: "Politics: Political Right"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.3104,
              sign: "POS",
              var: "trstlgl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.3104,
              name: "Year: 2016"
            },
            {
              A: "year",
              B: "2014",
              coefficients: 0.1916,
              sign: "POS",
              var: "trstlgl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2014",
              col: "#C4C4C4",
              y: 0.1916,
              name: "Year: 2014"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1607,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1607,
              name: "Marital Status: Never married"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.1385,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.1385,
              name: "Religion: Jewish"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.1362,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.1362,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "religiousAttend",
              B: "Attends Services Sometimes",
              coefficients: 0.1225,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Attends Services Sometimes",
              col: "#C4C4C4",
              y: 0.1225,
              name: "Church Attendance: Attends Services Sometimes"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.1189,
              sign: "POS",
              var: "trstlgl",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.1189,
              name: "Politics: Political Left"
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
        text: "Increases Probability of Trust in Legal System",
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
