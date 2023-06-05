import "../style/globals.css";
import { Attention } from "./components/Attention/pages";
import RiwayatTransaksi from "./components/RiwayatTransaksi/pages";

const data = { id: "10", harga: "2.000.000" };

const HomePage = () => {
  return (
    <>
      <div className="max-w-7xl px-4 mx-auto sm:px-6 xl:max-w-3l xl:px:0">
        <div className="flex flex-col justify-between">
          <div className="bg-range-300 mt-2">
          <Attention />
          </div>
          

          <div className="flex flex-col space-y-3 text-white bg-indigo-500 mt-3 rounded-2xl">
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="text-base">
                <h1> Ukt Berikutnya Adalah:</h1>
              </div>
              <div className="text-end ml-auto">
                {" "}
                <img src="/images/Subtract.png" alt="icon" />
              </div>
              <div className="text-3xl">
                <h2>Semester {data.id}</h2>
                <h3 className="font-semibold">Rp. {data.harga}</h3>
              </div>
              <div className=" mt-2 text-base text-end ">
                <p>
                  Wira Satya Tri Almi
                  <br />
                  D121181324
                </p>
              </div>
              <div className="text-base mt-2">Batas Pembayaran pada [date]</div>
              <div className="text-base ml-auto">
                <button className="bg-white rounded-lg py-2 px-6 text-indigo-500  ">
                  Bayar sekarang
                </button>
              </div>
            </div>
          </div>

          <div className="text-black mt-3 ml-3 text-lg">
            <RiwayatTransaksi />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
