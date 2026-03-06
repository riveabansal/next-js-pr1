import LeftSidebar from "@/components/navigation/LeftSidebar";
import Navbar from "@/components/navigation/navbar";
import RightSidebar from "@/components/navigation/RightSidebar";
import { ReactNode, Suspense } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <Suspense fallback={<div />}>
        <Navbar />
      </Suspense>

      <div className="flex">
        <Suspense fallback={<div className="w-66.5" />}>
          <LeftSidebar />
        </Suspense>

        <section className="flex-min-h-screen flex-1 flex-col px-6 pt-36 pb-6 max-md:pb-14 sm:px-14">
          <div className="max-auto w-full max-w-5xl">{children}</div>
        </section>

        <Suspense fallback={<div className="w-87.5" />}>
          <RightSidebar />
        </Suspense>
      </div>
    </main>
  );
}
