import Link from "next/link"
import { Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/elainechen-waterloo/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:elainechen1002edu@gmail.com",
    icon: Mail,
    label: "Email",
  },
]

type FooterProps = {
  background?: string
  border?: string
  text?: string
  hover?: string
}

export function Footer({
  background = "bg-background",
  border = "border-border",
  text = "text-muted-foreground",
  hover = "hover:text-primary",
}: FooterProps) {
  return (
    <footer className={`border-t ${border} ${background} py-12`}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className={`text-sm ${text}`}>
            {new Date().getFullYear()} Elaine Chen. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${text} transition-colors ${hover}`}
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}