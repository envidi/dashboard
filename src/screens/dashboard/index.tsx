import { AdminLayout } from '@/layouts';
import { useTranslation } from 'next-i18next';

import Decrease from './assets/decrease.svg';
import GroupUser from './assets/group-user.svg';
import Increase from './assets/increase.svg';
import Square from './assets/square-3d.svg';
import Stonk from './assets/stonk.svg';
import Time from './assets/time.svg';
import { Chart } from './components';

export const Dashboard = () => {
  const { t } = useTranslation('common');

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

  return (
    <AdminLayout>
      <div className="h-full bg-background-twelve p-6">
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
        <Chart />
      </div>
    </AdminLayout>
  );
};
