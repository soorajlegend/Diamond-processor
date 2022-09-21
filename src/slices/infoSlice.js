import {createSlice} from '@reduxjs/toolkit';
const infoSlice = createSlice({
   name: 'info',
   initialState: {
      arabic: true,
      users: 1678,
      project: 198,
      client: 75,
      controlAccess: false,
      alert: '',
      alertStatus: false,
   },
   reducers: {
      setArabic: (state, action) => {
         state.arabic = action.payload;
      },
      setUsers: (state, action) => {
         state.users = action.payload;
      },
      setProject: (state, action) => {
         state.project = action.payload;
      },
      setClient: (state, action) => {
         state.client = action.payload;
      },
      setControlAccess: (state, action) => {
         state.controlAccess = action.payload;
      },
      setAlert: (state, action) => {
         state.alert = action.payload;
      },
      setAlertStatus: (state, action) => {
         state.alertStatus = action.payload;
      },
   }
});

export const { setArabic, setUsers, setClient, setProject,setControlAccess, setAlert, setAlertStatus} = infoSlice.actions;

// selector 
export const selectArabic = (state) => state.info.arabic;
export const selectUsers = (state) => state.info.users;
export const selectProject = (state) => state.info.project;
export const selectClient = (state) => state.info.client;
export const selectControlAccess = (state) => state.info.controlAccess;
export const selectAlert = (state) => state.info.alert;
export const selectAlertStatus = (state) => state.info.alertStatus;


export default infoSlice.reducer;