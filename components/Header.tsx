import NavLinks from './NavLinks';
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My WDD 430 Portafolio</h1>
        <NavLinks />
      </div>
    </header>
  );
}