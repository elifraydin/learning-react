import { useEffect, useState } from "react"
import categoryData from '../api/categories.json'
import Category from './ui/Category'

function Categories() {

const [categories, setCategories]=useState([]);

useEffect(() => {
  // istek atıyoruz
  // setTimeout(() => setCategories(categoryData), 1000)
  setCategories(categoryData)
}, [])

    return (
      <div className="bg-white py-4">
        <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
        <div className="grid grid-cols-10">
        {/* {!categories.length && 'Yükleniyor..'} */}
        {categories && categories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>
    )
  }
export default Categories