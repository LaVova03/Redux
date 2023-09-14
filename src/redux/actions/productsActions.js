const products = (userObj) => {
    return {
        type: "SET_PRODUCT",
        payload: userObj
    }
}

const logOutProduct = () => {
    return {
        type: "LOG_OUT_PRODUCT",
    }
}

export default {
    products,
    logOutProduct
}