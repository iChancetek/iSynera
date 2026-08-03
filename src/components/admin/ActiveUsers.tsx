'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useActiveUsers } from "@/firebase/auth/use-user";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { Activity, User } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';

export default function ActiveUsers() {
    const { activeUsers, isLoading } = useActiveUsers();

    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <CardTitle>Real-Time Activity</CardTitle>
                </div>
                <CardDescription>Users active within the last 5 minutes.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {isLoading ? (
                        Array.from({ length: 3 }).map((_, i) => (
                           <div key={i} className="flex items-center gap-4">
                                <Skeleton className="h-10 w-10 rounded-full" />
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-4 w-48" />
                                </div>
                           </div>
                        ))
                    ) : activeUsers && activeUsers.length > 0 ? (
                        activeUsers.map(user => (
                            <div key={user.id} className="flex items-center gap-4 p-2 rounded-md hover:bg-muted/50">
                                <Avatar className="h-10 w-10">
                                    <AvatarFallback>
                                        <User />
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="font-semibold text-sm">{user.firstName} {user.lastName}</p>
                                    <p className="text-xs text-muted-foreground">{user.email}</p>
                                </div>
                                <div className="flex-shrink-0 w-64">
                                     {user.lastSeen && (
                                        <p className="text-xs text-muted-foreground">
                                            Last seen {formatDistanceToNow(new Date(user.lastSeen.seconds * 1000), { addSuffix: true })}
                                        </p>
                                     )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-muted-foreground py-4">No users are currently active.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
