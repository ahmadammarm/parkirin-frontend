import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useContext } from "react";
import Cookies from "js-cookie";

export const useSignoutJukir = (): (() => void) => {
    const authContext = useContext(AuthContext)

    const { setIsAuthenticated } = authContext!

    const router = useRouter();

    const signOutJukir = (): void => {
        Cookies.remove("token")
        Cookies.remove("user")
        setIsAuthenticated(false)
        router.push("/login")
    }

    return signOutJukir
}