import {
  Rocket,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-ecell-card/50 border-t border-white/10 text-gray-300"
    >
      {/* Top glowing line */}
      <div className="h-px bg-linear-to-r from-transparent via-ecell-mine to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-ecell-primary/20 border border-ecell-primary/50 flex items-center justify-center">
                {/* <Rocket className="w-5 h-5 text-ecell-primary" /> */}
                <Logo className="w-5 h-5 text-ecell-primary" />
              </div>
              <span className="text-xl font-bold">
                E-Cell <span className="text-ecell-primary">NITRR</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Fostering entrepreneurship and innovation at NIT Raipur. Building
              the next generation of changemakers.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="
                    w-10 h-10 rounded-full bg-white/10 border border-white/10
                    flex items-center justify-center text-gray-300
                    hover:bg-ecell-primary hover:text-white hover:scale-110
                    transition-all duration-300
                  "
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Events", "Team", "Blog", "Gallery"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-ecell-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                "Startup Handbook",
                "Mentorship Program",
                "Funding Guide",
                "FAQs",
                "Careers",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-ecell-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ecell-primary mt-0.5" />
                <span className="text-gray-400 text-sm">
                  NIT Raipur, G.E. Road, Raipur, Chhattisgarh - 492010
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-ecell-primary" />
                <a
                  href="mailto:ecell@nitrr.ac.in"
                  className="text-gray-400 hover:text-ecell-primary transition-colors text-sm"
                >
                  ecell@nitrr.ac.in
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ecell-primary" />
                <a
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-ecell-primary transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} E-Cell NIT Raipur. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-ecell-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ecell-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
