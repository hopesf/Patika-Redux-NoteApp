import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      title: 'note 1',
      color: 'bg-red-600',
    },
    {
      title: 'note 2',
      color: 'bg-green-600',
    },
    {
      title: 'note 3',
      color: 'bg-purple-600',
    },
  ],
  colors: ['bg-red-600', 'bg-purple-600', 'bg-yellow-600', 'bg-blue-600', 'bg-green-600'],
  selectedColor: null,
};

const reducers = {
  changeColor: (state, action) => {
    state.selectedColor = action.payload;
  },
  newNote: (state, action) => {
    state.items.push(action.payload);
    state.selectedColor = null;
  },
  filteredItems: (state, action) => {
    const regexValue = action.payload;

    state.items = state.items.filter((el) => el.title.match(regexValue));
  },
};

const createNoteSlicer = createSlice({
  name: 'notes',
  initialState,
  reducers,
});

export const { newNote, changeColor, filteredItems } = createNoteSlicer.actions;
export default createNoteSlicer.reducer;
