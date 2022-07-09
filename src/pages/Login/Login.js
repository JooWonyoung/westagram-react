import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form () {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  // const handleIdInput = (e) => {
  //   setId(e.target.value);
  //   checkValue();
  // };
  // const handlePwInput = (e) => {
  //   setPw(e.target.value);
  //   checkValue();
  // };
  function checkValue() {
    return !(id.includes('@') && pw.length > 5)
  }
  const disabled = checkValue();


  return (
  <form className='login-container'onSubmit={() => {
        navigate('/main');
      }}
      onChange={(e)=>{
        checkValue()
      }}
    >
      <div className='westagram-logo-login'>westagram</div>
      <input
        type='text'
        name='id'
        className='login id-box'
        placeholder='전화번호, 사용자 이름 또는 이메일'
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type='password'
        name='pw'
        className='login pw-box'
        placeholder='비밀번호'
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <button className='login-button' disabled={disabled}>
        로그인
      </button>
      <div className='forgot-pw'>
        <a href='https://www.instagram.com/accounts/password/reset/'>
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </form>);
};

function Log (){
  return (
    <div className='login'>
      <header> </header>
      <main className='container'>
        <Form> </Form>
      </main>
      <footer> </footer>
    </div>
  );
};

export default Log;
