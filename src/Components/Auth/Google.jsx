import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { toast } from "react-hot-toast";

function Google() {

  const { googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {

    try {

      setLoading(true);

      const result = await googleLogin();

      console.log("Google User:", result.user);

      toast.success("Google Login Successful 🚀");

      navigate(from, { replace: true });

    } catch (error) {

      console.log(error);
      toast.error("Google Login Failed ❌");

    } finally {

      setLoading(false);

    }

  };

  return (

    <button
      onClick={handleGoogleLogin}
      disabled={loading}
      className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition font-medium"
    >

      <FaGoogle className="text-red-500" size={20} />

      {loading ? "Signing in..." : "Continue with Google"}

    </button>

  );

}

export default Google;