export default function BeforeLogin() {
  return (
    <section className="h-80 flex justify-center items-center">
      <div className="rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[3px] text-sm font-black hover:bg-gray-400 hover:cursor-pointer">
        <div className="rounded-md bg-white p-[5px] hover:bg-pink-100">
          Sign in With Google
        </div>
      </div>
    </section>
  );
}