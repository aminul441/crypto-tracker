export default function SearchBar({search, setSearch}){
    return(
        <input
        placeholder="Search coin..."
        value={search}
        onChange={(e) => setSearch (e.target.value)}
        />
    )
}