import { AppSidebar, Header } from '@/components';

import { SidebarProvider } from '@/components/ui/sidebar';

interface Props {
  children: React.ReactNode;
}

export const AdminLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        {children}
      </main>
    </SidebarProvider>
  );
};
