import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { X, AlignRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        className="fixed top-0 right-0 p-4 cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={32} /> : <AlignRight size={32} />}
      </div>
      <Menu
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        styles={{
          bmBurgerBar: { display: "block" },
          bmCrossButton: {
            display: "block",
          },
          bmMenuWrap: {
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: isOpen ? 0 : "-100%",
            transition: "left 0.3s ease",
            zIndex: 1000,
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
            marginBottom: "2rem",
          },
          bmOverlay: {
            background: "rgba(0, 0, 0, 0.3)",
            zIndex: 100,
          },
        }}
      >
        <Link to="/home" onClick={closeMenu} className="block py-2 text-black">
          Home
        </Link>
        <Link
          to="/search"
          onClick={closeMenu}
          className="block py-2 text-black"
        >
          Search
        </Link>
        <Link
          to="/schedule"
          onClick={closeMenu}
          className="block py-2 text-black"
        >
          My Schedule
        </Link>
        <Link to="/login" onClick={closeMenu} className="block py-2 text-black">
          Log in
        </Link>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
