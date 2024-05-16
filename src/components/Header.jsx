import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="px-2 py-4 flex justify-center gap-10 ">
      <Link
        className={`link-style ${location.pathname === "/" && "text-gray-900"}
        bg-blue-200  px-4 py-[10px] rounded-lg shadow-md shadow-gray-200 hover:bg-blue-300`}
        to="/"
      >
        질문하기
      </Link>
      <Link
        className={`link-style ${
          location.pathname === "/chat-list" && "text-gray-900"
        }   bg-blue-200  px-4 py-[10px] rounded-lg shadow-md shadow-gray-200 hover:bg-blue-300 `}
        to="/chat-list"
      >
        내 질문리스트
      </Link>
    </header>
  );
};

export default Header;