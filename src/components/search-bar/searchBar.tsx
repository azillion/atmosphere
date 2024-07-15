import Button from "../button/button";

export default function SearchBar() {
    return (
        <form className="flex items-center justify-center border border-2 rounded border-black p-2"
            action="/forecast" method="get"
        >
            <input
                name="location"
                type="text"
                className={`p-2 bg-gray mr-2 outline-none focus:border-b-2 focus:border-blue-500`}
                placeholder={"Search a place"}
                autoComplete="off"
            />
            <Button type="submit">Search</Button>
        </form>
    );
}
