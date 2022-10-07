import api from "../../../services/Api";

export const getProducts = () => {
    return api.get('/products')
        .catch((err) => {
            console.error("Ops! Ocorreu um erro!" + err);
        });
};