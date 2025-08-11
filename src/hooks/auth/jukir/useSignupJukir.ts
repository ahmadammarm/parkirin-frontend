import { API } from "@/service/api";
import { useMutation } from "@tanstack/react-query";

interface SignupRequestType {
    name: string;
    phone_number: string;
    password: string;
    store_name: string;
    address: string;
    role: string;
    longitude: number;
    latitude: number;
    working_hours: string;
}

export const useSignupJukir = () => {
    const signupFn = async (data: SignupRequestType) => {
        const response = await API.post("api/user/register", data)
        return response.data
    }

    const mutation = useMutation({
        mutationFn: signupFn
    })

    return mutation
}