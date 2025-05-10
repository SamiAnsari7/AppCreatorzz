'use client';

import { useState, useEffect } from 'react';
import { UserProfileDisplay } from '@/components/shared/UserProfileDisplay';
import { MOCK_USER_PROFILE } from '@/lib/data';
import type { UserProfile } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Edit3 } from 'lucide-react';
import { UserProfileEditForm } from '@/components/shared/UserProfileEditForm';
import { useToast } from "@/hooks/use-toast";

// Metadata cannot be dynamically set in client components directly
// export const metadata = {
// title: 'My Profile | Rural Scholar',
// description: 'View your learning progress, badges, and achievements.',
// };

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState<UserProfile>(MOCK_USER_PROFILE);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { toast } = useToast();

  // Set document title on client side
  useEffect(() => {
    document.title = 'My Profile | Rural Scholar';
  }, []);

  const handleSaveProfile = (updatedProfileData: Partial<Pick<UserProfile, 'name' | 'avatarUrl'>>) => {
    setUserProfile(prevProfile => ({
      ...prevProfile,
      ...updatedProfileData,
    }));
    setIsEditModalOpen(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
          My Learning Dashboard
        </h1>
        <Button variant="outline" onClick={() => setIsEditModalOpen(true)}>
          <Edit3 className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>
      <UserProfileDisplay profile={userProfile} />
      <UserProfileEditForm
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        profile={userProfile}
        onSave={handleSaveProfile}
      />
    </div>
  );
}
