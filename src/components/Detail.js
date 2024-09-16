// ไฟล์ detail.js รับหน้าที่ในการแสดงรายละเอียดบทความที่สนใจ

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blogs";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    //ดึงข้อมูลบทความ
    const result = blogs.find((item) => item.id === parseInt(id));
    // ดึง ค่า state มาจาก result
    setTitle(result.title);
    setImage(result.image_url);
    setContent(result.content);
    setAuthor(result.author);
    console.log(result);
  }, []);
  return (
    <div className="container">
      <div className="detail-container">
        <h2 className="title">Title : {title} </h2>
        <img src={image} alt={title} className="blog-image" />
        <div className="blog-detail">
          <strong>Author : {author}</strong>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
