/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart = () => {
  const chartRef = useRef<any>(null);

  const data2 = {
    labels: [
      '5k',
      '10k',
      '15k',
      '20k',
      '25k',
      '30k',
      '35k',
      '40k',
      '45k',
      '50k',
      '55k',
      '60k',
    ],
    datasets: [
      {
        label: 'Sales Details',
        data: [20, 30, 40, 64.36, 50, 55, 35, 40, 45, 50, 42, 47], // Dữ liệu mẫu
        borderColor: '#007bff', // Màu đường biểu diễn
        backgroundColor: (context: any) => {
          const rgba = ['rgba(255, 26, 104, 0.5)', 'rgba(25, 26, 104, 0.5)'];
          if (!context.chart.chartArea) {
            return;
          }
          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradient = ctx.createLinearGradient(0, top, 0, bottom);
          gradient.addColorStop(1, rgba[0]);
          gradient.addColorStop(0.3, rgba[1]);
          return gradient;
        },
        fill: true, // Tạo phần nền mờ
        tension: 0.4, // Độ cong của đường
        pointRadius: 4, // Kích thước điểm dữ liệu
        pointBackgroundColor: '#007bff', // Màu điểm dữ liệu
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Ẩn legend (phần chú thích trên đầu)
      },
      tooltip: {
        callbacks: {
          label: function (context: { raw: number }) {
            return `${context.raw}, ${context.raw.toFixed(2)}`; // Custom hiển thị tooltip
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Tắt các đường kẻ dọc (gridlines)
        },
        title: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        grid: {
          drawBorder: false, // Tắt viền trục Y
          drawTicks: false, // Tắt ticks trên trục Y
        },
        ticks: {
          callback: function (value: number) {
            return `${value}%`; // Hiển thị % cho trục Y
          },
          maxTicksLimit: 5,
        },
        // beginAtZero: true,
        max: 100, // Giới hạn trục Y tối đa 100%
      },
    },
  };
  useEffect(() => {
    if (!chartRef.current) return;

    const chart = chartRef.current;
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;

    // Kiểm tra nếu chartArea đã sẵn sàng
    if (!chartArea) return;

    // Tạo gradient màu từ trên xuống
    const newGradient = ctx.createLinearGradient(
      0,
      chartArea.top,
      0,
      chartArea.bottom
    );
    newGradient.addColorStop(0, 'rgba(0, 123, 255, 0.5)'); // Xanh nhạt ở trên
    newGradient.addColorStop(1, 'rgba(0, 123, 255, 0)'); // Trong suốt ở dưới

    // Cập nhật lại biểu đồ sau khi gradient đã sẵn sàng
    chart.update();
  }, []);
  return (
    <div className="mt-10 w-auto">
      <Line ref={chartRef} options={options as any} data={data2 as any} />
    </div>
  );
};
