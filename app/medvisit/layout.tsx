"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
    }
  }, [router, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (!session) {
    return null;
  }

  return (
    <div>
      <div>Working</div>
      {children}
    </div>
  );
}
