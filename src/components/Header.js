import logo from "../assets/logo.jpg"

export default () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={ logo } />
                <h1 className="title">
                    Lojinha Mime
                </h1>
            </div>
            <nav className="menu">
                <ul>
                    <li><a href="#">Página inicial</a></li>
                    <li><a href="#">Vendas</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Clientes</a></li>
                    <li><a href="#">Marketing</a></li>
                </ul>
            </nav>
        </header>
    );
}