/* eslint import/no-anonymous-default-export: [0, {"allowCallExpression": true}] */
export default {
  paths: {
    register: "/auth/signin",
    isAuth: "auth/isauthenticated",
    login: "/auth/login",
    logOut: "/auth/logout",
    cars: "/client/getautomodels",
    car: "/client/car",
    order: "/client/order",
    orders: "/client/getclientinfo",
    statistic: "/client/getorderstatistic"
  },

  notificationDisappearTime: 5000
}
