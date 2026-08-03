'use client';
import AdminDashboardLayout from './(dashboard)/layout';
import DashboardPage from './(dashboard)/page';

export default function AdminPage() {
    return (
        <AdminDashboardLayout>
            <DashboardPage />
        </AdminDashboardLayout>
    );
}
