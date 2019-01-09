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
              A: "Politics",
              B: "Missing",
              coefficients: 0.6,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Missing",
              col: "#8B1A1A",
              y: 0.6,
              name: "Politics: Missing"
            },
            {
              A: "religiousDenom",
              B: "Eastern Orthodox",
              coefficients: 0.5016,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#C4C4C4",
              y: 0.5016,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.4468,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.4468,
              name: "Religion: Jewish"
            },
            {
              A: "income",
              B: "Low Income",
              coefficients: 0.2964,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Low Income",
              col: "#C4C4C4",
              y: 0.2964,
              name: "Income: Low Income"
            },
            {
              A: "year",
              B: "2010",
              coefficients: 0.2681,
              sign: "NEG",
              var: "trstplt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2010",
              col: "#C4C4C4",
              y: 0.2681,
              name: "Year: 2010"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.2589,
              sign: "NEG",
              var: "trstplt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.2589,
              name: "Year: 2012"
            },
            {
              A: "religiousAttend",
              B: "Never Attends Services",
              coefficients: 0.2226,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Never Attends Services",
              col: "#C4C4C4",
              y: 0.2226,
              name: "Church Attendance: Never Attends Services"
            },
            {
              A: "religiousDenom",
              B: "Roman Catholic",
              coefficients: 0.1772,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Roman Catholic",
              col: "#C4C4C4",
              y: 0.1772,
              name: "Religion: Roman Catholic"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.1698,
              sign: "NEG",
              var: "trstplt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.1698,
              name: "Year: 2008"
            },
            {
              A: "Religion_Imp",
              B: "Not at all religious",
              coefficients: 0.1489,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Not at all religious",
              col: "#C4C4C4",
              y: 0.1489,
              name: "Religious Strength: Not at all religious"
            },
            {
              A: "prayerFreq",
              B: "Prays Weekly +",
              coefficients: 0.1447,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Prays Weekly +",
              col: "#C4C4C4",
              y: 0.1447,
              name: "Prayer Frequency: Prays Weekly +"
            },
            {
              A: "union",
              B: "Former Member",
              coefficients: 0.1016,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Former Member",
              col: "#C4C4C4",
              y: 0.1016,
              name: "Union Member: Former Member"
            },
            {
              A: "income",
              B: "Missing",
              coefficients: 0.1003,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Missing",
              col: "#C4C4C4",
              y: 0.1003,
              name: "Income: Missing"
            },
            {
              A: "Marital_Status",
              B: "Divorced/Sep",
              coefficients: 0.0977,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Divorced/Sep",
              col: "#C4C4C4",
              y: 0.0977,
              name: "Marital Status: Divorced/Sep"
            },
            {
              A: "Age_group",
              B: "29-41 years old",
              coefficients: 0.0775,
              sign: "NEG",
              var: "trstplt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 29-41 years old",
              col: "#C4C4C4",
              y: 0.0775,
              name: "Age Group: 29-41 years old"
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
        text: "Decreases Probability of Trust in Politicians",
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
