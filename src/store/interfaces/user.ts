export type UserState = {
  isAuth: boolean
  isLoading: boolean
  firstName: string
  middleName: string
  lastName: string
  login: string
  role: string
}

export type RegisterFields = {
  firstName: string
  middleName: string
  lastName: string
  login: string
  password: string
}

export type LoginFields = {
  login: string
  password: string
}


