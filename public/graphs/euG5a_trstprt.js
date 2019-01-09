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
              coefficients: 0.991,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Protestant",
              col: "#458B74",
              y: 0.991,
              name: "Religion: Protestant"
            },
            {
              A: "Politics",
              B: "Political Right",
              coefficients: 0.5144,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Right",
              col: "#C4C4C4",
              y: 0.5144,
              name: "Politics: Political Right"
            },
            {
              A: "union",
              B: "Current Member",
              coefficients: 0.4965,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-users",
              displayName: "Union Member",
              levelIcon: null,
              level: "Union Member: Current Member",
              col: "#C4C4C4",
              y: 0.4965,
              name: "Union Member: Current Member"
            },
            {
              A: "Religion_Imp",
              B: "Very religious",
              coefficients: 0.3642,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-praying-hands",
              displayName: "Religious Strength",
              levelIcon: null,
              level: "Religious Strength: Very religious",
              col: "#C4C4C4",
              y: 0.3642,
              name: "Religious Strength: Very religious"
            },
            {
              A: "income",
              B: "High Income",
              coefficients: 0.3525,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: High Income",
              col: "#C4C4C4",
              y: 0.3525,
              name: "Income: High Income"
            },
            {
              A: "religiousDenom",
              B: "Other Religion",
              coefficients: 0.27,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-cross",
              displayName: "Religion",
              levelIcon: null,
              level: "Religion: Other Religion",
              col: "#C4C4C4",
              y: 0.27,
              name: "Religion: Other Religion"
            },
            {
              A: "Age_group",
              B: "13-29 years old",
              coefficients: 0.2533,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 13-29 years old",
              col: "#C4C4C4",
              y: 0.2533,
              name: "Age Group: 13-29 years old"
            },
            {
              A: "Age_group",
              B: "66+ years old",
              coefficients: 0.2493,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-birthday-cake",
              displayName: "Age Group",
              levelIcon: null,
              level: "Age Group: 66+ years old",
              col: "#C4C4C4",
              y: 0.2493,
              name: "Age Group: 66+ years old"
            },
            {
              A: "Politics",
              B: "Political Left",
              coefficients: 0.1946,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-balance-scale",
              displayName: "Politics",
              levelIcon: null,
              level: "Politics: Political Left",
              col: "#C4C4C4",
              y: 0.1946,
              name: "Politics: Political Left"
            },
            {
              A: "Education",
              B: "High Education",
              coefficients: 0.1769,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fasfa-user-graduate",
              displayName: "Education",
              levelIcon: null,
              level: "Education: High Education",
              col: "#C4C4C4",
              y: 0.1769,
              name: "Education: High Education"
            },
            {
              A: "Marital_Status",
              B: "Never married",
              coefficients: 0.1384,
              sign: "POS",
              var: "trstprt",
              groupIcon: "far fa-handshake",
              displayName: "Marital Status",
              levelIcon: null,
              level: "Marital Status: Never married",
              col: "#C4C4C4",
              y: 0.1384,
              name: "Marital Status: Never married"
            },
            {
              A: "year",
              B: "2004",
              coefficients: 0.104,
              sign: "POS",
              var: "trstprt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2004",
              col: "#C4C4C4",
              y: 0.104,
              name: "Year: 2004"
            },
            {
              A: "income",
              B: "Middle Income",
              coefficients: 0.0831,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-dollar-sign",
              displayName: "Income",
              levelIcon: null,
              level: "Income: Middle Income",
              col: "#C4C4C4",
              y: 0.0831,
              name: "Income: Middle Income"
            },
            {
              A: "year",
              B: "2016",
              coefficients: 0.0721,
              sign: "POS",
              var: "trstprt",
              groupIcon: null,
              displayName: "Year",
              levelIcon: null,
              level: "Year: 2016",
              col: "#C4C4C4",
              y: 0.0721,
              name: "Year: 2016"
            },
            {
              A: "prayerFreq",
              B: "Never Prays",
              coefficients: 0.0686,
              sign: "POS",
              var: "trstprt",
              groupIcon: "fas fa-pray",
              displayName: "Prayer Frequency",
              levelIcon: null,
              level: "Prayer Frequency: Never Prays",
              col: "#C4C4C4",
              y: 0.0686,
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
        text: "Increases Probability of Trust in Political Parties",
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
