"use client";

import { usePathname, useRouter } from "next/navigation";
import NavLink from "@/components/shares/NavLink";

const PublicHeader = () => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(router);
  console.log(pathName);

  return (
    <header
      className="flex justify-between"
      style={{
        border: "1px solid black",
        // backgroundColor: "lightblue",
        // position: "fixed",
        // width: "100%",
        padding: "16px 32px",
        alignItems: "center",
      }}
    >
      <div className="logo">
        <li>
          <h1
            style={{
              color: "blue",
              fontSize: "30px",
              lineHeight: "40px",
              fontWeight: "700",
            }}
          >
            <span
              style={{
                color: "red",
              }}
            >
              E
            </span>
            -commerce
          </h1>
        </li>
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <li style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "600" }}>
          <NavLink href="/">Home</NavLink>
        </li>
        <li style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "600" }}>
          <NavLink href="/about">About</NavLink>
        </li>
        <li style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "600" }}>
          <NavLink href="/contact">Contact</NavLink>
        </li>
        <li style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "600" }}>
          <NavLink href="/products">Products</NavLink>
        </li>
        <li style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "600" }}>
          <NavLink href="/login">Login</NavLink>
        </li>
        <li style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "600" }}>
          <NavLink href="/register">Register</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default PublicHeader;
