import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { getAllUsers } from "@/utils/firebaseService";
import toast from "react-hot-toast";

export default async function Layout({ children }) {
    const session = await getServerSession();

    if (!session) {
        redirect("/");
    }

    let email = session?.user?.email;

    const users = await getAllUsers();
    const user = users.find((u) => u.email === email);

    // Redirecting user to the home page if not admin
    if (data.role === "user") {
        redirect("/");
    }

    return <>{children}</>;
}