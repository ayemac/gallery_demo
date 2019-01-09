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
              coefficients: 0.693,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#458B74",
              y: 0.693,
              name: "Education: High Education"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.5241,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.5241,
              name: "Politics: Political Left"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.3648,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.3648,
              name: "Union Member: Current Member"
            },
            {
              A: "religiousDenom",
              B: "Protestant",
              coefficients: 0.3524,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#C4C4C4",
              y: 0.3524,
              name: "Religion: Protestant"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.3282,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.3282,
              name: "Income: High Income"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.2607,
              sign: "POS",
              var: "imueclt",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.2607,
              name: "Marital Status: Never married"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.2477,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.2477,
              name: "Religious Strength: Very religious"
            },
            {
              A: "year",
              B: "2002",
              coefficients: 0.2331,
              sign: "POS",
              var: "imueclt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2002",
              col: "#C4C4C4",
              y: 0.2331,
              name: "Year: 2002"
            },
            {
              A: "Minority",
              B: "Minority",
              coefficients: 0.1869,
              sign: "POS",
              var: "imueclt",
              groupIcon: "far fa-user-circle",
              displayName: "Race",
              levelIcon: null,
              level: "Race: Minority",
              col: "#C4C4C4",
              y: 0.1869,
              name: "Race: Minority"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.107,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.107,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.0955,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.0955,
              name: "Religion: Other Religion"
            },
            {
              A: "year",
              B: "2012",
              coefficients: 0.0815,
              sign: "POS",
              var: "imueclt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2012",
              col: "#C4C4C4",
              y: 0.0815,
              name: "Year: 2012"
            },
            {
              A: "religiousDenom",
              B: "Jewish",
              coefficients: 0.0798,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Jewish",
              col: "#C4C4C4",
              y: 0.0798,
              name: "Religion: Jewish"
            },
            {
              A: "Gender",
              B: "Female",
              coefficients: 0.0406,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-genderless",
              displayName: "Gender",
              levelIcon: null,
              level: "Gender: Female",
              col: "#C4C4C4",
              y: 0.0406,
              name: "Gender: Female"
            },
            {
              A: "income",
              B: "Middle Income",
              coefficients: 0.0301,
              sign: "POS",
              var: "imueclt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Middle Income",
              col: "#C4C4C4",
              y: 0.0301,
              name: "Income: Middle Income"
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
        text: "Increases Probability of Immigration Good for Culture",
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
