'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, FileText } from "lucide-react";
import { useCollection, useMemoFirebase } from "@/firebase";
import { collection, DocumentData } from "firebase/firestore";
import { useFirestore } from "@/firebase";
import { Skeleton } from "@/components/ui/skeleton";
import UserSignupChart from "@/components/admin/charts/UserSignupChart";
import ActiveUsers from "@/components/admin/ActiveUsers";

export default function DashboardPage() {
    const firestore = useFirestore();

    const usersQuery = useMemoFirebase(() => firestore ? collection(firestore, 'users') : null, [firestore]);
    const { data: users, isLoading: usersLoading } = useCollection<DocumentData>(usersQuery);

    const isLoading = usersLoading;

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        {isLoading ? <Skeleton className="h-8 w-1/2" /> : <div className="text-2xl font-bold">{users?.length ?? 0}</div>}
                        <p className="text-xs text-muted-foreground">All registered users</p>
                    </CardContent>
                </Card>
            </div>
            
             <div className="mt-8">
                <ActiveUsers />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>New Users</CardTitle>
                        <CardDescription>User sign-ups over the last 30 days.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {usersLoading ? <Skeleton className="h-[250px] w-full" /> : <UserSignupChart data={users || []} />}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
