import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    assessaData: null,
    reloadData: false,
    compImageUrls: [],
  },
  reducers: {
    ShowLoading: (state) => {
      state.loading = true;
    },
    HideLoading: (state) => {
      state.loading = false;
    },
    SetassessaData: (state, action) => {
      state.assessaData = action.payload;
    },
    ReloadData: (state, action) => {
      state.reloadData = action.payload;
    },
    UpdateCompImageUrls: (state, action) => {
      state.compImageUrls = action.payload;
    },
  },
});

export const {
  ShowLoading,
  HideLoading,
  SetassessaData,
  ReloadData,
  UpdateCompImageUrls,
} = rootSlice.actions;

export const rootReducer = rootSlice.reducer;
