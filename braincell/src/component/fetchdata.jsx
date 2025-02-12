import React, { useEffect, useState } from 'react';
import '../styles/fetch.css';

const Fetchdata = () => {
    const [fetchData, setFetchData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');

    async function showData() {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users');
            let data = await res.json();
            setFetchData(data);
            setFilterData(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        showData();
    }, []);

    const handleChangeName = (e) => {
        let searchValue = e.target.value.toLowerCase();
        setSearchName(searchValue);
        let filtered = fetchData.filter(item => item.name.toLowerCase().includes(searchValue));
        setFilterData(filtered);
    };

    const handleChangeEmail = (e) => {
        let searchValue = e.target.value.toLowerCase();
        setSearchEmail(searchValue);
        let filtered = fetchData.filter(item => item.email.toLowerCase().includes(searchValue));
        setFilterData(filtered);
    };

    return (
        <div id="container">
            <div className="search-container">
                <div className="search-box">
                    <label htmlFor="name">Filter by Name:</label>
                    <input 
                        type="text" 
                        placeholder="Enter Name" 
                        onChange={handleChangeName} 
                        value={searchName} 
                    />
                </div>
                <div className="search-box">
                    <label htmlFor="email">Filter by Email:</label>
                    <input 
                        type="text" 
                        placeholder="Enter Email" 
                        onChange={handleChangeEmail} 
                        value={searchEmail} 
                    />
                </div>
            </div>

            <div className="user-list">
                {filterData.map((ele, id) => (
                    <ul className="user-card" key={id}>
                        <li>Name: {ele.name}</li>
                        <li>Email: {ele.email}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default Fetchdata;
