import api from "../../../services/Api";

export const getProducts = () => {
    return api.get('/products')
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
};