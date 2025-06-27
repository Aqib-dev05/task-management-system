import React, { useState } from "react";
import Button from "../../Button";

function ActiveTask() {
  const [accepted, setAccepted] = useState(false);

  function handleAccept() {
    setAccepted(true);
  }

  return (
    <div className="bg-green-300 relative w-[360px] h-[380px] xl:w-[390px] flex p-5 rounded-2xl max-md:w-full">
      <div className="text-lg absolute top-5 right-5 font-bold">2024-10-17</div>
     
      <div className="flex flex-col pt-16 gap-5">
        <h2 className="font-bold text-2xl">Do 50 Pushups</h2>
        <p className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        {!accepted ? (
          <div className="mt-8">
            <Button
              onclick={handleAccept}
              text={"Accept Task"}
              varient={"blueVar"}
            />
          </div>
        ) : (
         <div className="flex gap-5 mt-8 w-full">
            <Button  text={"Completed"} classname="rounded-lg " varient={"inVar"}/>
            <Button  text={"Mark as failed"} varient={"outVar"}/>
         </div>
        )}
      </div>
    </div>
  );
}

export default ActiveTask;
