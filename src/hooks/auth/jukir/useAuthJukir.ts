import Cookies from "js-cookie"

interface Jukir {
    id: number;
    phone_number: string;
    name: string;
}

export const useAuthJukir = (): Jukir | null => {
    const jukir = Cookies.get("user")

    return jukir ? JSON.parse(jukir) as Jukir : null
}