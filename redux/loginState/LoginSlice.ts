import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'

interface SignUp {
    name: string
    number: undefined
    email: string
    password: string
}

// login user
export const signUpUser = createAsyncThunk(
    'signup/signUpUser',
    async (user: SignUp, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                process.env.NEXT_PUBLIC_VERCEL_UR_SIGN_UP,
                user
            )

            return response?.data?.token
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

interface LoginUser {
    email: string
    password: string
}

// login user process.env.NEXT_PUBLIC_VERCEL_UR_LOGIN
export const loginUser = createAsyncThunk(
    'login/loginUser',
    async (user: LoginUser, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                process.env.NEXT_PUBLIC_VERCEL_UR_LOGIN,
                user
            )

            return response?.data?.token
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

// fetch user data
export const userData = createAsyncThunk('user/userData', async () => {
    const config = {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
        },
    }

    const response = await axios.get(
        process.env.NEXT_PUBLIC_VERCEL_UR_PROFILE,
        config
    )

    if (response?.data?.success) {
        const { data } = response?.data

        Cookies.set('userName', data.user.name, { expires: 7 })
        Cookies.set('profileImg', data.user.profileImg, {
            expires: 7,
        })
        Cookies.set('uId', data.user.id, {
            expires: 7,
        })
    }

    return response?.data
})

// img profile img
export const profileImgUpdate = createAsyncThunk(
    'profile img/profileImgUpdate',
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.patch(
                process.env.NEXT_PUBLIC_VERCEL_UR_PROFILE_IMG,
                data
            )

            if (response?.data?.success) {
                Cookies.set('profileImg', response?.data?.updateImg?.profileImg, {
                    expires: 7,
                })
                Cookies.set(
                    'imagesFileName',
                    response?.data?.updateImg?.imagesFileName,
                    {
                        expires: 7,
                    }
                )
            }

            return response?.data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

// login slice
export const loginSlice = createSlice({
    name: 'login box',
    initialState: {
        // login status
        open: false,
        status: '',
        error: '',
        // user status
        token: '',
        userStatus: '',
        userError: '',
        user: null,
        // upload profile img
        imgStatus: '',
        imgError: '',
    },

    reducers: {
        openLoginBox: (state) => {
            state.open = !state.open
        },
    },
    extraReducers: {
        // login user
        [loginUser.pending.toString()]: (state) => {
            state.status = 'pending'
        },
        [loginUser.fulfilled.toString()]: (state, action: PayloadAction<any>) => {
            state.status = 'success'
            state.token = action.payload
        },
        [loginUser.rejected.toString()]: (state, action: PayloadAction<any>) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        // signup user
        [signUpUser.pending.toString()]: (state) => {
            state.status = 'pending'
        },
        [signUpUser.fulfilled.toString()]: (state, action: PayloadAction<any>) => {
            state.status = 'success'
            state.token = action.payload
        },
        [signUpUser.rejected.toString()]: (state, action: PayloadAction<any>) => {
            state.status = 'rejected'
            state.error = action.payload
        },
        // user fetch
        [userData.pending.toString()]: (state) => {
            state.userStatus = 'pending'
        },
        [userData.fulfilled.toString()]: (state, action: PayloadAction<any>) => {
            state.userStatus = 'success'
            state.user = action.payload
        },
        [userData.rejected.toString()]: (state) => {
            state.userStatus = 'rejected'
        },
        // upload profile image
        [profileImgUpdate.pending.toString()]: (state) => {
            state.imgStatus = 'pending'
        },
        [profileImgUpdate.fulfilled.toString()]: (state) => {
            state.imgStatus = 'success'
        },
        [profileImgUpdate.rejected.toString()]: (
            state,
            action: PayloadAction<string>
        ) => {
            state.imgStatus = 'rejected'
            state.imgError = action.payload
        },
    },
})

export const { openLoginBox } = loginSlice.actions

export const loginBox = (state) => state.loginBox

export default loginSlice.reducer
