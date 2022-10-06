import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { BorderColor, Delete } from '@mui/icons-material';
import Rating from './Rating';
import Category from './Category';


function createData(
    id,
    image,
    title,
    category,
    rating
) {
    return {
        id,
        image,
        title,
        category,
        rating
    }
};

export default (props) => {
    const products = props.products;
    const rows = [];

    for(let i=0; i<products.length; i+=1) {
        const product = products[i];
        rows[i] = createData(product.id, product.image, product.title, product.category, product.rating);
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Produto</TableCell>
                        <TableCell>Categoria</TableCell>
                        <TableCell>Avaliação</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                <img src={row.image} width="45" height="45" className="product-image" />
                                {row.title}
                            </TableCell>
                            <TableCell>
                                <Category category={row.category}/>
                            </TableCell>
                            <TableCell>
                                <Rating rating={row.rating} />
                            </TableCell>
                            <TableCell>
                                <BorderColor />
                                <Delete />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
