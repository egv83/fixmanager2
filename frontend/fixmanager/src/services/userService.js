import apiConfig from "./apiConfig.js";
import CONSTANT from "../config/constants.js"

const userService = {
    /**
     * @param {CreateUserRequest} userData
     * @returns {Promise<{success: boolean, user?: User, error?: string}>}
     */

    async createUser(userData){
        try {
            const response = await apiConfig.post(CONSTANT.USER_PATH, userData)
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

    }

}

export default userService;