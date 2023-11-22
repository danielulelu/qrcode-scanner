import qrcode from "../img/qr-code.png";

const Heroes = () => {
  return (
    <main>
      <div className="flex flex-col-reverse align-center justify-center m-auto p-10 md:max-w-4xl md:flex-row">
        <div className="w-full md:w-2/3 mr-24">
          <h1 className="text-3xl font-bold mb-5 md:text-4xl">
            QR Code Generator
          </h1>
          <p className="mb-4">
            QR Codes allow smartphone users to access your website simply and
            quickly.
          </p>
          <p>
            Enter your URL below to generate a QR Code and download the image.
          </p>
          <form id="generate" className="mt-4">
            <input
              id="url"
              type="url"
              placeholder="Enter a URL"
              className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none mb-5"
            />
            <select
              id="size"
              className="w-full border-2 border-gray-200 rounded p-3 text-gray-dark mr-2 focus:outline-none"
            >
                <option value="100">100x100</option>
                <option value="200">200x200</option>
                <option value="300" selected>300x300</option>
                <option value="400">400x400</option>
                <option value="500">500x500</option>
                <option value="600">600x600</option>
                <option value="700">700x700</option>
            </select>

            <button className="bg-gray-600 rounded w-full text-white px-4 py-3 mt-4 hover:bg-black" type="submit">Generate QR Code</button>
          </form>
        </div>
        <div className="w-full md:1-1/3 self-center">
          <img
            src={qrcode}
            alt=""
            className="w-1/2 m-auto md:w-full mb-10 border"
          />
        </div>
      </div>
    </main>
  );
};
export default Heroes;
