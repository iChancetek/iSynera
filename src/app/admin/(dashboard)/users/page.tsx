
'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Loader2, UserPlus, Trash2, Edit, UserCheck, UserX } from "lucide-react";
import { useCollection, useMemoFirebase } from "@/firebase";
import { collection, DocumentData } from "firebase/firestore";
import { useFirestore } from "@/firebase";
import { UserEditDialog } from "@/components/admin/UserEditDialog";
import { UserDeleteDialog } from "@/components/admin/UserDeleteDialog";

export type UserData = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    roles?: string[];
    signUpDate?: { seconds: number; nanoseconds: number; };
    disabled?: boolean;
};

export default function UserManagementPage() {
    const firestore = useFirestore();
    const usersQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'users');
    }, [firestore]);

    const { data: users, isLoading } = useCollection<DocumentData>(usersQuery);

    const [dialogState, setDialogState] = useState<{
        isEditOpen: boolean;
        isDeleteOpen: boolean;
        currentUser: UserData | null;
    }>({ isEditOpen: false, isDeleteOpen: false, currentUser: null });

    const getRole = (user: DocumentData) => {
        if (user.roles?.includes('admin')) {
            return 'Admin';
        }
        return 'User';
    }

    const formatDate = (timestamp: any) => {
        if (!timestamp || !timestamp.seconds) return 'N/A';
        return new Date(timestamp.seconds * 1000).toLocaleDateString();
    }

    const handleOpenCreate = () => {
        setDialogState({ isEditOpen: true, isDeleteOpen: false, currentUser: null });
    };

    const handleOpenEdit = (user: UserData) => {
        setDialogState({ isEditOpen: true, isDeleteOpen: false, currentUser: user });
    };
    
    const handleOpenDelete = (user: UserData) => {
        setDialogState({ isDeleteOpen: true, isEditOpen: false, currentUser: user });
    };

    const handleCloseDialog = () => {
        setDialogState({ isEditOpen: false, isDeleteOpen: false, currentUser: null });
    };
    
    return (
        <>
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">User Management</h1>
                    <Button onClick={handleOpenCreate}>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Create New User
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>All Users</CardTitle>
                        <CardDescription>A list of all user accounts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Date Joined</TableHead>
                                    <TableHead><span className="sr-only">Actions</span></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {isLoading ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center">
                                            <div className="flex justify-center items-center p-8">
                                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : users && users.length > 0 ? (
                                    users.map(user => (
                                        <TableRow key={user.id}>
                                            <TableCell className="font-medium">{user.firstName} {user.lastName}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>
                                                <Badge variant={getRole(user) === 'Admin' ? 'default' : 'secondary'}>{getRole(user)}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant={user.disabled ? "destructive" : "outline"} className="border-transparent">
                                                    {user.disabled ? <UserX className="mr-1 h-3.5 w-3.5"/> : <UserCheck className="mr-1 h-3.5 w-3.5" />}
                                                    {user.disabled ? "Disabled" : "Enabled"}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{formatDate(user.signUpDate)}</TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button aria-haspopup="true" size="icon" variant="ghost">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                            <span className="sr-only">Toggle menu</span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuItem onClick={() => handleOpenEdit(user as UserData)}>
                                                            <Edit className="mr-2 h-4 w-4" /> Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-destructive" onClick={() => handleOpenDelete(user as UserData)}>
                                                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center">No users found.</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
            <UserEditDialog
                isOpen={dialogState.isEditOpen}
                onClose={handleCloseDialog}
                user={dialogState.currentUser}
            />
            <UserDeleteDialog
                isOpen={dialogState.isDeleteOpen}
                onClose={handleCloseDialog}
                user={dialogState.currentUser}
            />
        </>
    )
}
