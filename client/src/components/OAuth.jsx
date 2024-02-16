import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL
        }),
      });

      const data = await res.json();
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.error('Could not sign in with Google', error);
    }
  };

  return (
    <button onClick={handleGoogleClick}
     type="submit"
                className="w-full inline-flex items-center justify-center 
                    gap-4 px-6 py-2.5 font-medium border border-gray-300 bg-white text-dark 
                    hover:bg-blue-100 disabled:opacity-80
                    rounded-md transition-all duration-500 group shadow-xl"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/rgpapp-mern.appspot.com/o/google.png?alt=media&token=eaccfd86-a783-4c8d-a89a-fee9ba5307d6"
                  alt="googleLogo"
                  className="w-5 h-5 text-dark"
                />
       Google
    </button>
  );
}
