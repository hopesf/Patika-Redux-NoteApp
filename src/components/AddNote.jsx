import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor, newNote } from '../redux/notes/createNoteSlicer';

const AddNote = () => {
  const dispatch = useDispatch();
  const [newNoteValue, setNewNoteValue] = useState('');
  const { colors, selectedColor, items } = useSelector((state) => state.notes);

  const handleColorClick = (color) => {
    dispatch(changeColor(color));
  };

  const handleNewNote = () => {
    if (selectedColor) {
      if (newNoteValue.length > 0) {
        dispatch(newNote({ title: newNoteValue, color: selectedColor }));
        setNewNoteValue('');
      }
    } else {
      alert('please select color!');
    }
  };

  return (
    <div className="w-full pt-2 pb-5 rounded bg-white shadow-md">
      <textarea
        value={newNoteValue}
        onChange={({ target }) => setNewNoteValue(target.value)}
        className="w-full outline-none text-neutral-700 tracking-wider resize-none p-5"
        rows={5}
        placeholder="Enter your note here..."
      />
      <div className="flex w-full flex-row px-5 justify-between">
        <div className="space-x-2">
          {colors?.map((color) => (
            <button
              key={color}
              onClick={() => handleColorClick(color)}
              className={` rounded-full ${color} ${selectedColor === color ? ' p-5 ' : 'p-4'}`}
            />
          ))}
        </div>
        <button onClick={handleNewNote} className="bg-green-600 px-10 rounded-full text-white hover:animate-bounce">
          ADD
        </button>
      </div>
    </div>
  );
};
export default AddNote;
