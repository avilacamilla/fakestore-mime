import * as React from 'react';
import Button from '@mui/material/Button';
import { Add } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import "./ProductsHeader.css"

export default (props) => {
    return (
        <div className="products-header">
            <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}>
                <h1>Produtos <span className="total">25 cadastrados</span></h1>
                <Button variant="contained" startIcon={<Add />}>
                    Adicionar Produto
                </Button>
            </Stack>   
        </div>        
    );
}