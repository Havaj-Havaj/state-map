import React from "react";
import "./table-styles.css";
import fakeDatabase from "../fakeDatabase"
import { useState } from "react";

function Products() {
  const  [fakeDatabas, setFakeDatabas] = useState(fakeDatabase);
  const handleDelete = (id) => {
    const newMassiv = fakeDatabas.filter(item =>item.id !== id)
    setFakeDatabas (newMassiv)
  }
 
  return (
    <div className="my-2">
      <table className="table">
        <thead>
          <tr>
            <th>Превью</th>
            <th>Товар</th>
            <th>Цена</th>
            <th>В наличие</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
            {fakeDatabas.map(it => {return(
          <tr>
            <td><img src ={it.image}></img></td> 
             <td>{it.name}</td>
             <td>{it.price}</td>
             <td>{it.inStock ? "да" : "нет" }</td>
             <td><button onClick={() =>handleDelete(it.id )}> delete </button></td>
          </tr>
            )})}
             
        </tbody>
      </table>
    </div>
  );
}

export default Products;
