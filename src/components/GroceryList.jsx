import React from "react";

export default function GroceryList({data,handleDelete}){
    return (
        <div>
            {
                data.map(item => {
                    return (
                        <div className="groceryItemDiv">
                            <h3>{item.title}</h3>
                            <button onClick={()=>{handleDelete(item.id)}}>DELETE</button>
                        </div>
                    )
                })
            }
        </div>
    )
}