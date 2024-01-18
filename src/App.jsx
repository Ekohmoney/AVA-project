import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  ConnectWallet,
  useContract,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";
import { ContractAbi, ContractAddress } from "./constants";

function App() {
  const [hash, setHash] = useState(null);
  const [tx, setTx] = useState(null);
  const [num, setNum] = useState(null);
  const [str, setStr] = useState(null);

  const { contract } = useContract(ContractAddress, ContractAbi);

  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "setKeyHash"
  );

  const { data } = useContractRead(contract, "viewHash");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const receipt = await mutateAsync({ args: [Number(num), str] });
    if (receipt) {
      setTx(data);
    }
  };

  useEffect(() => {
    setHash(data);
  }, [tx]);

  useEffect(() => {}, [hash]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">HASHGenerator</a>
        </div>
        <div className="flex-none">
          <ConnectWallet />
        </div>
      </div>
      <div className="w-full h-[90vh] flex items-center justify-center">
        <div className="w-96">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <button className="bg-yellow-500 hover:bg-yellow-700 p-4 text-xl text-white font-bold rounded-l-lg">
                Integer
              </button>
              <input
                type="text"
                placeholder="Enter Integer"
                className="px-4 dark:bg-white placeholder:text-slate-400 text-black w-full"
                onChange={(e) => setNum(e.target.value)}
              />
            </div>
            <div className="flex mt-4">
              <button className="bg-yellow-500 hover:bg-yellow-700 p-4 text-xl text-white font-bold rounded-l-lg">
                String
              </button>
              <input
                type="text"
                placeholder="Enter String"
                className="px-4 dark:bg-white placeholder:text-slate-400 text-black w-full"
                onChange={(e) => setStr(e.target.value)}
              />
            </div>
            {hash && (
              <div className="w-fit border rounded-lg p-4 border-slate-600 my-8">
                <p className="">
                  <span className="font-bold text-lg">Hash:</span> {hash}
                </p>
              </div>
            )}
            {isLoading ? (
              <div className="w-fit mx-auto mt-8">
                <span
                  className="loading loading-bars loading-lg"
                  style={{ backgroundColor: "yellow" }}
                ></span>
              </div>
            ) : (
              <>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 mt-4 p-4 text-xl text-white font-bold rounded-lg w-full"
                  type="submit"
                >
                  Convert
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
