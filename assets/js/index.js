var options = {
  chart: {
    type: "line"
  },
  colors: ["#F44336", "#E91E63", "#9C27B0"],
  series: [
    {
      name: "sales",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  }
};

var options2 = {
  chart: {
    type: "line"
  },
  series: [
    {
      name: "sales",
      data: [100, 3000, 2000, 4000, 3000]
    }
  ],
  xaxis: {
    categories: [2020, 2021, 2022, 2023, 2024]
  }
};
var chart = new ApexCharts(document.querySelector("#chart"), options);
var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart.render();
chart2.render();
