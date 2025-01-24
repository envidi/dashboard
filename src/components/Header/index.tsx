import { useRouter } from 'next/router';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SidebarTrigger } from '@/components/ui/sidebar';

import { ModeToggle } from '../ModeToggle';
import { Input } from '../ui/input';
import NotifyIcon from './assets/notify-icon.svg';
import Search from './assets/search.svg';

export const Header = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const handleSwitchLanguage = (value: string) => {
    router.push({ pathname, query }, asPath, { locale: value });
  };

  return (
    <div className="flex w-full items-center justify-between bg-sidebar px-[1.625rem] py-4">
      <div className="flex items-center">
        <SidebarTrigger />
        <div className="flex items-center rounded-[1.25rem] border-[0.0375rem] border-border-secondary px-[.625rem]  ">
          <Search className="text-text-primary/80" />
          <Input
            className="border-none text-text-primary shadow-none focus-visible:outline-none focus-visible:ring-0"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative">
          <NotifyIcon />
          <div className="absolute right-[-4px] top-[-7px] flex size-4 items-center justify-center rounded-full bg-[red] text-[.675rem]">
            5
          </div>
        </div>
        <Select
          onValueChange={(value) => handleSwitchLanguage(value)}
          defaultValue="en"
        >
          <SelectTrigger className="w-[90px] border-none text-text-thirty shadow-none">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-text-thirty">
              <SelectItem value="vi">Vietnamese</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <ModeToggle />
      </div>
    </div>
  );
};
