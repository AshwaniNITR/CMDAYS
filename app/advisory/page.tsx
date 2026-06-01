// app/central-advisory-committee/page.tsx
"use client"

//import CombinedBackground from "../../components/CombinedBackground"
//import CommitteeSection from "../../components/CommiteeSection"
import OtherBackground from "../../components/OtherBackground"
import CommitteeSection from "../../components/CommiteeSection"


export default function CentralAdvisoryCommitteePage() {
  return (
    <div className="relative min-h-screen">
      <OtherBackground/>
      <section className="relative py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* <CommitteeSection 
            title="Central Advisory Committee"
            category="Central Advisory Committee"
            description="Meet the dedicated professionals guiding our central advisory efforts"
          /> */}
         <CommitteeSection
            title="Central Advisory Committee"
            category="Central Advisory Committee"
            description="Meet the dedicated professionals guiding our central advisory efforts"
          />
        </div>
      </section>
    </div>
  )
}