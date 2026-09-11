import { Metadata } from "next";
import OtherBackground from "../../components/OtherBackground";
import Accommodation from "../../components/Accommodation";

export const metadata: Metadata = {
  title: "Accommodation | CMDAYS-2026 | NIT Rourkela",
  description:
    "Hotel accommodation details, room tariffs, and booking information for CMDAYS-2026 conference participants at NIT Rourkela.",
};

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <OtherBackground />
      </div>
      <div className="relative z-10 pt-16 sm:pt-20">
        <Accommodation />
      </div>
    </div>
  );
}
