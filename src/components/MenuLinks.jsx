import { Link } from "react-router-dom";

const links = [
  {
    id: "1",
    text: "About",
    path: "/about",
  },
  {
    id: "2",
    text: "Contact",
    path: "/contact",
  },
  {
    id: "3",
    text: "Team",
    path: "/team",
  },
];

function MenuLinks() {
  return links.map((link) => {
    return (
      <li key={link.id}>
        <Link to={link.path}>{link.text}</Link>
      </li>
    );
  });
}

export default MenuLinks;
