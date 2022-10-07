import logo from "../assets/logo.jpg"
import Stack from '@mui/material/Stack';
import "./Header.css";


export default () => {
    return (
        <header className="header">
            <div className="container">
                <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}>

                    <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}>
                        <img src={ logo } width="110px" height="110px" />
                        <h1 className="title">
                            Lojinha Mime
                        </h1>
                    </Stack>   
                    
                        <nav className="menu">
                            <ul>
                                <li><a href="#">Página inicial</a></li>
                                <li><a href="#">Vendas</a></li>
                                <li className="active"><a href="#">Produtos</a></li>
                                <li><a href="#">Clientes</a></li>
                                <li><a href="#">Marketing</a></li>
                            </ul>
                        </nav>
                </Stack>
            </div>
            
           
          
        </header>
    );
}