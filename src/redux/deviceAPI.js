import { getDeviceStart, getDeviceSuccess, getDeviceFail, getChangeDeviceStart, getChangeDeviceSuccess, getChangeDeviceFail} from "./deviceSlice";
import axios from "axios";

export const deviceAPI = async(dispatch) => {
    dispatch(getDeviceStart());
    try{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/devices`,)
        dispatch(getDeviceSuccess(res.data))
    }catch(err) {
        dispatch(getDeviceFail(err))
    }
};

export const changeDeviceStatusAPI = async(dispatch, id, body) => {
    dispatch(getChangeDeviceStart());
    try{
        const res = await axios.put(`${process.env.REACT_APP_BACKEND_URL}api/devices/manually/${id}`, body)
        dispatch(getChangeDeviceSuccess(res.data))
    }catch(err) {
        dispatch(getChangeDeviceFail(err))
    }
};