import axios from "axios";
import { UserResponse } from './models/user-response'

export async function getUsers(): Promise<UserResponse> {
    let result = await axios.get<UserResponse>("https://randomuser.me/api/");

    if (result.status === 200) {
        return result.data;
    } else {
        console.log("Error access random user API");
        return new UserResponse();
    }
}