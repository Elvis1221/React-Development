import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addNewsAC} from "../../../redux/news-reduser";
import {News} from "./News";


export const NewsContainer = () => {
  const dispatch = useDispatch();
  const {news} = useSelector(state => state.news);

  const [message, setMessage] = useState('');

  const addNews = () => {
    const newNews = {
      contentNews: message
    };
    dispatch(addNewsAC(newNews));
  };
  const newNewsText = (event) => setMessage(event.target.value);

  return (
    <>
      {
        news.map(({contentNews}) => (
            <News {...{
              contentNews,
              addNews,
              newNewsText
            }}
            />
          )
        )}
      <div>
        <div>
            <textarea onChange={newNewsText}>
            </textarea>
        </div>
        <div>
          <button onClick={addNews}>add</button>
        </div>
      </div>
    </>
  )
};


export default NewsContainer