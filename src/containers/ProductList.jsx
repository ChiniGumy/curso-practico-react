import React, {useState, useEffect} from 'react';
import ProductItem from '@components/ProductItem';
import axios from 'axios';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products?limit=5&offset=1';

const ProductList = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API);
            setProducts(response.data);
        }
        fetchData();
    }, []); 
	
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;
