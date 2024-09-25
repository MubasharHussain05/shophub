export const Header=()=>{
    return(
     <>
    <nav className="flex justify-center items-center py-8  container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2x1 text-red-400 font-semibold"> Food Recipe</h2>
        <form>
            <input type="text"
            name="search"
            placeholder="Enter Items..."
            className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-blue-100 focus:shadow-red-200 "
             />
        </form>

    </nav>
    </>
)
}