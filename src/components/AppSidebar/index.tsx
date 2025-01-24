import { useState } from 'react';
import { TranslationsType } from '@/types';
import { useTranslation } from 'next-i18next';

import { Separator } from '@/components/ui/separator';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

import Calendar from '../../../public/assets/calendar.svg';
import Chat from '../../../public/assets/chat.svg';
import Contact from '../../../public/assets/contact.svg';
import Pricing from '../../../public/assets/pricing.svg';
import Square from '../../../public/assets/square.svg';
import Stock from '../../../public/assets/stock.svg';

export function AppSidebar() {
  const [selected, setSelected] = useState<string>();
  const { open } = useSidebar();
  const { t } = useTranslation<TranslationsType>('common');
  const items = [
    {
      title: t('sidebar.dashboard'),
      url: '#',
      icon: Square,
    },
    {
      title: t('sidebar.products'),
      url: '#',
      icon: Chat,
    },
    {
      title: t('sidebar.favorites'),
      url: '#',
      icon: Calendar,
    },
    {
      title: t('sidebar.inbox'),
      url: '#',
      icon: Contact,
    },
    {
      title: t('sidebar.orderLists'),
      url: '#',
      icon: Pricing,
    },
    {
      title: t('sidebar.productStock'),
      url: '#',
      icon: Stock,
    },
  ];
  const pages = [
    {
      title: t('sidebar.pricing'),
      url: '#',
      icon: Square,
    },
    {
      title: t('sidebar.calender'),
      url: '#',
      icon: Chat,
    },
    {
      title: t('sidebar.contact'),
      url: '#',
      icon: Calendar,
    },
    {
      title: t('sidebar.invoice'),
      url: '#',
      icon: Contact,
    },
    {
      title: t('sidebar.team'),
      url: '#',
      icon: Pricing,
    },
    {
      title: t('sidebar.table'),
      url: '#',
      icon: Stock,
    },
    {
      title: t('sidebar.toDo'),
      url: '#',
      icon: Calendar,
    },
    {
      title: t('sidebar.uiElements'),
      url: '#',
      icon: Contact,
    },
  ];
  return (
    <Sidebar collapsible="icon" variant="sidebar" className="w-60">
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarGroupLabel>
            <div className="text-[1.25rem] leading-[1.705rem] text-[#4880FF]">
              Dash
            </div>
            <div className="text-[1.25rem] leading-[1.705rem] text-text-primary">
              Stack
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex justify-start "
                  onClick={() => setSelected(item?.title)}
                >
                  <div
                    className={`ml-[-5px] ${open ? 'mr-4' : 'mr-0'} h-auto w-[9px]  rounded-r-[100px] ${selected === item?.title ? 'bg-primary' : 'bg-transparent'}`}
                  ></div>

                  <SidebarMenuButton
                    asChild
                    isActive={open && selected === item?.title}
                    className={`w-48 rounded-[.375rem] ${!open && 'hover:bg-transparent'} ${!open && 'active:bg-transparent'}`}
                  >
                    <a href={item.url} className="h-auto py-4 pl-[3.375rem] ">
                      {!open && (
                        <item.icon
                          className={`!h-6 !w-6 text-text-primary/50 ${selected === item?.title && '!text-text-secondary'}`}
                        />
                      )}

                      <span className="text-[.875rem] leading-[1.1938rem]">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <Separator className="my-3 bg-background-thirdty/50" />
            <SidebarMenu>
              <SidebarGroupLabel>
                <div className="text-[.75rem] uppercase leading-4 text-text-primary/50">
                  Pages
                </div>
              </SidebarGroupLabel>
              {pages.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex justify-start "
                  onClick={() => setSelected(item?.title)}
                >
                  <div
                    className={`ml-[-5px] ${open ? 'mr-4' : 'mr-0'} h-auto w-[9px]  rounded-r-[100px] ${selected === item?.title ? 'bg-primary' : 'bg-transparent'}`}
                  ></div>
                  <SidebarMenuButton
                    asChild
                    isActive={open && selected === item?.title}
                    className={`w-48 rounded-[.375rem] ${!open && 'hover:bg-transparent'} ${!open && 'active:bg-transparent'}`}
                  >
                    <a
                      href={item.url}
                      className="h-auto py-4 pl-[3.375rem] text-[.875rem] leading-[1.1938rem]"
                    >
                      {!open && (
                        <item.icon
                          className={`!h-6 !w-6 text-text-primary/50 ${selected === item?.title && '!text-text-secondary'}`}
                        />
                      )}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
