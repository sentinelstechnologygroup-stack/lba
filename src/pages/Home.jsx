import HeroSection from '@/components/home/HeroSection';
import WhatIsLBA from '@/components/home/WhatIsLBA';
import WhyMembersJoin from '@/components/home/WhyMembersJoin';
import PillarsSection from '@/components/home/PillarsSection';
import TheLinkDifference from '@/components/home/TheLinkDifference';
import ChaptersSection from '@/components/home/ChaptersSection';
import UpcomingEvents from '@/components/home/UpcomingEvents';
import MembershipPreview from '@/components/home/MembershipPreview';
import StartChapterCTA from '@/components/home/StartChapterCTA';
import ResourcePreview from '@/components/home/ResourcePreview';
import NewOwnerHelp from '@/components/members/NewOwnerHelp';
import MemberTestimonials from '@/components/shared/MemberTestimonials';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatIsLBA />
      <WhyMembersJoin />
      <PillarsSection />
      <TheLinkDifference />
      <NewOwnerHelp />
      <ResourcePreview />
      <ChaptersSection />
      <UpcomingEvents />
      <MemberTestimonials
        limit={3}
        bgColor="#ffffff"
        title="What Members Say About The Link"
        subtext="Membership outcomes depend on participation, market, and business readiness. All content below is sample/demo data."
      />
      <MembershipPreview />
      <StartChapterCTA />
    </div>
  );
}