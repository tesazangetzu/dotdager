import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import img from "../images/us-2.png";

const NotFoundPage: React.FC<PageProps> = () => {
  const getRandomPosition = () => ({
    left: `${Math.random() * 80}px`, // Posición horizontal aleatoria
    transform: `rotate(${Math.random() * 360}deg)`, // Rotación aleatoria
  });

  return (
    <main className="flex justify-start container bg-black w-screen h-screen text-white px-22 overflow-hidden">
      <div className="w-1/2">
        <h1 className="text-[280px] font-extrabold -mb-10 pt-10">404</h1>
        <p className="text-4xl mb-4">¡Ups! la página que buscas no existe.</p>
        <p className="text-lg mb-6">
          Esta página no está disponible, pero no te preocupes, podemos llevarte
          a donde necesitas.
        </p>
        <Link
          to="/"
          className="inline-block bg-custom-1 py-4 px-10 text-black rounded-full"
        >
          Ir al inicio
        </Link>
      </div>
      <div className="relative w-1/2 h-screen">
        {[...Array(10)].map((_, i) => (
          <img
            src={img}
            alt="banana"
            className="banana banana-animated"
            width={205}
            style={{
              ...getRandomPosition(),
              animationDelay: `${i * 0.3}s`, // Retraso de animación escalonado
            }}
            key={i}
          />
        ))}
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
