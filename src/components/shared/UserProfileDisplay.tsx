import type { UserProfile, BadgeInfo } from '@/lib/types';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award, BarChartBig, CheckCircle, Star, TrendingUp, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface UserProfileDisplayProps {
  profile: UserProfile;
}

export function UserProfileDisplay({ profile }: UserProfileDisplayProps) {
  const xpToNextLevel = (profile.level + 1) * 100; 
  const levelProgress = Math.min((profile.xp % xpToNextLevel) / xpToNextLevel * 100, 100);


  return (
    <Card className="w-full max-w-3xl mx-auto shadow-xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary to-secondary p-8 text-primary-foreground">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Image
            src={profile.avatarUrl}
            alt={`${profile.name}'s avatar`}
            width={120}
            height={120}
            className="rounded-full border-4 border-primary-foreground object-cover shadow-lg"
            data-ai-hint="profile avatar"
          />
          <div>
            <CardTitle className="text-4xl font-bold">{profile.name}</CardTitle>
            <CardDescription className="text-primary-foreground/80 text-lg mt-1">Level {profile.level} Learner</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-8">
        {/* XP and Level Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
            <span>Experience Points (XP)</span>
            <span>{profile.xp} / {xpToNextLevel} XP to Level {profile.level + 1}</span>
          </div>
          <Progress value={levelProgress} aria-label={`Level ${profile.level} progress`} className="h-3" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <StatCard icon={TrendingUp} label="Streak" value={`${profile.streaks} Days`} color="text-yellow-500" />
          <StatCard icon={BarChartBig} label="Courses Completed" value={profile.coursesCompleted} color="text-green-500" />
          <StatCard icon={CheckCircle} label="Lessons Completed" value={profile.lessonsCompleted} color="text-blue-500" />
        </div>
        
        {/* Badges Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
            <Award className="mr-2 h-6 w-6 text-primary" />
            Your Badges
          </h3>
          {profile.badges.length > 0 ? (
            <TooltipProvider>
              <div className="flex flex-wrap gap-3">
                {profile.badges.map((badge) => (
                  <Tooltip key={badge.id}>
                    <TooltipTrigger asChild>
                      <Badge variant="outline" className={cn("py-2 px-4 text-sm border-2 shadow-sm cursor-default", badge.color.replace('text-', 'border-'))}>
                        <badge.icon className={cn("h-4 w-4 mr-2", badge.color)} />
                        {badge.name}
                        {badge.description && <Info className="ml-1.5 h-3 w-3 text-muted-foreground/70"/>}
                      </Badge>
                    </TooltipTrigger>
                    {badge.description && (
                      <TooltipContent>
                        <p className="font-semibold">{badge.name}</p>
                        <p className="text-xs text-muted-foreground">{badge.description}</p>
                        {badge.earnedDate && <p className="text-xs text-muted-foreground mt-1">Earned: {new Date(badge.earnedDate).toLocaleDateString()}</p>}
                      </TooltipContent>
                    )}
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
          ) : (
            <p className="text-muted-foreground">No badges earned yet. Keep learning!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color?: string;
}

function StatCard({ icon: Icon, label, value, color }: StatCardProps) {
  return (
    <Card className="p-4 shadow-sm hover:shadow-md transition-shadow">
      <Icon className={cn("h-8 w-8 mb-2 mx-auto", color || 'text-primary')} />
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
    </Card>
  );
}
