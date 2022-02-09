import React from "react";
import CountUp from "react-countup";

// https://www.npmjs.com/package/react-countup

function Countups() {
  return (
    <div>
      <main>
        CountUp with value 1000 duration 2 seconds <br />
        <h1>
          <CountUp end={1000} duration={2} />
        </h1>
      </main>

      <main>
        CountUp with value from 500 to 1000 duration 2 seconds <br />
        <h1>
          <CountUp start={500} end={1000} duration={2} />
        </h1>
      </main>

      <main>
        CountUp with value from 500 to 1000 duration 2 seconds with prefix $ ,4 decimals  <br />
        <h1>
          <CountUp
            start={500}
            end={1000}
            duration={2}
            onEnd={() => alert("Ended! 👏")}
            prefix="$"
            decimals={4}
          />
        </h1>
      </main>
    </div>
  );
}

export default Countups;
