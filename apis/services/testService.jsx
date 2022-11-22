import apiConfig from "../apiConfig"

const testService = {
  testGetUsers: function () {
    try {
      return apiConfig.getBaseURL("/users", {},process.env.NEXT_PUBLIC_PORT_TARGET)
    } catch (error) {
      throw error
    }
  },
}

export default testService
