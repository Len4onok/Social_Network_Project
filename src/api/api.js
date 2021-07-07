import * as axios from "axios";


const instance=axios.create({
    withCredentials: true,
    headers: {
            'API-KEY': 'eab66bf9-cc99-465b-b09f-f73811282eae'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export const usersApi = {
    async getUsers(countUserOnPage = 5, currentPage = 1) {
        let response = await instance.get(`users?count=${countUserOnPage}&page=${currentPage}`);
        return response.data

    }
}

export const followApi = {
    async post(id) {
        let response = await instance.post('follow/' + id);
        return response.data
    },
    async delete(id){
        let response = await instance.delete('follow/' + id);
        return response.data
    }
}

export const profileApi = {
    async get (id) {
        let response = await instance.get(`profile/${id}`)
        return response.data
    },
    async getStatus (id) {
        let response= await instance.get(`profile/status/${id}`);
        return response.data
    },
    async updateStatus(status){
        let response= await instance.put('profile/status', 
        {status:status})
        return response.data
    }

}

export const authApi = {
    async get () {
        let response=await instance.get('auth/me');
        return response.data
    },
    async post (values) {
        let response = await instance.post('auth/login', values)
        return response.data
    },
    async delete (){
        let response = await instance.delete('auth/login')
        return response.data
    }

}
