import { useState } from 'react';

// Update NAV_LINKS to remove the `id` field and use the first entry in `ids` for scrolling
const NAV_LINKS = [
  { label: 'About', ids: ['avatar-card', 'details-card'] },
  { label: 'Experience', ids: ['experience-card'] },
  { label: 'Education', ids: ['education-card'] },
  { label: 'Skills', ids: ['skill-card'] },
  { label: 'Projects', ids: ['github-project-card'] },
  { label: 'Articles', ids: ['blog-card'] },
];

// window.addEventListener('scroll', () => {
//   if (!isScrollingManually) return;

//   NAV_LINKS.forEach((link) => {
//     link.ids.forEach((highlightId) => {
//       document
//         .getElementById(highlightId)
//         ?.classList.remove('border-glow', 'blur-section', 'unblur-section');
//     });
//   });
// });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Update the `handleNavClick` function to first blur unselected sections and then gradually unblur them
  const handleNavClick = (label: string) => {
    setMenuOpen(false);
    const selectedLink = NAV_LINKS.find((link) => link.label === label);
    if (selectedLink) {
      const firstHighlightId = selectedLink.ids[0];
      const section = document.getElementById(firstHighlightId);
      if (section) {
        const offset = 80; // Adjust this value to match your navbar height
        const sectionPosition =
          section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: sectionPosition - offset,
          behavior: 'smooth',
        });
      }

      // Remove blur and unblur classes from all sections
      NAV_LINKS.forEach((link) => {
        link.ids.forEach((highlightId) => {
          const element = document.getElementById(highlightId);
          element?.classList.remove(
            'blur-section',
            'unblur-section',
            'border-glow',
          );
        });
      });

      // Add blur to non-selected sections
      NAV_LINKS.forEach((link) => {
        if (link.label !== label) {
          link.ids.forEach((highlightId) => {
            document.getElementById(highlightId)?.classList.add('blur-section');
          });
        }
      });

      // Gradually unblur non-selected sections after a delay
      setTimeout(() => {
        NAV_LINKS.forEach((link) => {
          if (link.label !== label) {
            link.ids.forEach((highlightId) => {
              const element = document.getElementById(highlightId);
              element?.classList.remove('blur-section');
              element?.classList.add('unblur-section');
            });
          }
        });
      }, 500); // Adjust delay as needed

      // Add highlight to the selected section's associated IDs
      selectedLink.ids.forEach((highlightId) => {
        document.getElementById(highlightId)?.classList.add('border-glow');
      });
    }
  };

  return (
    <nav className="backdrop-blur-md bg-base-100 bg-opacity-30 shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-bold text-3xl">
          <span className="text-base-content">Portfo</span>
          <span className="text-primary">lio.</span>
        </div>
        <div className="lg:hidden">
          <button
            className="text-base-content focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                className={`py-2 px-3 rounded-none border-b-2 transition-colors duration-200 focus:outline-none bg-transparent shadow-none text-base-content ${'border-transparent hover:border-base-300'}`}
                onClick={() => handleNavClick(link.label)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="lg:hidden bg-base-100 bg-opacity-80 shadow px-4 pb-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <button
                className={`w-full text-left py-2 px-3 rounded-none border-b-2 transition-colors duration-200 focus:outline-none bg-transparent shadow-none text-base-content ${'border-transparent hover:border-base-300'}`}
                onClick={() => handleNavClick(link.label)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
