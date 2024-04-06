import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./components/Counter";

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

  // You may use let variable inside a react functional component
  // But an update to a let variable will not trigger a re-render
  // Our counters
  const [guestCount, setGuestCount] = useState(0);
  const [managerCount, setManagerCount] = useState(1);
  const [staffCount, setStaffCount] = useState(1);

  const [isMoreStaffNeeded, setIsMoreStaffNeeded] = useState(false);
  const [isMoreManagerNeeded, setIsMoreManagerNeeded] = useState(false);
  const [isMarketOpen, setIsMarketOpen] = useState(true);

  useEffect(() => {
    // Check if we need more staff
    if (guestCount > staffCount * maxGuestsPerStaff) {
      setIsMoreStaffNeeded(true);
    } else {
      setIsMoreStaffNeeded(false);
    }
  }, [guestCount, staffCount]);

  useEffect(() => {
    if (staffCount > managerCount * maxStaffsPerManager) {
      setIsMoreManagerNeeded(true);
    } else {
      setIsMoreManagerNeeded(false);
    }
  }, [staffCount, managerCount]);

  useEffect(() => {
    if (isMoreStaffNeeded || isMoreManagerNeeded) {
      setIsMarketOpen(false);
    } else {
      setIsMarketOpen(true);
    }
  }, [isMoreManagerNeeded, isMoreStaffNeeded]);

  const incrementGuestCount = () => {
    setGuestCount(guestCount + 1);
  };

  const decrementGuestCount = () => {
    setGuestCount(guestCount - 1);
  };

  const incrementManagerCount = () => {
    setManagerCount(managerCount + 1);
  };

  const decrementManagerCount = () => {
    setManagerCount(managerCount - 1);
  };

  const incrementStaffCount = () => {
    setStaffCount(staffCount + 1);
  };

  const decrementStaffCount = () => {
    setStaffCount(staffCount - 1);
  };

  return (
    <div className="App">
      <div className="Control">
        {/* Manager Component */}
        <div>
          <h2>Managers: {managerCount}</h2>
          <div>
            <button onClick={incrementManagerCount}>Increment</button>
            <button onClick={decrementManagerCount}>Decrement</button>
          </div>
        </div>
        {/* Staff Component */}
        <div>
          <h2>Staffs: {staffCount}</h2>
          <div>
            <button onClick={incrementStaffCount}>Increment</button>
            <button onClick={decrementStaffCount}>Decrement</button>
          </div>
        </div>
        {/* Guest Component */}
        <div>
          <h2>Guests: {guestCount}</h2>
          <div>
            <button onClick={incrementGuestCount}>Increment</button>
            <button onClick={decrementGuestCount}>Decrement</button>
          </div>
        </div>
      </div>
      <div className="Result">
        <h2>
          Market Status: <span>{isMarketOpen ? "OPEN" : "CLOSED"}</span>
        </h2>
        <h4>{isMoreStaffNeeded ? "Not enough staff" : ""}</h4>
        <h4>{isMoreManagerNeeded ? "Not enough managers" : ""}</h4>
      </div>
    </div>
  );
}

export default App;
