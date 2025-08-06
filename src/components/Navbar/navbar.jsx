
function add(a,b){
    return a+b;
}

console.log(add(5,20));
console.log(add(15,20));
console.log(add(55,20));


function NavBar({a,b,c}){
let name = "VarunKumar";
    return (
        <div className="navbar">
            <h1>My Website</h1>
            <nav>
                <br />
                <ul>
                    {a+b+c}
                    <li><a href="/">Vimal</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Varun</a></li>
                </ul>
            </nav>
        </div>
    )
    
}

export default NavBar