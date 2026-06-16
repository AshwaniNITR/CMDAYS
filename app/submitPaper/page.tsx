"use client";
import OtherBackground from "../../components/OtherBackground";

const Page = () => {
  const handleDownloadTemplate = () => {
    const link = document.createElement("a");
    link.href = "/files/CMDAYS2026_Abstract_Template.docx";
    link.download = "CMDAYS2026_Abstract_Template.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="relative min-h-screen">
      <OtherBackground />

      <section className="relative py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="mb-10 text-center animate-fadeIn">
            <h2 className="w-fit mx-auto px-6 py-3 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-lg text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 bg-clip-text text-transparent">
              Abstract Submission
            </h2>

            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-900 to-purple-900 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-5">
            {/* Call for Abstracts */}
            <div className="bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-8 mb-6">
              <p className="text-slate-900 font-semibold leading-relaxed text-justify">
                Prospective authors are invited to present their latest results
                in the area of{" "}
                <span className="font-bold">Condensed Matter Physics</span>. We
                invite authors to submit research work for oral or poster
                presentation at <span className="font-bold">CMDAYS 2026</span>.
              </p>

              <p className="text-slate-900 font-semibold leading-relaxed text-justify mt-4">
                Authors are encouraged to submit their abstracts online in the
                specified format to{" "}
                <a
                  href="mailto:cmdays2026@nitrkl.ac.in"
                  className="text-purple-700 font-bold underline"
                >
                  cmdays2026@nitrkl.ac.in
                </a>{" "}
                by <span className="font-bold">31.08.2026</span>.
              </p>

              <p className="text-slate-900 font-semibold leading-relaxed text-justify mt-4">
                All submitted abstracts will undergo review by the Technical
                Program Committee. Acceptance of abstracts for oral or poster
                presentation will be communicated to the corresponding authors
                via email.
              </p>
            </div>
            <div className="w-full flex justify-center mb-6">
              <h3 className="text-slate-900 font-extrabold text-lg text-center max-w-3xl">
                Important guidelines and policies for abstract submission and
                publication
              </h3>
            </div>

            <div className="bg-white/[0.08] backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-8">
              <p className="text-slate-900 font-semibold leading-relaxed text-center mb-6">
                Participants are encouraged to submit their abstracts online to{" "}
                <a
                  href="mailto:cmdays2026@nitrkl.ac.in"
                  className="text-purple-700 font-bold underline"
                >
                  cmdays2026@nitrkl.ac.in
                </a>{" "}
                on or before <span className="font-bold">20.09.2026</span>.
              </p>

              {/* Side-by-side cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Abstract Format
                  </h4>

                  <ul className="space-y-3">
                    {[
                      "A4 size page",
                      "MS Word or PDF format",
                      "Font: Times New Roman",
                      "Title: 16 pt",
                      "Body Text: 11 pt with single spacing",
                      "Mention affiliation and email address of the corresponding author",
                      "Refer to the conference website for additional details",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-700 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-900 font-semibold">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/[0.08] backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Publication Information
                  </h4>

                  <p className="text-slate-900 font-semibold leading-relaxed text-justify">
                    The publication of peer-reviewed full-length articles will
                    depend on the availability of funds from the organizers.
                    Participants opting for peer-reviewed publication may be
                    required to contribute a partial publication charge. Further
                    details will be communicated in due course.
                  </p>
                </div>
              </div>
            </div>
            {/* Important Dates */}
            <div className="bg-white/[0.08] backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-8">
              <h3 className="mx-auto w-fit px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-2xl font-bold text-gray-900 mb-6 shadow-md">
                Important Dates
              </h3>

              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-xl bg-white/[0.08] border border-white/20">
                  <span className="font-bold text-slate-900 text-center md:text-left">
                    Email ID for Abstract Submission
                  </span>
                  <span className="font-bold text-purple-700 text-center md:text-right break-all">
                    cmdays2026@nitrkl.ac.in
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-xl bg-white/[0.08] border border-white/20">
                  <span className="font-bold text-slate-900 text-center md:text-left">
                    Template
                  </span>

                  <a
                    href="/Abstract_template.docx"
                    download
                    className="group inline-flex items-center justify-center gap-3 px-6 py-3 rounded-xl
                   bg-gradient-to-r from-purple-700 to-purple-900
                   text-white font-bold shadow-lg
                   hover:shadow-purple-500/30
                   hover:scale-105
                   transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14"
                      />
                    </svg>

                    <span>Download Template</span>
                  </a>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-xl bg-white/[0.08] border border-white/20">
                  <span className="font-bold text-slate-900 text-center md:text-left">
                    Abstract Submission Ends
                  </span>
                  <span className="font-bold text-red-600 text-center md:text-right">
                    Aug 31, 2026
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-xl bg-white/[0.08] border border-white/20">
                  <span className="font-bold text-slate-900 text-center md:text-left">
                    Confirmation of Acceptance
                  </span>
                  <span className="font-bold text-red-600 text-center md:text-right">
                    Sep 10, 2026
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-xl bg-white/[0.08] border border-white/20">
                  <span className="font-bold text-slate-900 text-center md:text-left">
                    Registration Begins
                  </span>
                  <span className="font-bold text-red-600 text-center md:text-right">
                    Sep 10, 2026
                  </span>
                </div>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-4 rounded-xl bg-white/[0.08] border border-white/20">
                  <span className="font-bold text-slate-900 text-center md:text-left">
                    Registration Deadline
                  </span>
                  <span className="font-bold text-red-600 text-center md:text-right">
                    Sep 20, 2026
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20" />
        </div>
      </section>
    </div>
  );
};

export default Page;
