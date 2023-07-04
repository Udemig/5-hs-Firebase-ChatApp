import { useState, useRef } from 'react';
import Auth from './components/Auth';
import Chat from './components/Chat';

function App() {
  /*
   * local storage'ı kontrol ediyoruz
   * eğerki daha önce kaydolduğuna dair token
   * varsa > isAuth true oluyor ve sohbet ekranına yönleniyor
   * yoksa > isAuth undefined oluyor ve giriş yapma ekranına yönleniyor
   */
  const [isAuth, setIsAuth] = useState(localStorage.getItem('token'));
  const [room, setRoom] = useState(null);

  // inputa yazılanı izlemek için
  const inputRef = useRef();

  // çıkış yapa tıklanılınca çalışır:
  const handleLogout = () => {
    // kullanıcının giriş yaptığına dair bilgiyi
    // local storage'dan kaldırdık
    localStorage.removeItem('token');
    // giriş sayfasına yönlemesi için isAuth'u false a çektik
    setIsAuth(false);
  };

  // eğer ki yetkisi yoksa giriş sayfasına yönlendir
  if (!isAuth) {
    return (
      <div className="container">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  // eğer ki kullanıcın yetkisi varsa ekran basılır:
  return (
    <div className="container">
      {room ? (
        // oda varsa cshohbet ekranına yönlendir
        <Chat room={room} />
      ) : (
        // oda yoksa oda seçmey yönlendir
        <div className="room-container">
          <h1>Chat Odası</h1>
          <p>Hangi Odaya Gireceksiniz ? </p>
          <input ref={inputRef} type="text" />
          <button
            onClick={() => setRoom(inputRef.current.value)}
            id="enter"
          >
            Odaya Gir
          </button>
          <button id="leave" onClick={handleLogout}>
            Çıkış Yap
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
