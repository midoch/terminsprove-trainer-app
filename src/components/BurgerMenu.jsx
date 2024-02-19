import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { X, AlignRight } from "lucide-react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="absolute top-0 right-0 p-4 cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={32} /> : <AlignRight size={32} />}
      </div>
      <Menu
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        styles={{
          bmCrossButton: {
            display: "block",
            color: "black",
            height: "32px",
            width: "32px",
          },
          bmMenuWrap: {
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
          },
          bmMenu: {
            background: "white",
            padding: "2rem",
            fontSize: "1.5rem",
          },
          bmItemList: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          bmItem: {
            marginBottom: "1rem",
            marginTop: "2rem",
          },
          bmOverlay: {
            background: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        {menuLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className="block py-2 text-black"
          >
            {link.label}
          </Link>
        ))}
      </Menu>
    </div>
  );
};

const menuLinks = [
  { to: "/home", label: "Home" },
  { to: "/search", label: "Search" },
  { to: "/schedule", label: "My Schedule" },
  { to: "/login", label: "Log in" },
];

export default BurgerMenu;
