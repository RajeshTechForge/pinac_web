"use client";
import { useState, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import type { UserCredential } from "@firebase/auth";
import { FirebaseContext } from "../contexts/Firebase";
import Notification from "../components/Notification";

// icons
import { RiContactsLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

interface NotificationState {
  message: string;
  type: "success" | "error";
  show: boolean;
}

const SignUpPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const firebase = useContext(FirebaseContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState<NotificationState>({
    message: "",
    type: "success",
    show: false,
  });

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({
      message,
      type,
      show: true,
    });
  };

  //
  const handleLoginClick = () => {
    const appAuth = searchParams.get("app-auth");
    if (appAuth === "true") {
      navigate("/auth/sign-in/?app-auth=true");
    } else {
      navigate("/auth/sign-in");
    }
  };

  // handle auth flow for desktop App
  const handleAuthFlow = async (userCredential: UserCredential) => {
    const appAuth = searchParams.get("app-auth");
    if (appAuth === "true") {
      const idToken = await userCredential.user.getIdToken();
      const refreshToken = userCredential.user.refreshToken;
      const webApiKey = import.meta.env.VITE_FIREBASE_WEB_API_KEY;
      const userData = {
        idToken: idToken,
        refreshToken: refreshToken,
        webApiKey: webApiKey,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
      };
      const encodedData = encodeURIComponent(JSON.stringify(userData));
      window.location.href = `pinac-workspace://auth?data=${encodedData}`;
      navigate("/");
    } else {
      navigate("/");
    }
  };

  //
  const handleSignUp = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      if (firebase) {
        const userCredential = await firebase.signUpWithEmail(
          name,
          email,
          password,
        );
        showNotification("Account created successfully!", "success");
        setTimeout(() => handleAuthFlow(userCredential), 1500);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle specific Firebase error cases
      if (error.code === "auth/email-already-in-use") {
        showNotification("Email already exists", "error");
      } else if (error.code === "auth/invalid-email") {
        showNotification("Invalid email format", "error");
      } else if (error.code === "auth/weak-password") {
        showNotification("Password should be at least 6 characters", "error");
      } else {
        showNotification("Sorry, something went wrong", "error");
      }
    }
  };

  //
  const handleGoogleSignUp = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
    try {
      if (firebase) {
        const userCredential = await firebase.authenticateWithGoogle();
        showNotification("Account created successfully!", "success");
        setTimeout(() => handleAuthFlow(userCredential), 1500);
      }
    } catch (error) {
      showNotification(`Sorry, an internal error occur: ${error}`, "error");
    }
  };

  // =========================================== //
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden selection:bg-violet-500/30">
      {/* Ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <section className="relative z-10 w-full max-w-md p-6">
        {notification.show && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() =>
              setNotification((prev) => ({ ...prev, show: false }))
            }
          />
        )}

        <div className="text-center mb-8 relative">
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">
            Create an account
          </h1>
          <p className="text-neutral-400 font-light">
            Join PINAC workspace today
          </p>
        </div>

        <form className="flex flex-col p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Name
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <RiContactsLine
                  className="text-neutral-500 group-focus-within:text-violet-400 transition-colors"
                  size={20}
                />
              </div>
              <input
                type="text"
                value={name}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-light"
                placeholder="Enter your name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Email
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MdAlternateEmail
                  className="text-neutral-500 group-focus-within:text-violet-400 transition-colors"
                  size={20}
                />
              </div>
              <input
                type="email"
                value={email}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-light"
                placeholder="Enter your email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Password
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <IoLockClosedOutline
                  className="text-neutral-500 group-focus-within:text-violet-400 transition-colors"
                  size={20}
                />
              </div>
              <input
                type="password"
                value={password}
                className="w-full pl-12 pr-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all font-light"
                placeholder="Enter your password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>

          {/* SignUp Button */}
          <button
            className="w-full py-3 px-4 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 active:scale-[0.98] transition-all mb-6 relative group overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            onClick={handleSignUp}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center text-sm text-neutral-500 mb-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-4 font-light">or connect with</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google log in Button */}
          <button
            className="w-full py-3 px-4 flex items-center justify-center gap-3 bg-transparent border border-white/10 text-white font-medium rounded-xl hover:bg-white/5 active:scale-[0.98] transition-all"
            onClick={handleGoogleSignUp}
          >
            <FcGoogle size={22} />
            Google
          </button>

          {/* Login Page Link */}
          <p className="mt-8 text-center text-sm text-neutral-400">
            Already have an account?{" "}
            <span
              className="text-violet-400 hover:text-violet-300 font-medium transition-colors cursor-pointer"
              onClick={handleLoginClick}
            >
              Login
            </span>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignUpPage;
