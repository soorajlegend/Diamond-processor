import {createSlice} from '@reduxjs/toolkit';
const infoSlice = createSlice({
   name: 'info',
   initialState: {
      arabic: true,
      users: 1678,
      project: 198,
      client: 75,
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
   }
});

export const { setArabic, setUsers, setClient, setProject} = infoSlice.actions;

// selector 
export const selectArabic = (state) => state.info.arabic;
export const selectUsers = (state) => state.info.users;
export const selectProject = (state) => state.info.project;
export const selectClient = (state) => state.info.client;


export default infoSlice.reducer;