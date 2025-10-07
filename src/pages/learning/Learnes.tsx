
{/* Learn ES6 Function */ }
function simpleFunction(x: number, y: number) {
  return x + y;
}
const arrowFunction = (x: number, y: number) => x + y;
const message = msg => `My message is "${msg}"`;


{/* Learn ES6 Class */ }
class dateTime {
  d: Date;
  constructor() {
    this.d = new Date();
  }
  getDate() {
    return this.d.toLocaleDateString();
  }
  getTime() {
    return this.d.toLocaleTimeString();
  }
}
const DT = new dateTime();


{/* Learn ES6 Array map */ }
const countries = ["Bangladesh", "India", "Pakistan", "Germany", "France", "Italy", "Spain", "USA", "Canada", "Mexico"];


{/* Learn ES6 firstCountry Arrays */ }
// const firstCountry = countries[0];
// const secondCountry = countries[1];
// const restCountries = countries.slice(2);
const [firstCountry, secondCountry, ...restCountries] = countries;


{/* Learn ES6 Spread Operator */ }
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
const extendedArr = [0, ...arr1, 7]; // [0, 1, 2, 3, 7]


export const Learnes = () => {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold">Learn ES6 to Latest</h1>
        <p className="mt-4 text-lg text-gray-600">
          Here I am practicing ES6 to latest JavaScript features with simple examples. Feel free to explore the code.
        </p>
      </section>

      {/* Learn ES6 Function */}
      <h2 className="py-4 text-2xl font-bold">Learn ES6 Function</h2>
      <p className="py-4">Simple Add Function Output: {simpleFunction(2, 3)}</p>
      <p className="py-4">Arrow Add Function Output: {arrowFunction(20, 30)}</p>
      <p className="py-4">Message Function Output: {message("Hello! Hands up!")}</p>
      <hr />

      {/* Learn ES6 Class */}
      <h2 className="py-4 text-2xl font-bold">Learn ES6 Class</h2>
      <p className="py-4">Current Date: {DT.getDate()}</p>
      <p className="py-4">Current Time: {DT.getTime()}</p>

      {/* Learn ES6 Array map */}
      <h2 className="py-4 text-2xl font-bold">Learn ES6 Array map</h2>
      <b className="pb-4 inline-block">Country List</b>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {countries.map((country, index) => (
          <li key={index} className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 hover:bg-orange-500">{index + 1}. {country}</li>
        ))}
      </ul>

      <b className="py-4 inline-block">Distructuring Array Output</b>
      <p className="py-2">First Country: {firstCountry}</p>
      <p className="py-2">Second Country: {secondCountry}</p>
      <p className="py-2">Rest of the Countries: {restCountries.join(", ")}</p>


      {/* Learn ES6 Spread Operator */}
      <h2 className="py-4 text-2xl font-bold">Learn ES6 Spread Operator (...)</h2>
      <p className="py-2">First Array: {arr1.join(", ")}</p>
      <p className="py-2">Second Array: {arr2.join(", ")}</p>
      <p className="py-2">Combined Array: {combinedArr.join(", ")}</p>
      <p className="py-2">Extended Array: {extendedArr.join(", ")}</p>



      <div className="text-2xl text-blue-600 py-4"> **Also practice Modules, Ternary Operator, Template String**</div>


    </>
  )
}