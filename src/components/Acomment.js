import { useState } from 'react';
import love from '../assets/images/love.png';
import liked from '../assets/images/liked.png';

const Acomment = (props) => {
  const [likeUrl, setLikeUrl] = useState(love);
  return (
    <div className='comment-container'>
      <span className='userOfComment'>ore.zeno</span>
      <span className='commentOfUser'>{props.cmntList.contents}</span>
      <span
        className='comment-like'
        onClick={() => {
          likeUrl === love ? setLikeUrl(liked) : setLikeUrl(love);
        }}
        style={{
          backgroundImage: `url(${likeUrl})`,
        }}
      ></span>
      <span className='comment-delete'></span>
    </div>
  );
};

export default Acomment;
