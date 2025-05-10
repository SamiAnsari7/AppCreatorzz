'use client';

import { useState, useEffect } from 'react';
import { UserProfileDisplay } from '@/components/shared/UserProfileDisplay';
import { MOCK_USER_PROFILE } from '@/lib/data';
import type { UserProfile } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Edit3 } from 'lucide-react';
import { UserProfileEditForm } from '@/components/shared/UserProfileEditForm';
import { useToast } from "@/hooks/use-toast";

// Helper function to deep clone the profile while preserving icon functions
const cloneUserProfile = (profile: UserProfile): UserProfile => {
  return {
    ...profile,
    badges: profile.badges.map(badge => ({ ...badge })), // Shallow copy each badge, preserving icon function reference
  };
};

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState<UserProfile>(() => cloneUserProfile(MOCK_USER_PROFILE));
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { toast } = useToast();

  // Set document title on client side
  useEffect(() => {
    document.title = 'My Profile | Rural Scholar';
  }, []);

  // Effect to listen for changes in MOCK_USER_PROFILE (e.g., badges earned, XP updated)
  useEffect(() => {
    setUserProfile(prevProfile => {
      // Create a new badges array with copied badge objects to ensure icons are preserved
      const newBadges = MOCK_USER_PROFILE.badges.map(b => ({ ...b }));
      return {
        ...prevProfile, // Keep existing local data like name, avatar
        // Selectively update fields from MOCK_USER_PROFILE that might have changed due to global actions
        xp: MOCK_USER_PROFILE.xp,
        level: MOCK_USER_PROFILE.level,
        lessonsCompleted: MOCK_USER_PROFILE.lessonsCompleted,
        coursesCompleted: MOCK_USER_PROFILE.coursesCompleted,
        streaks: MOCK_USER_PROFILE.streaks,
        badges: newBadges,
      };
    });
  }, [
    MOCK_USER_PROFILE.badges.length, 
    MOCK_USER_PROFILE.xp, 
    MOCK_USER_PROFILE.level, 
    MOCK_USER_PROFILE.lessonsCompleted,
    MOCK_USER_PROFILE.coursesCompleted,
    MOCK_USER_PROFILE.streaks
  ]);

  const handleSaveProfile = (updatedProfileData: Partial<Pick<UserProfile, 'name' | 'avatarUrl'>>) => {
    const newProfileState = {
      ...userProfile,
      ...updatedProfileData,
    };
    setUserProfile(newProfileState);

    // Update MOCK_USER_PROFILE so changes persist across navigation (for mock purposes)
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
        profile={userProfile} 
        onSave={handleSaveProfile}
      />
    </div>
  );
}
