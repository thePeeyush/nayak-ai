export default function Profile() {
  return (
    <div className=" max-w-md bg-slate-400 m-4 p-4 rounded-lg">
        <div className="text-2xl font-semibold flex gap-6 flex-col items-center">
            <img  className=" rounded-full overflow-hidden w-32" src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.1.303434999.1694803402&semt=sph" alt="userimage"  />
            <h2>Aarush Sharma</h2>
            <h3 className=" text-gray-800 text-lg">ADDRESS : khandwa road , Limbodi ,48001 , Indore (M.P.)</h3>
        </div>
    </div>
  );
}