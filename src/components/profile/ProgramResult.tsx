import React, { useEffect } from "react";
import jsPDF from "jspdf";
import { saveAs } from "file-saver";

interface Props {
  selectedCP: any;
  name: string;
  programResultView: boolean;
  setProgramResultView: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProgramResult(props: Props) {
  const handleDownloadPDF = () => {
    const doc = new jsPDF("landscape", "mm", "a4");

    // Load Montserrat font
    doc.addFont(
      "https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhzg.ttf",
      "Montserrat",
      "normal"
    );

    const backgroundImageUrl = "/ss.jpg"; // Update the path to your background image

    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = doc.internal.pageSize.getHeight();

    fetch(backgroundImageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const imgData = URL.createObjectURL(blob);

        // Add the background image
        doc.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

        // Set the font to Montserrat
        doc.setFont("Montserrat");

        // Add text and other content on top of the background image
        doc.setFontSize(15);
        doc.setTextColor(0, 0, 0); // Set text color to black

        const capitalizedGrade = props.selectedCP.grade
          ? props.selectedCP.grade
          : "";
        const capitalizedPosition =
          props.selectedCP.position == 1
            ? "FIRST"
            : props.selectedCP.position == 2
            ? "SECOND"
            : props.selectedCP.position == 3
            ? "THIRD"
            : "";

        doc.text(
          `This is to certify that Mr. ${props.name} has been awarded`,
          pdfWidth / 2,
          137,
          { align: "center" }
        );

        if (props.selectedCP.position && props.selectedCP.grade) {
          doc.text(
            `the ${capitalizedPosition} with ${capitalizedGrade} grade in ${props.selectedCP.engName} in`,
            pdfWidth / 2,
            146,
            { align: "center" }
          );
        } else if (props.selectedCP.position) {
          doc.text(
            `the ${capitalizedPosition} prize without any grade in ${props.selectedCP.engName} in`,
            pdfWidth / 2,
            146,
            { align: "center" }
          );
        } else if (props.selectedCP.grade) {
          doc.text(
            `${capitalizedGrade} grade without any position in ${props.selectedCP.engName} in`,
            pdfWidth / 2,
            146,
            { align: "center" }
          );
        }

        doc.text(
          `Jamia Dars Fest 2023 - '24 conducted by Jamia Nooriyya Arabiyya`,
          pdfWidth / 2,
          155,
          { align: "center" }
        );

        const pdfBlob = doc.output("blob");
        saveAs(pdfBlob, `${props.selectedCP.engName} - ${props.name}.pdf`);
      });
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center  items-center  ${
        props.programResultView ? "block" : "hidden"
      } `}
    >
      <div className="bg-white p-3 rounded-xl flex flex-col items-center min-w-[400px]  max-w-[400px] max-h-[95vh] text-center ">
        <p className="font-semibold text-2xl my-2">{props.selectedCP?.name}</p>
        {props?.selectedCP && props.selectedCP.publish == 1 ? (
          <>
            <p>
              Position :{" "}
              <span className="font-bold">
                {props?.selectedCP?.position == 1
                  ? "First"
                  : props?.selectedCP?.position == 2
                  ? "Second"
                  : props?.selectedCP?.position == 3
                  ? "Third"
                  : "NIL"}
              </span>
            </p>
            <p>
              Grade :{" "}
              <span className="font-bold">
                {props?.selectedCP?.grade || "NIL"}
              </span>
            </p>
            <p>
              Points :{" "}
              <span className="font-bold">
                {props?.selectedCP?.pts || "NIL"}
              </span>
            </p>
            <button onClick={handleDownloadPDF} className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-2 my-2">Download Certificate</button>
          </>
        ) : (props.selectedCP?.pts as number) == 0 ? (
          <>
            <p>
              {" "}
              Position : <span className="font-bold">NIL</span>{" "}
            </p>
            <p>
              Grade : <span className="font-bold">NIL</span>
            </p>
            <p>
              Points : <span className="font-bold">NIL</span>
            </p>
          </>
        ) : (
          <p>Result Not Published</p>
        )}
        <button
          className="bg-primary text-white rounded-lg p-2"
          onClick={() => {
            props.setProgramResultView(false);
            // console.log(props.programResultView);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
