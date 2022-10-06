import * as React from 'react';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';

export default (props) => {
    return (
        <div className="products-header">
            <h1>Produtos <span className="total">25 cadastrados</span></h1>
            <Button variant="contained" startIcon={<Add />}>
                Adicionar Produto
            </Button>
        </div>        
    );
}