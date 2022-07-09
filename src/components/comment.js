import {useState} from 'react'

const Comment = () => {
    const [onButton, setOnbutton] = useState(true);
    const [cmntList, setCmntList] = useState([]);
    let cmnt = '';

    const checkItIsBlank = (e) => {
      let thisCmnt = e.target.value;
      thisCmnt.length > 0 && !!thisCmnt.trim() ? setOnbutton(false) : setOnbutton(true)
    };
  
    const createCmnt = (e) => {
      e.preventDefault();
      cmnt = e.target.text.valueq
      setCmntList([...cmntList,
        {id: 1, name:'id', className: 'userOfComment', contents: 'ore.zeno' },
        {id: 2, name:'pw', className: 'commentOfUser', contents: cmnt },
        {id: 3, name:'like', className: 'comment-like', contents: '' },
        {id: 4, name:'delete', className: 'comment-delete', contents: ''} 
    ])
      e.target.text.value = '';
      setOnbutton(true)
    };
  
    return (
      <>
        <div className='feed-comment'>{
          cmntList.map((el, i) => {
            return <span key={i} className={el.className}>{el.contents}</span>
          })
        }</div>
        <div className='feed-time'>30분 전</div>
        <form
          className='feed-comment-box-section'
          onSubmit={(e) => {
            createCmnt(e)
          }}
          onChange={(e)=>{
            checkItIsBlank(e)
          }}
        >
          <div className='emoji-icon-container'>
            <img src='images/smile.png' alt='emoji' className='emoji-icon' />
          </div>
          <input
            type='text'
            name='text'
            placeholder='댓글 달기...'
            className='comment-box'
          />
          <button className='comment-enter-button' name='button' disabled={onButton}>
            게시
          </button>
        </form>
      </>
    );
  };

  export default Comment;