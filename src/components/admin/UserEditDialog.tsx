
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { upsertUser } from "@/app/admin/(dashboard)/users/actions";
import type { UserData } from "@/app/admin/(dashboard)/users/page";
import { useUser } from "@/firebase";
import { Switch } from "../ui/switch";

interface UserEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserData | null;
}

export function UserEditDialog({ isOpen, onClose, user }: UserEditDialogProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: 'user' as 'user' | 'admin',
    disabled: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user: adminUser } = useUser();

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        password: '',
        role: user.roles?.includes('admin') ? 'admin' : 'user',
        disabled: user.disabled || false,
      });
    } else {
      // Reset for new user
      setFormData({ firstName: '', lastName: '', email: '', password: '', role: 'user', disabled: false });
    }
  }, [user, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const idToken = await adminUser?.getIdToken();
      const result = await upsertUser({ id: user?.id, ...formData }, idToken);
      if (result.success) {
        toast({ title: "Success", description: result.message });
        onClose();
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || `Failed to ${user ? 'update' : 'create'} user.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const dialogTitle = user ? "Edit User" : "Create New User";
  const dialogDescription = user ? `Update the details for ${user.email}.` : "Enter the details for the new user account.";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">First Name</Label>
            <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">Last Name</Label>
            <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              {user ? 'New Password' : 'Password'}
            </Label>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              value={formData.password} 
              onChange={handleInputChange} 
              className="col-span-3"
              placeholder={user ? "Optional: Set new password" : "Required for new user"}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Role</Label>
            <RadioGroup
              value={formData.role}
              onValueChange={(value: 'user' | 'admin') => setFormData(p => ({ ...p, role: value }))}
              className="col-span-3 flex items-center gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="user" id="role-user" />
                <Label htmlFor="role-user">User</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="admin" id="role-admin" />
                <Label htmlFor="role-admin">Admin</Label>
              </div>
            </RadioGroup>
          </div>
           <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="account-status" className="text-right">
                Account Status
            </Label>
            <div className="col-span-3 flex items-center space-x-2">
                <Switch
                    id="account-status"
                    checked={!formData.disabled}
                    onCheckedChange={(checked) => setFormData(p => ({ ...p, disabled: !checked }))}
                />
                <Label htmlFor="account-status" className={formData.disabled ? "text-destructive" : "text-green-600"}>
                    {formData.disabled ? "Disabled" : "Enabled"}
                </Label>
            </div>
           </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isSubmitting}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
