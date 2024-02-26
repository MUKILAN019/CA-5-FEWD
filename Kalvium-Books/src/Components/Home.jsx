import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../index.css";

export default function Home() {
  const [data, Setdata] = useState([]);
  const [state, Setstate] = useState([]);
  useEffect(() => {
    fetch("https://reactnd-books-api.udacity.com/books", {
      method: "GET",
      headers: {
        Authorization: "whatever-you-want",
      },
    })
      .then((val) => {
        return val.json();
      })
      .then((v) => {
        console.log(v.books);
        Setdata(v.books);
      })
      .catch((error) => {
        console.log("Error fetched:", error);
      });
  }, []);

  function handleInput(event) {
    const inputValue = event.target.value.toLowerCase();
    if (!inputValue) {
      Setdata(data);
      return;
    }
    let modifiedArray = data.filter(function (ele) {
      let name = ele.title.toLowerCase();
      return name.includes(inputValue);
    });
    Setdata(modifiedArray);
  }

  return (
    <div className="Homediv">
      <div className="navd">
        <div>
          <label className="searchLabel">
            <input className="searchbar" type="search" onChange={handleInput} />
          </label>
        </div>
        <div className="btnDiv">
          <Link to="/register">
            <button className="btns">Register</button>
          </Link>
        </div>
      </div>
      <div className="KalviumStudents">
        <Link path="/">
          {" "}
          <img
            className="KalviumStudent"
            src="https://kalvium.com/wp-content/uploads/2023/10/Students_hero-1024x857.webp"
            alt=""
          />
        </Link>
      </div>
      <div className="Grids">
        <div className="ContentBook">
          <h2>"A Book is a gift you can open again and again in Kalvium "</h2>
        </div>
        <div className="ContentBooks">
          <h2>"The Kalvium Books Lives a thousand lives that Never Dies"</h2>
        </div>
      </div>
      <div>
        <div className="hes">
          <h1>Free Books:</h1>
        </div>
      </div>
      <div className="Bg">
        {data.map((e, i) => {
          return (
            <div key={i} className="booksdiv">
              <div className="box">
                <div className="hel">
                  <img src={e.imageLinks.thumbnail} alt="" />
                  <h4 key={i} className="head">
                    {e.title}
                  </h4>
                  <br/>
                  <p key={i} className="head">
                    {e.authors}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
