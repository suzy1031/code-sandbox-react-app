import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk("/photos/fetchPhotos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  return response.json();
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const photoDataExample = {
  albumId: 1,
  id: 1,
  title: "accousamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
};

export type PhotoData = {
  data: (typeof photoDataExample)[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: undefined | string;
};

const initialState: PhotoData = {
  data: [],
  status: "idle",
  error: undefined,
};

export const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchPhotos.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const selectPhotos = (state: { photos: PhotoData }) => state.photos.data;
export default photoSlice.reducer;
