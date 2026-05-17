const projects = [
  {
    date: "2025 — 2026",
    title: "ADE Initiative",
    role: "Co-Founder",
    image: "https://i.postimg.cc/xjMG7NsQ/IMG-2455.jpg",
    link: "https://www.instagram.com/adeinitiative?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    description:
      "A youth-led marine conservation project creating simple rescue kits to help local fishermen reduce animal entanglement.",
  },
  {
    date: "2024",
    title: "UofT CREATE Engineering Program",
    role: "AI + Engineering",
    image:
      "https://www.caiac.ca/sites/default/files/imce/common/logos/utoronto-engineering.png",
    link: "https://outreach.engineering.utoronto.ca/pre-university-programs/high-school-program/create/",
    description:
      "Built a camera-based AI sorting prototype while exploring how structure, motion, and reliability shape mechanical design.",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-[#f6ebe7] px-6 py-28 text-[#241818]"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px w-10 bg-[#8b6f68]" />

          <p className="text-xs uppercase tracking-[0.35em] text-[#8b6f68]">
            projects/experience
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-14">
          {projects.map((project, index) => (
            <article key={index} className="group w-[260px]">
              <div className="overflow-hidden rounded-md">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="aspect-video w-[260px] object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-[260px] object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                )}
              </div>

              <div className="mt-4">
                <h3 className="text-[18px] font-light tracking-[-0.03em]">
                  {project.title}
                </h3>

                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#8b6f68]">
                  {project.role}
                </p>

                <p className="mt-3 text-[12px] leading-6 text-[#5f4b47]">
                  {project.description}
                </p>

                <p className="mt-3 text-[11px] text-[#8b6f68]">
                  {project.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}