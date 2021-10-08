import React, { useState } from 'react'
import Category from '../Category'
import './style.scss'

const ListCategory = ({categoryList}) => {
    const [list, setList] = useState(categoryList)
    const [category, setCategory] = useState(null)

    const handleDelete = (name) => {
        setList(list.filter((category) => { 
            console.log(category)
            return category.name !== name
        }))
        console.log(list)
    }

    const handleChange = (e) => {
        setCategory(e.target.value)
        console.log(category)
    }

    const handleAdd = () => {
        setList([...list, {'name': category}])
    }
      
    return (
        <div className="list-cat-container flex flex-col">
            <div className="search">
                <input type="text" onChange={e => handleChange(e)} />
                <input type="button" value="Add" onClick={handleAdd} />
            </div>
            <div className="list-cat">
            {list.map((category, index) => (
                <Category key={"cat"+index} name={category.name} handleDelete={() => handleDelete(category.name)} />
            ))}
            </div>
        </div>
    )
}

export default ListCategory
