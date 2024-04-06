import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./component/Counter";

/**
 * React can be seen as HTML + JS + CSS(Optional) in one package
 * Inside the function we write functions that we would like to trigger when needed (e.g. onClick, page load, etc.)
 * The function returns the HTML code that we want to display
 * The HTML code is written in JSX (JavaScript XML) which is a combination of HTML and JavaScript
 *
 * A function is called a component in React
 * You can understand component as a package of HTML, CSS and JS
 * The important thing is that in react, you create components with functions
 * In previous versions of React, you would create components with classes (even Android Studio Java uses classes to create Mobile Views)
 *
 * App.js is the main component(or function) that is called when the app is loaded.
 * App.js can be seen as the main function that calls other (children) functions
 */

const maxGuestsPerStaff = 2;
const maxStaffsPerManager = 2;

function App() {
  // We are going to create a Market
  // We will create 3 counters for this tutorial (Manger, Staff, Guest)
  // Based on the counters, we will calculate whether the market is operatable or not

  // You can see that console log is called everytime we refresh the page (You can see the log in the browser console (F12))
  console.log("App is rendered");

  // Now let us use useState to create the counters
  // You can understand useState as a memory for the browser to store data (once browser refreshes, the data is gone)

  // What to do
  // 1. Implement 3 counters for Manager, Staff and Guest
  // 2. Implement a function to calculate whether the market is operatable or not
  //    The conditions are as follows:
  //    - (guestCount > staffCount * maxGuestsPerStaff) && (staffCount > managerCount * maxStaffsPerManager)
  //      => Market is not operatable
  // 3. Control the counters in the Control Part and show the result in the Result Part

  const [guestCount, setGuestCount] = useState(0);
  const [managerCount, setmangerCount] = useState(1);
  const [staffCount, setStaffCount] = useState(1);
  const [isMoreStaffNeeded, setisMoreStaffNeeded] = useState(false);
  const [isMoreManagerNeeded, setisMoreManagerNeeded] = useState(false);
  const [isMarketOpen, setisMarketOpen] = useState(true);

  useEffect(() => {
    if (guestCount > staffCount * maxGuestsPerStaff) {
      console.log("More staff needed");
      setisMoreStaffNeeded(true);
    } else {
      console.log("No need for more staff");
      setisMoreStaffNeeded(false);
    }
  }, [guestCount, staffCount]);

  useEffect(() => {
    if (staffCount > managerCount * maxStaffsPerManager) {
      console.log("More manager needed");
      setisMoreManagerNeeded(true);
    } else {
      console.log("No need for more manager");
      setisMoreManagerNeeded(false);
    }
  }, [staffCount, managerCount]);

  useEffect(() => {
    if (isMoreManagerNeeded || isMoreStaffNeeded) {
      console.log("Market is closed");
      setisMarketOpen(false);
    } else {
      console.log("Market is open");
      setisMarketOpen(true);
    }
  }, [isMoreManagerNeeded, isMoreStaffNeeded]);
  return (
    <div className="App">
      <div className="Control">
        <Counter
          name={"Managers"}
          count={managerCount}
          inCreonClick={() => {
            setmangerCount(managerCount + 1);
          }}
          deCreonClick={() => {
            setmangerCount(managerCount - 1);
          }}
        />
        <Counter
          name={"Staffs"}
          count={staffCount}
          inCreonClick={() => {
            setStaffCount(staffCount + 1);
          }}
          deCreonClick={() => {
            setStaffCount(staffCount - 1);
          }}
        />
        <Counter
          name={"Guests"}
          count={guestCount}
          inCreonClick={() => {
            setGuestCount(guestCount + 1);
          }}
          deCreonClick={() => {
            setGuestCount(guestCount - 1);
          }}
        />
      </div>
      <div className="Result">
        <h2>
          {/* You can use ternary operator to dynamically render div content */}
          Market Status: <span>{isMarketOpen ? "OPEN" : "CLOSED"}</span>
        </h2>
        <h4>{isMoreStaffNeeded ? "Not enough staff" : ""}</h4>
        <h4>{isMoreManagerNeeded ? "Not enough managers" : ""}</h4>
      </div>
    </div>
  );
}

export default App;
