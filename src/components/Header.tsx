import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = [
        "home",
        "services",
        "about",
        "testimonials",
        "booking",
        "contact",
      ];
      const curPos = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const bottom = top + element.offsetHeight;

          if (curPos >= top && curPos < bottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavItemClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center scroll-smooth">
        <a href="#" className="flex items-center">
          <span
            className={cn(
              "text-2xl font-poppins font-bold transition-colors duration-300",
              isScrolled ? "text-dental-primary" : "text-white"
            )}
          >
            Dental<span className="text-dental-secondary">Care</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 scroll-smooth">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "font-medium relative py-2 transition-colors duration-300 hover:text-dental-primary",
                isScrolled
                  ? activeSection === item.href.substring(1)
                    ? "text-dental-primary"
                    : "text-dental-dark"
                  : activeSection === item.href.substring(1)
                  ? "text-dental-secondary"
                  : "text-white",
                "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-dental-primary after:transition-transform after:duration-300",
                activeSection === item.href.substring(1)
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              )}
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            className={cn(
              "px-6 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1",
              isScrolled
                ? "bg-dental-primary text-white hover:shadow-lg hover:shadow-dental-primary/20"
                : "bg-white/20 text-white backdrop-blur-sm border border-white/30 hover:bg-white/30"
            )}
            onClick={(e) => {
              e.preventDefault();
              handleNavItemClick("#booking");
            }}
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-full",
            isScrolled
              ? "text-dental-primary bg-gray-100"
              : "text-white bg-white/10"
          )}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md px-4 py-5 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "font-medium py-2 px-3 rounded",
                  activeSection === item.href.substring(1)
                    ? "bg-dental-primary/10 text-dental-primary"
                    : "text-dental-dark hover:bg-gray-100"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavItemClick(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="bg-dental-primary text-white px-4 py-3 rounded-lg hover:bg-opacity-90 transition-colors text-center"
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClick("#booking");
              }}
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
