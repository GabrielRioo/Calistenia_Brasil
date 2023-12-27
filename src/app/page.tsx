"use client";

import Image from "next/image";
import Logo from "./assets/logo.png";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function Home() {
  const [codigo, setCodigo] = useState("");
  const [dataAtual, setDataAtual] = useState("");
  const [dificuldade, setDificuldade] = useState("");
  const [corDificuldade, setCorDificuldade] = useState("");

  const handleDificuldade = (e: any) => {
    setDificuldade(e.target.value);

    if (e.target.value === "1") {
      setCorDificuldade("bg-green-500");
    }

    if (e.target.value === "2") {
      setCorDificuldade("bg-yellow-500");
    }

    if (e.target.value === "3") {
      setCorDificuldade("bg-red-500");
    }
  };

  const handleCodigoChange = (e: any) => {
    // Garante que o valor é um número inteiro
    const value = parseInt(e.target.value, 10);

    // Se o valor é um número válido, atualiza o estado
    if (!isNaN(value) && value >= 0 && value <= 9999) {
      setCodigo(value.toString()); // Converte de volta para string para exibir no input
    }

    const dataAtual = new Date();
    const dataFormatada = format(dataAtual, "dd/MM/yyyy");
    setDataAtual(dataFormatada);
  };

  return (
    <div>
      <header className="flex flex-row justify-around mt-4">
        <button className="bg-green-500 pl-5 pr-5 rounded-md">APP</button>
        <Image src={Logo} alt="Logo escrito Calistenia Brasil" />
        <div className="bg-red-600 w-10 h-10 rounded-full">
          {/* <Image /> */}
        </div>
      </header>

      <div className="flex flex-col items-center mt-5">
        <label htmlFor="ficha">Selecione sua Ficha</label>
        <select
          name="ficha"
          value=""
          id="ficha"
          className="w-40 rounded-md font-bold text-black text-center"
        >
          <option value="Ficha 1">Ficha 1</option>
          <option value="Ficha 2">Ficha 2</option>
          <option value="Ficha 3">Ficha 3</option>
          <option value="Ficha 4">Ficha 4</option>
        </select>
      </div>

      <div className="flex flex-col mt-5">
        <div className="flex flex-row justify-around items-center">
          <span className="bg-white w-1/4 h-1 ml-5"></span>
          <h1 className="w-1/2 font-bold text-center uppercase">
            Selecione o desafio
          </h1>
          <span className="bg-white w-1/4 h-1 mr-5"></span>
        </div>

        <div className="flex flex-row justify-around items-center mt-2 mb-5">
          <p>Flexao T</p>
          <div className="bg-green-500 rounded-md pl-2 pr-2">
            <input
              type="radio"
              name="challenge"
              id="easy"
              className="mr-2"
              value="1"
              onChange={handleDificuldade}
            />
            <label htmlFor="easy">0-9 REPS</label>
          </div>

          <div className="bg-yellow-500 rounded-md pl-2 pr-2">
            <input
              type="radio"
              name="challenge"
              id="medium"
              className="mr-2"
              value="2"
              onChange={handleDificuldade}
            />
            <label htmlFor="medium">10-19 REPS</label>
          </div>

          <div className="bg-red-500 rounded-md pl-2 pr-2">
            <input
              type="radio"
              name="challenge"
              id="hard"
              className="mr-2"
              value="3"
              onChange={handleDificuldade}
            />
            <label htmlFor="hard">20+ REPS</label>
          </div>
        </div>
        <span className="bg-white w-11/12 h-1 m-auto"></span>

        <div className="border-2 rounded-lg m-5">
          <div className="flex flex-row bg-slate-300 justify-between">
            <h2 className="font-bold text-black ml-3">01 PUSH - A</h2>
            <div className="flex flex-row">
              <h3 className="mr-3 text-black">Senha</h3>
              <input
                type="number"
                placeholder="0000"
                value={codigo}
                className="w-14 pl-2 pr-2 text-center text-black mr-3 rounded-md"
                onChange={handleCodigoChange}
              />
            </div>
          </div>

          <div className="flex flex-row justify-around items-center">
            <span className="bg-white w-1/4 h-1 ml-5"></span>
            <h1 className="w-1/2 font-bold text-center uppercase">
              Aquecimento
            </h1>
            <span className="bg-white w-1/4 h-1 mr-5"></span>
          </div>

          <div className="flex flex-row justify-between mr-2 ml-2 bg-slate-100">
            <p className="text-black ml-5">Polichinelo</p>
            <p className="text-black mr-5">20 Reps.</p>
          </div>

          <div className="flex flex-row justify-between mr-2 ml-2 bg-slate-100">
            <p className="text-black ml-5">Polichinelo</p>
            <p className="text-black mr-5">20 Reps.</p>
          </div>

          <hr className="h-1 mt-4" />

          <div>
            <div className="flex flex-row justify-between">
              <p className="ml-2">Flexão Explosiva Inclinada</p>
              <div>
                <label className="mr-3" htmlFor="level">
                  Dificuldade:
                </label>
                <select
                  name="level"
                  id="level"
                  className={`w-10 ${corDificuldade}`}
                  value={dificuldade}
                  onChange={handleDificuldade}
                >
                  <option value="1" className="w-2 h-2">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              {dificuldade === "1" ? (
                <p className="ml-2 mr-5">Quadril</p>
              ) : dificuldade === "2" ? (
                <p className="ml-2 mr-5">Coxa</p>
              ) : dificuldade === "3" ? (
                <p className="ml-2 mr-5">Joelho</p>
              ) : null}

              <div>
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
              </div>

              <button className="">▶️</button>
            </div>

            <hr className="h-1 mt-4" />

            <div className="flex flex-row justify-between">
              <p className="ml-2">Levitation Crunches</p>
              <div>
                <label className="mr-3" htmlFor="level">
                  Dificuldade:
                </label>
                <select
                  name="level"
                  id="level"
                  className={`w-10 ${corDificuldade}`}
                  value={dificuldade}
                  onChange={handleDificuldade}
                >
                  <option value="1" className="w-2 h-2">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              {dificuldade === "1" ? (
                <p className="ml-2 mr-5">10 Reps</p>
              ) : dificuldade === "2" ? (
                <p className="ml-2 mr-5">15 Reps</p>
              ) : dificuldade === "3" ? (
                <p className="ml-2 mr-5">20 Reps</p>
              ) : null}

              <div>
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
                <input
                  className="w-10 mr-1 rounded-md text-black"
                  type="text"
                />
              </div>

              <button className="">▶️</button>
            </div>

            <hr className="h-1 mt-4" />

            <div className="flex flex-row justify-center items-end mb-2 mt-3">
              <button className="bg-green-500 pl-10 pr-10 pt-2 pb-2 rounded-lg self-center">
                Salvar
              </button>
              <p className="text-xs absolute right-8">{dataAtual}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
