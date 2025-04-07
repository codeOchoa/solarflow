import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export default async function Layout({ children }) {
    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }

    let email = session?.user?.email;

    const res = await fetch(`http://localhost:3001/api/users/email/${email}`);
    const data = await res.json();

    // Redirecting user to the home page if not admin
    if (data.role === "user") {
        redirect("/");
    }

    return <>{children}</>;
}