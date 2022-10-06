import { useDispatch } from 'react-redux';
import { filteredItems } from '../redux/notes/createNoteSlicer';

const Search = () => {
  const dispatch = useDispatch();

  const handleSearchBar = (e) => {
    dispatch(filteredItems(e.target.value));
  };

  return (
    <div className="w-full space-y-4 pb-5">
      <h2 className="text-neutral-700 font-semibold tracking-wider  text-4xl">NotesApp</h2>
      <input
        type="text"
        onChange={(e) => handleSearchBar(e)}
        className="w-1/2 px-5 py-2 border tracking-wider  shadow rounded-full outline-none text-neutral-700"
        placeholder="Search..."
      />
    </div>
  );
};
export default Search;
