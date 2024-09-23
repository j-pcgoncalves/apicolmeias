export default function Header() {
    return (
        <div className="bg-white flex justify-between py-5 px-20 items-center">
            <h1 className="font-dancing font-extrabold text-6xl text-primary">Apicolmeias</h1>

            <ul className="flex gap-16 text-lg items-center">
                <li className="nav-links">Home</li>
                <li className="nav-links">Produtos</li>
                <li className="nav-links">Contactos</li>
            </ul>
        </div>
    );
}