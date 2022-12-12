import userReducer from "./userSlice";

const { configureStore } = require("@reduxjs/toolkit");

export default configureStore ({
    reducer:{
        user:userReducer,
    }
})