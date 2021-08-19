import React, { useState, useEffect } from 'react';

const ProductsPage = () => {
    const [productsList, setProductsList] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/products/all')
            .then((res) => res.json())
            .then((data) => setProductsList([...data]))
            .then(setisLoading(false));
    }, []);

    return (
        <>
            {/* <Header /> */}
            {isLoading ? (
                <div className='spinner-border text-primary' role='status'>
                    {' '}
                    <span className='sr-only'>Loading...</span>{' '}
                </div>
            ) : (
                productsList.map(product => {
                    <p key={product.id}>{product.name}</p>
                })
            )}
        </>
    );
};
