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
              A: "Education",
              B: "High Education",
              coefficients: 0.5776,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#458B74",
              y: 0.5776,
              name: "Education: High Education"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.4515,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.4515,
              name: "Religion: Jewish"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.3902,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.3902,
              name: "Politics: Political Left"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.3126,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.3126,
              name: "Union Member: Current Member"
            },
            {
              A: "religiousDenom",
              B: "Protestant",
              coefficients: 0.2864,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#C4C4C4",
              y: 0.2864,
              name: "Religion: Protestant"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.2489,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.2489,
              name: "Income: High Income"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.2142,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.2142,
              name: "Marital Status: Never married"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.2096,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.2096,
              name: "Religious Strength: Very religious"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.1749,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.1749,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "Minority",
              B: "Minority",
              coefficients: 0.1628,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Minority",
              col: "#C4C4C4",
              y: 0.1628,
              name: "Race: Minority"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.1429,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.1429,
              name: "Year: 2012"
            },
            {
              A: "religiousAttend",
              B: "Attends Services Weekly +",
              coefficients: 0.1319,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Attends Services Weekly +",
              col: "#C4C4C4",
              y: 0.1319,
              name: "Church Attendance: Attends Services Weekly +"
            },
            {
              A: "year",
              B: "2014",
              coefficients: 0.1259,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2014",
              col: "#C4C4C4",
              y: 0.1259,
              name: "Year: 2014"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.123,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.123,
              name: "Religion: Other Religion"
            },
            {
              A: "Age_group",
              B: "29-41 years old",
              coefficients: 0.0354,
              sign: "POS",
              var: "imwbcnt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 29-41 years old",
              col: "#C4C4C4",
              y: 0.0354,
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
      subtitle: {
        text: "Increases Probability of Immigration Good for Country",
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
