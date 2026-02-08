import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./Navigation";

export default function Layout() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // state에 scrollTo가 있으면 About 페이지에서 처리하므로 스킵
    if (!(state as { scrollTo?: string } | null)?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [pathname, state]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
    </div>
  );
}
