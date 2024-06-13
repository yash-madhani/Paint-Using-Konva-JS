import React, { useRef, useState } from "react";
import { TbRectangle } from "react-icons/tb";
import { IoMdDownload } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { GiArrowCursor } from "react-icons/gi";
import { FaRegCircle } from "react-icons/fa6";
import {
  Arrow,
  Circle,
  Layer,
  Line,
  Rect,
  Stage,
  Transformer,
} from "react-konva";
import { ACTIONS } from "./constants";

function App() {

  const stageRef = useRef();
  const [action,setAction] = useState(ACTIONS.SELECT);
  const [fillColor, setFillColor] = useState("#ff0000");
  const strokeColor = "#000000";

  function onPointerDown(e) {
    console.log(e.target);
  }

  function onPointerUp(e) {
    console.log(e.target);
  }

  function onPointerMove(e) {
    console.log(e.target);
  }


  function handleExport() {
    const uri = stageRef.current.toDataURL();
    var link = document.createElement("a");
    link.download = "image.png";
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div >
      <div className="relative w-full h-screen overflow-hidden">
        {/* Controls */}
        <div className="absolute top-0 z-10 w-full py-2 ">
          <div className="flex justify-center items-center gap-3 py-2 px-3 w-fit mx-auto border shadow-lg rounded-lg" >
            <button className={
                action === ACTIONS.RECTANGLE
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.RECTANGLE)}
              >
              <TbRectangle size={"2rem"} />
            </button>
            <button className={
                action === ACTIONS.CIRCLE
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.CIRCLE)}
              
              >
              <FaRegCircle size={"2rem"}  />
            </button>
            <button className={
                action === ACTIONS.SCRIBBLE
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.SCRIBBLE)}

              >
              <LuPencil size={"2rem"}  />
            </button>
            <button className={
                action === ACTIONS.ARROW
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }>
              <GiArrowCursor size={"2rem"} 
              onClick={() => setAction(ACTIONS.ARROW)}
              />
            </button>
            <button onClick={handleExport} className="p-1 hover:bg-violet-100 rounded">
              <IoMdDownload size={"2rem"}  />
            </button>
            <button className={
                action === ACTIONS.SELECT
                  ? "bg-violet-300 p-1 rounded"
                  : "p-1 hover:bg-violet-100 rounded"
              }
              onClick={() => setAction(ACTIONS.SELECT)}
              >
              <FaLongArrowAltRight size={"2rem"}  />
            </button>
            <button>
              <input
                className="w-6 h-6"
                type="color"
                value={fillColor}
                onChange={(e) => setFillColor(e.target.value)}
              />
            </button>
          </div>
        </div>
        {/* Canvas */}
        <Stage 
        ref={stageRef} 
        width={window.innerWidth} 
        height={window.innerHeight}
        onPointerUp={onPointerUp}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        >
          <Layer>
              <Rect 
              x={0}
              y={0}
              width={window.innerWidth}
              height={window.innerHeight}
              fill={"#ffffff"}
              />
          </Layer>

        </Stage>
      </div>
    </div>
  );
}

export default App;