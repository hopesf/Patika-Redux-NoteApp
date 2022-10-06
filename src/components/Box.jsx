import AddNote from './AddNote';
import AllNotes from './AllNotes';
import Search from './Search';

const Box = () => {
  return (
    <div className="p-5 flex items-center justify-center flex-col mx-auto text-center">
      <div className="w-3/6 my-10 ">
        <Search />
        <AddNote />
        <AllNotes />
      </div>
    </div>
  );
};
export default Box;
