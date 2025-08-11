import { API } from "@/service/api";
import { useMutation } from "@tanstack/react-query"

interface SigninRequestType {
    phone_number: string;
    password: string;
}

export const useSignin = () => {

    const signInFn = async (data: SigninRequestType) => {
        const response = await API.post("api/user/login", data)
        return response.data
    }

    const mutation = useMutation({
        mutationFn: signInFn
    })

    return mutation
}