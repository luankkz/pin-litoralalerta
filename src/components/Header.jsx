import logo from '../assets/logo.png'
import notificações from '../assets/notificações.png'
import perfil from '../assets/perfil.png'
export default function Header() {
  return (
    




    <header className=" h-20 bg-[#0F172A] text-white flex items-center  p-4 ">
    


    {/*LOGO */}
    <img src={logo} alt="Logo" className="w-40 " />


    {/* NAVEGAÇÃO DO MENU*/}
    <nav className=" flex gap-20 mx-auto text-lg font-semibold">
      <a href="#" className="hover:text-gray-300">Home</a>
      <a href="#" className="hover:text-gray-300">Notícias</a>
      <a href="#" className="hover:text-gray-300">Prevenção</a>
      <a href="#" className="hover:text-gray-300">Comunidade</a>
    </nav>

    {/* NOTIFICAÇÕES/PERFIL BOTÃO */}

    <nav className="flex items-center gap-10">


    <a href="#">
      <img src={notificações} alt="Notificações" className="w-6 h-6"/>
    </a>

      <button className="w-10 h-10 rounded-full mr-4 overflow-hidden hover:ring-2 hover:ring-blue-500 transition">
      <img src={perfil} alt="Perfil" className="w-full h-full object-cover" />
      </button>


    </nav>
    


    </header>
  );
}