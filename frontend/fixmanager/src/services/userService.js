import apiConfig from "./apiConfig.js";
import * as CONSTANT from "../config/constants.js"

export const userService = {
    /**
     * @param {CreateUserRequest} userData
     * @returns {Promise<{success: boolean, user?: User, error?: string}>}
     */

    async createUser(userData){
        try {
            // console.log("ENDPONITS USER PATH: "+CONSTANT.ENDPOINTS.USER_PATH)
            const response = await apiConfig.post(CONSTANT.ENDPOINTS.USER_PATH, userData)
            const data = response.data

            return {
                success:true,
                user:response.data.user || response.data
            }

        }catch (error){
            return {
                success:false,
                error:error.response?.data?.message || 'Error al obtener usuarios'
            }
        }

    },
    //
    // async getUsers(){
    //     try {
    //         const response = await apiConfig.get(CONSTANT.USER_PATH)
    //         return{
    //             success:true,
    //             users:response.data.users || response.data
    //         }
    //     }catch (error){
    //         return {
    //             success:false,
    //             error:error.response?.data?.message || 'Error al obtener usuarios'
    //         }
    //     }
    // }

}