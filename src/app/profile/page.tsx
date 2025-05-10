import { UserProfileDisplay } from '@/components/shared/UserProfileDisplay';
import { MOCK_USER_PROFILE } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Edit3 } from 'lucide-react';

export const metadata = {
  title: 'My Profile | Rural Scholar',
  description: 'View your learning progress, badges, and achievements.',
};

export default function ProfilePage() {
  // In a real app, you would fetch user data based on authentication
  const userProfile = MOCK_USER_PROFILE;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">
          My Learning Dashboard
        </h1>
        <Button variant="outline">
          <Edit3 className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>
      <UserProfileDisplay profile={userProfile} />
    </div>
  );
}
