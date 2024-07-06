import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        console.log(json);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      console.log("Login successful");

      navigate("/");
    } else {
      console.log("Login failed");
      alert("Incorrect username or password");
    }
  }
  return (
    <main className="relative">
      <div>
        <div className="py-5 px-[5%] mx-[25%] my-[10%] text-center w-[50%] h-[60vh] bg-[#F5F5F5] ">
          <h1 className="text-3xl font-semibold">Sign-In</h1>
          <form onSubmit={handleSubmit}>
            <div className="py-8">
              <input
                type="email"
                id="email"
                value={email}
                placeholder="example@gmaiil.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-[30vw] h-[7vh] px-3 outline-none border border-slate-gray"
              />
            </div>
            <div className="pt-5 pb-8">
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Choose a strong Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-[30vw] h-[7vh] px-3 outline-none border border-slate-gray"
              />
            </div>
            <button
              type="submit"
              className="bg-[#7a8385] text-white px-10 py-3 font-semibold hover:bg-[#4a4e4f]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
