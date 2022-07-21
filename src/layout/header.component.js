import React from "react";

const Header = () => {
  const navLinkUrlMap = [{ title: "Task Generator", url: "/" }];
  return (
    <header className="bg-teal-200 hover:bg-teal-400">
      <nav className="flex py-4 w-5/6 mx-auto">
        {navLinkUrlMap.map(({ title, url }) => (
          <a
            key={title}
            href={url}
            className=" text-slate-700 font-medium hover:text-yellow-900"
          >
            {title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
