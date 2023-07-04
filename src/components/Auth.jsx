import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase/firebaseConfig';

const Auth = ({ setIsAuth }) => {
  // giriş yap butonuna tıklanınca
  const handleClick = () => {
    /*
     * kullanıcın google hesabını seçmesine yarayan
     * bir penecere açar
     * kullanıcı hesabını seçtiğinder
     * veritabanında yoksa onu ekler varsa giriş tarihini günceller
     * sonuç olarak bize kullanıcı hakkında bilgileri içeren cevap dödürürr
     */
    signInWithPopup(auth, provider).then((res) => {
      // kullanıcı giriş yaptığına dair kanıtı içeren
      // token' ı localstorage'a kaydettik
      localStorage.setItem('token', res.user.refreshToken);

      // yetkilendirmeyi doğruladık
      setIsAuth(true);
    });
  };

  return (
    <div className="auth">
      <h1>Chat Odası</h1>
      <p>Devam Etmek İçin Giriş Yapın</p>
      <button onClick={handleClick}>
        <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" />
        <span>Google ile Gir</span>
      </button>
    </div>
  );
};

export default Auth;
