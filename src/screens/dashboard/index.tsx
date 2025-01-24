/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import { AdminLayout } from '@/layouts';
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
import { useTranslation } from 'next-i18next';
import { Line } from 'react-chartjs-2';

import Decrease from './assets/decrease.svg';
import GroupUser from './assets/group-user.svg';
import Increase from './assets/increase.svg';
import Square from './assets/square-3d.svg';
import Stonk from './assets/stonk.svg';
import Time from './assets/time.svg';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

export const Dashboard = () => {
  const { t } = useTranslation('common');
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

  const data = [
    {
      value: '40,689',
      percent: '8.5%',
      time: t('card.upFromYesterday'),
      type: t('card.totalUser'),
      icon: <GroupUser />,
      status: 'increase',
      color: 'bg-background-eighty',
      textColor: 'text-text-eighty',
    },
    {
      value: '10,293',
      percent: '1.3%',
      time: t('card.upFromPastWeek'),
      type: t('card.totalOrder'),
      icon: <Square />,
      status: 'increase',
      color: 'bg-background-ninety',
      textColor: 'text-text-ninety',
    },
    {
      value: '$89,000',
      percent: '4.3%',
      time: t('card.downFromYesterday'),
      type: t('card.totalSales'),
      icon: <Stonk />,
      status: 'decrease',
      color: 'bg-background-tenty',
      textColor: 'text-text-tenty',
    },
    {
      value: '2040',
      percent: '1.8%',
      time: t('card.upFromYesterday'),
      type: t('card.totalPending'),
      icon: <Time />,
      status: 'increase',
      color: 'bg-background-eleventy',
      textColor: 'text-text-eleventy',
    },
  ];

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
    <AdminLayout>
      <div className="bg-background-twelve p-6">
        <h1 className="mb-6 text-2xl font-semibold text-text-primary">
          Dashboard
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 ">
          {data.map((item, index) => (
            <div
              className="rounded-[14px] bg-background-thirteen  px-4 py-3 shadow-sm "
              key={index}
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <p className="text-[1rem] font-medium leading-[1.3125rem] text-text-primary/70">
                      {item.type}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[1.75rem] font-bold text-text-primary">
                      {item.value}
                    </p>
                  </div>
                </div>
                <div
                  className={`flex size-[3.75rem] items-center justify-center rounded-[1.4375rem] ${item.color} ${item.textColor} p-3`}
                >
                  {item.icon}
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                {item.status === 'increase' ? <Increase /> : <Decrease />}
                <p
                  className={`text-sm font-medium ${item.status === 'increase' ? 'text-text-sixty' : 'text-text-seventy'} `}
                >
                  {item.percent}
                </p>
                <p className="text-sm text-text-fifty/70">{item.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 w-auto">
          <Line ref={chartRef} options={options as any} data={data2 as any} />
        </div>
      </div>
    </AdminLayout>
  );
};
