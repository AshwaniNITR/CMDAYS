// app/central-organizing-committee/page.tsx
"use client"

import CommitteeSection from "../../components/CommiteeSection"
import CombinedBackground from "../../components/CombinedBackground"
import OtherBackground from "../../components/OtherBackground"
export default function CentralOrganizingCommitteePage() {
  return (
    <div className="relative min-h-screen">
      <OtherBackground/>
      <section className="relative py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* <CommitteeSection 
            title="Central Organizing Committee"
            category="Central Organizing Committee"
            description="Meet the dedicated professionals guiding our central organizing efforts"
          /> */}
         <CommitteeSection
            title="Local Organizing Committee"
            category="Local Organizing Committee"
            description="Meet the dedicated professionals guiding our local organizing efforts"
          />
        </div>
      </section>
    </div>
  )
}