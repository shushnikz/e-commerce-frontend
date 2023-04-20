import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProducts } from '../actions/productAction';

function Filter() {
    const [searchKey, setSearchKey] = useState("");
    const [sort, setSort] = useState("popular");
    const [category, setCategory] = useState("all");

    const dispatch = useDispatch()

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-2 m-3'>
                    <input
                        value={searchKey}
                        onChange={(e) => { setSearchKey(e.target.value) }}
                        type='text'
                        placeholder='Search product'
                        className='form-control' />
                </div>


                <div className='col-md-2 m-3'>
                    <select
                        value={sort}
                        onChange={(e) => { setSort(e.target.value) }}
                        className='form-control'
                    >
                        <option value="popula">Popular</option>
                        <option value="htl">High to Low</option>
                        <option value="lth">Low to High</option>
                    </select>
                </div>

                <div className='col-md-2 m-3'>
                    <select
                        value={category}
                        onChange={(e) => { setCategory(e.target.value) }}
                        className='form-control'>
                        <option value="all">All</option>
                        <option value="electronics">Electronic</option>
                        <option value="fashion">fashion</option>
                        <option value="mobiles">Mobiles</option>
                        <option value="games">Games</option>
                    </select>
                </div>
                <div className='col-md-2 m-3'>
                    <button className='btn btn-dark' onClick={() => { dispatch(filterProducts(searchKey, sort, category)) }}>Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
