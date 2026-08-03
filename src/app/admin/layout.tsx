import AdminSidebar from '@/components/admin/Sidebar';
import { type ReactNode } from 'react';

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-10rem)]">
      <AdminSidebar />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
