export const chartOptions = {
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
  layout: {
    padding: {
      right: 50
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          fontColor: '#fff',
          padding: 20
        },
        barThickness: 40
      }
    ],
    xAxes: [
      {
        display: false
      }
    ]
  }
};
