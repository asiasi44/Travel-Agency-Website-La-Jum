//@ts-nocheck

const Login = () => {
  return (
    <div className="flex justify-center w-full bg-gray-200 h-screen items-center">
      <div className="flex flex-col gap-8 bg-gray-100 items-center py-8 px-16 rounded-2xl shadow-lg">
        <div className="font-extrabold text-5xl">
          La<span className="text-sky-500">Jum</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="font-bold text-md">Sign in With Your ID</div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="border-1 rounded-md border-sky-500 placeholder:text-sm px-2 py-[1px]"
              placeholder="Email ID"
            />
            <input
              type="text"
              className="border-1 rounded-md border-sky-500 placeholder:text-sm px-2 py-[1px]"
              placeholder="Password"
            />
          </div>
          <button className="bg-sky-500 px-12 text-xs text-white py-2 rounded-md">
            Continue
          </button>
        </div>
        <div className="text-xs text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
};

export default Login;
