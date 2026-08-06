/*import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Holdings',
    },
  },
};
export function VerticalBarGraph({ data }) {
  return <Bar options={options} data={data} />;
}
*/
// src/components/VerticalBarChart.js
/*import Chart from 'react-apexcharts';

export default function VerticalBarGraph({ holdingsData = [] }) {
  
  // 1. Map data using numeric array indices for the X-axis so candles render thick and beautiful
  const seriesData = holdingsData.map((stock, index) => {
    const closePrice = stock.price || 0;
    const openPrice = stock.avg || closePrice; 
    
    // Using realistic mock wick values based on your open/close spread
    const highPrice = Math.max(openPrice, closePrice) * 1.03; 
    const lowPrice = Math.min(openPrice, closePrice) * 0.97;  

    return {
      x: index, // Numeric index prevents text compression issues
      y: [openPrice, highPrice, lowPrice, closePrice]
    };
  });

  // 2. Extract stock name strings to serve as custom axis categories
  const stockNames = holdingsData.map((stock) => stock.name || '');

  const options = {
    chart: { 
      type: 'candlestick', 
      toolbar: { show: false } 
    },
    xaxis: { 
      type: 'category',
      categories: stockNames, // Explicitly binds your stock labels directly below each candle position
      labels: { 
        style: { colors: '#707070', fontSize: '11px', fontWeight: 500 } 
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => `₹${val.toFixed(2)}`,
        style: { colors: '#707070', fontSize: '11px' }
      }
    },
    plotOptions: {
      candlestick: {
        colors: { 
          upward: '#388e3c',   // Traditional trading green
          downward: '#d32f2f'  // Traditional trading red
        },
        wick: {
          useFillColor: true   // Force vertical wick extensions to render visibly
        }
      }
    }
  };

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '850px', // Widened layout container lets multiple stocks spread out comfortably
      margin: '25px auto', 
      padding: '20px', 
      backgroundColor: '#fff', 
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <Chart 
        options={options} 
        series={[{ data: seriesData }]} 
        type="candlestick" 
        height={320} // Raised height slightly for clearer box visualization
      />
    </div>
  );
}*/


/*import Chart from 'react-apexcharts';

export default function VerticalBarGraph({ holdingsData = [] }) {
  const seriesData = holdingsData.map((stock) => {
    const closePrice = stock.price || 0;
    const openPrice = stock.avg || closePrice;
    const highPrice = Math.max(openPrice, closePrice) * 1.02;
    const lowPrice = Math.min(openPrice, closePrice) * 0.98;

    return {
      x: stock.name,
      y: [openPrice, highPrice, lowPrice, closePrice]
    };
  });

  const options = {
    chart: {
      type: 'candlestick',
      toolbar: { show: false },
    },
    xaxis: {
      type: 'category',
      labels: {
        style: { colors: '#707070', fontSize: '11px' }
      }
    },
    yaxis: {
      labels: {
        style: { colors: '#707070', fontSize: '11px' },
        formatter: (val) => `₹${val.toFixed(2)}`
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#388e3c',
          downward: '#d32f2f'
        }
      },
      boxPlot: {
        maxBoxWidth: 40
      }
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '20px auto', padding: '16px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h4 style={{ margin: '0 0 12px 0', color: '#4a4a4a', fontSize: '14px', fontWeight: 600 }}>
        Holdings Distribution
      </h4>
      <Chart options={options} series={[{ data: seriesData }]} type="candlestick" height={400} />
    </div>
  );
}*/
import React, { useMemo } from 'react';
import Chart from 'react-apexcharts';

const CHART_OPTIONS = {
  chart: {
    type: 'candlestick',
    toolbar: { show: false },
    animations: { enabled: false }
  },
  xaxis: {
    type: 'category',
    labels: {
      style: { colors: '#707070', fontSize: '11px' }
    }
  },
  yaxis: {
    labels: {
      style: { colors: '#707070', fontSize: '11px' },
      formatter: (val) => `₹${val.toFixed(2)}`
    }
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: '#388e3c',
        downward: '#d32f2f'
      }
    }
  }
};

export default function VerticalBarGraph({ holdingsData = [] }) {
  

  const computedSeries = useMemo(() => {
    if (!holdingsData || holdingsData.length === 0) return [{ data: [] }];

    const dataPoints = holdingsData.map((stock) => {
      const closePrice = stock.price || 0;
      const openPrice = stock.avg || closePrice;
      const highPrice = Math.max(openPrice, closePrice) * 1.02;
      const lowPrice = Math.min(openPrice, closePrice) * 0.98;

      return {
        x: stock.name || "Stock",
        y: [
          parseFloat(openPrice.toFixed(2)),
          parseFloat(highPrice.toFixed(2)),
          parseFloat(lowPrice.toFixed(2)),
          parseFloat(closePrice.toFixed(2))
        ]
      };
    });

    return [{ data: dataPoints }];
  }, [holdingsData]);

  // Return a safe placeholder canvas if no stock items exist
  if (!holdingsData || holdingsData.length === 0) {
    return <div style={{ padding: '20px', color: '#707070' }}>No holdings dataset found to map...</div>;
  }

  return (
    <div style={{ width: '100%', maxWidth: '900px', margin: '20px auto', padding: '16px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <h4 style={{ margin: '0 0 12px 0', color: '#4a4a4a', fontSize: '14px', fontWeight: 600 }}>
        Holdings Distribution
      </h4>
     
      <Chart options={CHART_OPTIONS} series={computedSeries} type="candlestick" height={400} />
    </div>
  );
}

