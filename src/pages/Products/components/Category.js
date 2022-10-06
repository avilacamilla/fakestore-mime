const categories = {
    "electronics": "Eletrônicos",
    "jewelery": "Joias",
    "men's clothing": "Roupas masculinas",
    "women's clothing": "Roupas femininas"
}

export default (props) => {
    const category = props.category;

    return (
        <span>{categories[category]}</span>
    );
};