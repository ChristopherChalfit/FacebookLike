import Login from "../../components/Login/Login";

export default function Main() {
  return (
    <div className="main flex md:flex-row max-sm:flex-col gap-8 justify-center items-center text-center h-screen">
      <div>
        <p className="text-[#0866FF] text-5xl">Facebook</p>
        <p className="text-black">Avec Facebook, partagez et restez en contact avec votre entourage.</p>
      </div>
      <div>
        <Login/>
      </div>
    </div>
  );
}
