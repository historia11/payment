export default function RiwayatTransaksi() {
  return (
    <>
      <div>
        <h1>Riwayat Transaksi</h1>
        <div className="">
          <ul className="flex items-center text-sm space-x-10 text-black">
            <li>
              <a href="#">Semua</a>
            </li>
            <li>
              <a href="#">Menunggu</a>
            </li>
            <li>
              <a href="#">Berhasil</a>
            </li>
            <li>
              <a href="#">Expired</a>
            </li>
            <div className="grid justify-items-end ">
              <div className=" w-[400px] border rounded ">
                <input
                  className="w-full outline-0 py-2 px-5 text-xs"
                  type="text"
                  placeholder="Search ..."
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
