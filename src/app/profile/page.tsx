'use client';

import { useState, useEffect } from 'react';
import { UserProfileDisplay } from '@/components/shared/UserProfileDisplay';
import { MOCK_USER_PROFILE } from '@/lib/data';
import type { UserProfile } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Edit3 } from 'lucide-react';
import { UserProfileEditForm } from '@/components/shared/UserProfileEditForm';
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  // Initialize state with a deep copy to avoid direct mutation issues if MOCK_USER_PROFILE is modified elsewhere
  // and to ensure reactivity when the local state is updated.
  const [userProfile, setUserProfile] = useState<UserProfile>(() => JSON.parse(JSON.stringify(MOCK_USER_PROFILE)));
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { toast } = useToast();

  // Set document title on client side
  useEffect(() => {
    document.title = 'My Profile | Rural Scholar';
  }, []);

  // Effect to listen for changes in the global MOCK_USER_PROFILE.badges array length
  // This simulates fetching updated profile data in a real app when badges are earned.
  useEffect(() => {
    // Update the local userProfile state to reflect changes in MOCK_USER_PROFILE
    // Creating new objects/arrays ensures React detects the change and re-renders.
    setUserProfile(prevProfile => ({
      ...prevProfile, // keep existing fields like name, avatar if they were edited locally
      ...MOCK_USER_PROFILE, // then overlay with potentially updated global mock data
      badges: [...MOCK_USER_PROFILE.badges], // specifically ensure badges array is a new reference
    }));
  }, [MOCK_USER_PROFILE.badges.length]); // Dependency: re-run when number of badges in global mock changes

  const handleSaveProfile = (updatedProfileData: Partial<Pick<UserProfile, 'name' | 'avatarUrl'>>) => {
    // Update the local state for immediate UI feedback
    const newProfileState = {
      ...userProfile,
      ...updatedProfileData,
    };
    setUserProfile(newProfileState);

    // Also update the MOCK_USER_PROFILE so changes persist across navigation (for mock purposes)
    MOCK_USER_PROFILE.name = newProfileState.name;
    MOCK_USER_PROFILE.avatarUrl = newProfileState.avatarUrl;
    
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
        // Pass the current local state of profile to the edit form
        profile={userProfile} 
        onSave={handleSaveProfile}
      />
    </div>
  );
}
