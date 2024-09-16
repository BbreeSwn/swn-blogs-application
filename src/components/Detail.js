// ไฟล์ detail.js รับหน้าที่ในการแสดงรายละเอียดบทความที่สนใจ

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

export default function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image , setImage] = useState("")
  const [content , setContent] = useState("")
  const [author , setAuthor] = useState("")
  useEffect(() => {
    //ดึงข้อมูลบทความ
    const result = blogs.find((item) => item.id === parseInt(id));
    // ดึง ค่า state มาจาก result
    setTitle(result.title)
    setImage(result.image_url)
    setContent(result.content)
    setAuthor(result.author)
    console.log(result);
  }, []);
  return (
    <div>
      <h2>รายละเอียดบทความ : {id}</h2>
    </div>
  );
}
