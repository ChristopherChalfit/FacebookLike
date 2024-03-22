const onLoginTest = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Test");
};
export default function Login() {
  return (
    <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 gap-4 flex flex-col">
      <form
        className=""
        onSubmit={onLoginTest}
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 w-full">
          <button
            className="bg-blue-500 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="submit"
          >
            Se Connecter
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Mot de passe oublié ?
          </a>
        </div>
      </form>
      <div className="separator border-b border-black"></div>
      <div className="newAccount">
      <button
            className="bg-green-500 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="submit"
          >
            Créer nouveau compte
          </button>
      </div>
    </div>
  );
}
