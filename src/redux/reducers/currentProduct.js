const currentProduct = (state = {}, action) => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {
                ...state,
                user: action.payload,
                showProduct: true
            }
        case "LOG_OUT_PRODUCT":
            return {
                ...state,
                user: {},
                showProduct: false
            }
        default:
            return state
    }
}

export default currentProduct;