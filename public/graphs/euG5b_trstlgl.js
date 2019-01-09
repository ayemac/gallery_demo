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
              B: "Eastern Orthodox",
              coefficients: 0.9391,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#8B1A1A",
              y: 0.9391,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "Politics",
              B: "Missing",
              coefficients: 0.616,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#C4C4C4",
              y: 0.616,
              name: "Politics: Missing"
            },
            {
              A: "religiousDenom",
              B: "Roman Catholic",
              coefficients: 0.5049,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Roman Catholic",
              col: "#C4C4C4",
              y: 0.5049,
              name: "Religion: Roman Catholic"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.3163,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.3163,
              name: "Income: Low Income"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.3017,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.3017,
              name: "Year: 2012"
            },
            {
              A: "union",
              B: "Former Member",
              coefficients: 0.2896,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Former Member",
              col: "#C4C4C4",
              y: 0.2896,
              name: "Union Member: Former Member"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.2625,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.2625,
              name: "Year: 2010"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.1693,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.1693,
              name: "Year: 2008"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.1185,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.1185,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.111,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.111,
              name: "Income: Missing"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.1085,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.1085,
              name: "Religion: Other Religion"
            },
            {
              A: "Age_group",
              B: "53-66 years old",
              coefficients: 0.1007,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 53-66 years old",
              col: "#C4C4C4",
              y: 0.1007,
              name: "Age Group: 53-66 years old"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.0819,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.0819,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.0771,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.0771,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "kidsAtHome",
              B: "Kids at Home",
              coefficients: 0.0594,
              sign: "NEG",
              var: "trstlgl",
              groupIcon: "fas fa-child",
              displayName: "Kids at Home",
              levelIcon: null,
              level: "Kids at Home: Kids at Home",
              col: "#C4C4C4",
              y: 0.0594,
              name: "Kids at Home: Kids at Home"
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
      colors: ["#8B1A1A", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4"],
      subtitle: {
        text: "Decreases Probability of Trust in Legal System",
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
      chart: {
        backgroundColor: "transparent"
      }
    }
  );
});
