// app/central-organizing-committee/page.tsx
"use client"

import CommitteeSection from "../../components/CommiteeSection"

export default function CentralOrganizingCommitteePage() {
  return (
    <div className="relative min-h-screen">
      
      <section className="relative py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* <CommitteeSection 
            title="Central Organizing Committee"
            category="Central Organizing Committee"
            description="Meet the dedicated professionals guiding our central organizing efforts"
          /> */}
         <CommitteeSection
            title="Central Organizing Committee"
            category="Central Organizing Committee"
            description="Meet the dedicated professionals guiding our central organizing efforts"
          />
        </div>
      </section>
    </div>
  )
}