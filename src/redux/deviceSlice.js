import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    device: { device: null, isFetching: false, error: false },
    changeDevice: { changeDevice: null, isFetching: false, error: false },
  },
  reducers: {
    getDeviceStart: (state) => {
      state.device.isFetching = true;
    },
    getDeviceSuccess: (state, action) => {
      state.device.isFetching = true;
      state.device.device = action.payload;
    },
    getDeviceFail: (state) => {
      state.device.error = false;
    },
    getChangeDeviceStart: (state) => {
      state.changeDevice.isFetching = true;
    },
    getChangeDeviceSuccess: (state, action) => {
      state.changeDevice.isFetching = true;
      state.changeDevice.changeDevice = action.payload;
    },
    getChangeDeviceFail: (state) => {
      state.changeDevice.error = false;
    },
  },
});

export const {
  getDeviceStart,
  getDeviceSuccess,
  getDeviceFail,
  getChangeDeviceStart,
  getChangeDeviceSuccess,
  getChangeDeviceFail,
} = deviceSlice.actions;
export default deviceSlice.reducer;
