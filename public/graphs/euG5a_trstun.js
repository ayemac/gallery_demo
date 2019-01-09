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
              coefficients: 1.0812,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#458B74",
              y: 1.0812,
              name: "Religion: Protestant"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.4739,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.4739,
              name: "Religion: Other Religion"
            },
            {
              A: "religiousDenom",
              B: "Roman Catholic",
              coefficients: 0.4479,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Roman Catholic",
              col: "#C4C4C4",
              y: 0.4479,
              name: "Religion: Roman Catholic"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.4478,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.4478,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.4086,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.4086,
              name: "Politics: Political Right"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.3178,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.3178,
              name: "Union Member: Current Member"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.3004,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.3004,
              name: "Income: High Income"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.2809,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.2809,
              name: "Religious Strength: Very religious"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.2808,
              sign: "POS",
              var: "trstun",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.2808,
              name: "Education: High Education"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.2315,
              sign: "POS",
              var: "trstun",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.2315,
              name: "Marital Status: Never married"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.1684,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.1684,
              name: "Politics: Political Left"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.1601,
              sign: "POS",
              var: "trstun",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.1601,
              name: "Year: 2002"
            },
            {
              A: "religiousAttend",
              B: "Attends Services Sometimes",
              coefficients: 0.109,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-church",
              displayName: "Church Attendance",
              levelIcon: null,
              level: "Church Attendance: Attends Services Sometimes",
              col: "#C4C4C4",
              y: 0.109,
              name: "Church Attendance: Attends Services Sometimes"
            },
            {
              A: "year",
              B: "2004",
              coefficients: 0.0628,
              sign: "POS",
              var: "trstun",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2004",
              col: "#C4C4C4",
              y: 0.0628,
              name: "Year: 2004"
            },
            {
              A: "prayerFreq",
              B: "Never Prays",
              coefficients: 0.0587,
              sign: "POS",
              var: "trstun",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Never Prays",
              col: "#C4C4C4",
              y: 0.0587,
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
        text: "Increases Probability of Trust in United Nations",
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
