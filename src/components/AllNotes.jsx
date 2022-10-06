import { useSelector } from 'react-redux';

const AllNotes = () => {
  const allItems = useSelector((state) => state.notes.items);

  return (
    <div className="grid w-full grid-cols-3 gap-5 pt-5">
      {allItems?.map((el) => (
        <span key={el.title} className={`flex rounded  p-2 ${el.color}`}>
          {el.title}
        </span>
      ))}
    </div>
  );
};
export default AllNotes;
