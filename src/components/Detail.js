// ไฟล์ detail.js รับหน้าที่ในการแสดงรายละเอียดบทความที่สนใจ

import { useEffect } from "react"
import { useParams } from "react-router-dom"
import blogs from "../data/blogs"

export default function Detail() {
  const {id} = useParams()
  useEffect(() => {
    //ดึงข้อมูลบทความ
   const result = blogs.find((item)=>item.id === parseInt(id))
   console.log(result);

  },[])
  return (
    <div>
        <h2>รายละเอียดบทความ : {id}</h2>
    </div>
  )
}
