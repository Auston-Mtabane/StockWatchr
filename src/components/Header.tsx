export default function Header() {
    return (<>
    <div className="flex justify-between items-center p-4 max-w-7xl mx-auto px-32">
        <div id="logo">
            <img src="logo.webp" alt="logo" className="w-32"/>
        </div>
        <div id="options">
            <ul>
                <li className="inline-block mx-4"><a href="#">Home</a></li>
                <li className="inline-block mx-4"><a href="#">Stocks</a></li>
                <li className="inline-block mx-4"><a href="#">About</a></li>
            </ul>
        </div>
        <button id="view-stocks" className="bg-blue-500 text-white px-4 py-2 rounded">
            View Stocks
        </button>
    </div>
    </>);
}