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
              B: "Islamic",
              coefficients: 0.622,
              sign: "POS",
              var: "euftf",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Islamic",
              col: "#458B74",
              y: 0.622,
              name: "Religion: Islamic"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.4367,
              sign: "POS",
              var: "euftf",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.4367,
              name: "Education: High Education"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.421,
              sign: "POS",
              var: "euftf",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.421,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "religiousDenom",
              B: "Eastern Orthodox",
              coefficients: 0.3052,
              sign: "POS",
              var: "euftf",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Eastern Orthodox",
              col: "#C4C4C4",
              y: 0.3052,
              name: "Religion: Eastern Orthodox"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.2151,
              sign: "POS",
              var: "euftf",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.2151,
              name: "Politics: Political Left"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.2091,
              sign: "POS",
              var: "euftf",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.2091,
              name: "Religious Strength: Very religious"
            },
            {
              A: "year",
              B: "2004",
              coefficients: 0.2023,
              sign: "POS",
              var: "euftf",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2004",
              col: "#C4C4C4",
              y: 0.2023,
              name: "Year: 2004"
            },
            {
              A: "year",
              B: "2008",
              coefficients: 0.1857,
              sign: "POS",
              var: "euftf",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2008",
              col: "#C4C4C4",
              y: 0.1857,
              name: "Year: 2008"
            },
            {
              A: "union",
              B: "Non-member",
              coefficients: 0.1063,
              sign: "POS",
              var: "euftf",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Non-member",
              col: "#C4C4C4",
              y: 0.1063,
              name: "Union Member: Non-member"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1054,
              sign: "POS",
              var: "euftf",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1054,
              name: "Marital Status: Never married"
            },
            {
              A: "Marital_Status",
              B: "Married",
              coefficients: 0.1031,
              sign: "POS",
              var: "euftf",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Married",
              col: "#C4C4C4",
              y: 0.1031,
              name: "Marital Status: Married"
            },
            {
              A: "year",
              B: "2006",
              coefficients: 0.0968,
              sign: "POS",
              var: "euftf",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2006",
              col: "#C4C4C4",
              y: 0.0968,
              name: "Year: 2006"
            },
            {
              A: "prayerFreq",
              B: "Never Prays",
              coefficients: 0.0932,
              sign: "POS",
              var: "euftf",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Never Prays",
              col: "#C4C4C4",
              y: 0.0932,
              name: "Prayer Frequency: Never Prays"
            },
            {
              A: "Age_group",
              B: "29-41 years old",
              coefficients: 0.0711,
              sign: "POS",
              var: "euftf",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 29-41 years old",
              col: "#C4C4C4",
              y: 0.0711,
              name: "Age Group: 29-41 years old"
            },
            {
              A: "religiousAttend",
              B: "Attends Services Weekly +",
              coefficients: 0.0521,
              sign: "POS",
              var: "euftf",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Attends Services Weekly +",
              col: "#C4C4C4",
              y: 0.0521,
              name: "Church Attendance: Attends Services Weekly +"
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
        text: "Increases Probability of Support for the E.U.",
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
