import React, { useState, useEffect } from 'react';

const StockPrice = () => {
    const [stockData, setStockData] = useState({
        symbol: 'AAPL',
        price: '--',
        timestamp: '--'
    });

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');

        
        socket.onopen = () => {
            console.log('✅ Connected to WebSocket server');
        };

        
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setStockData({
                symbol: data.symbol,
                price: data.price,
                timestamp: data.timestamp
            });
        };

        
        socket.onerror = (error) => {
            console.error(' WebSocket Error:', error);
        };

        
        return () => {
            socket.close();
            console.log('WebSocket connection closed');
        };
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>📈 Live Stock Prices</h1>
            <div style={{ marginTop: '20px', fontSize: '1.2em' }}>
                <strong>Stock Symbol:</strong> <span>{stockData.symbol}</span><br />
                <strong>Price:</strong> <span style={{ fontSize: '2em', color: 'green' }}>${stockData.price}</span><br />
                <strong>Timestamp:</strong> <span>{stockData.timestamp}</span>
            </div>
        </div>
    );
};

export default StockPrice;
