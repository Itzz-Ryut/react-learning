function SearchBar({ result, onChange }) {
  return (
    <input
      type='text'
      value={result}
      onChange={(e) => onChange(e.target.value)}
      placeholder='Search here'
    />
  );
}

export default SearchBar;