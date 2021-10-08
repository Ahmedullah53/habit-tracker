import React from 'react'
import './style.scss'

const Category = ({name, handleDelete}) => {
    return (
        <div className="flex flex-sb flex-align-center cat">
            <h4>{name}</h4>
            <div>
                <input className="cat-btn" type="button" value="delete" onClick={handleDelete} />
            </div>
        </div>
    )
}

export default Category
