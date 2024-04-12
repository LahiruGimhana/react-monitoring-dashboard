import React from "react";
import { Link } from "react-router-dom";
import {
  AiAppstoreOutlined,
  AiUserOutlined,
  AiCompanyOutlined,
} from "react-icons/ai"; // Example using react-icons

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/applications">
            <AiAppstoreOutlined /> Applications
          </Link>
        </li>
        <li>
          <Link to="/users">
            <AiUserOutlined /> Users
          </Link>
        </li>
        <li>
          <Link to="/companies">
            <AiCompanyOutlined /> Companies
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
