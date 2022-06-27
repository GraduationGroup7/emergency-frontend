import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { get_agent_emergency_details } from "../../API/API";

export default function EmergencyAssignment() {
  const [emergencyDetails, setEmergencyDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let res = await get_agent_emergency_details();
        setEmergencyDetails(res.data.data);
        console.log(res.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const isImage = (url) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  };
  const isVideo = (url) => {
    return /\.(mp4|mov|wmv|avi|mkv|webm|flv)$/.test(url);
  };
  const isAudio = (url) => {
    return /\.(m4a|flac|mp3|wav|wma|aac)$/.test(url);
  };

  // let allFiles = emergencyDetails.files.map((files, index) => {
  //   // format the files here!!!
  // });
  // let notesVeiw = emergencyDetails.notes.map((note, index) => {
  //   return (
  //     <>
  //       <div key={index}>{note}</div>
  //     </>
  //   );
  // });
  return (
    <>
      {emergencyDetails ? (
        <div className="emergency__assignment__container">
          <div className="text-center mb-4">
            <h1
              className="general__mobile__title mx-3"
              style={{ "font-size": "1.35rem" }}
            >
              Current Assignment
            </h1>
          </div>
          <div className="media__area__container mb-3">
            {emergencyDetails &&
            emergencyDetails.files &&
            emergencyDetails.files.length > 0
              ? emergencyDetails.files.map((file, index) => {
                  if (isImage(file.url)) {
                    return (
                      <div
                        className="media__content__holder d-flex justify-content-center"
                        key={index}
                      >
                        <img
                          src={process.env.REACT_APP_API_URL + "/" + file.url}
                          className="h-100"
                        ></img>
                      </div>
                    );
                  } else if (isVideo(file.url)) {
                    return (
                      <div
                        className="media__content__holder d-flex justify-content-center"
                        key={index}
                      >
                        <video
                          autoPlay={true}
                          loop={true}
                          controls={true}
                          src={process.env.REACT_APP_API_URL + "/" + file.url}
                          className="h-100"
                        ></video>
                      </div>
                    );
                  } else if (isAudio(file.url)) {
                    return (
                      <div
                        className="media__content__holder d-flex flex-column align-items-center pb-2 justify-content-between"
                        key={index}
                      >
                        <div></div>
                        <i
                          style={{ fontSize: "4rem" }}
                          className="bi bi-volume-up-fill"
                        ></i>
                        <audio
                          autoPlay={true}
                          loop={true}
                          controls={true}
                          src={process.env.REACT_APP_API_URL + "/" + file.url}
                        ></audio>
                      </div>
                    );
                  }
                })
              : null}{" "}
          </div>
          {emergencyDetails ? (
            <div>
              <div className="emergency__type__label mb-4">
                {emergencyDetails.emergency_type}
              </div>
              <div className="mb-3 d-flex align-items-start">
                <div className="emergency__info__icon">
                  <i className="bi bi-file-earmark-text-fill"></i>
                </div>
                <div>
                  <div className="emergency__info__label">Description</div>
                  <div> {emergencyDetails.description}</div>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-start">
                <div className="emergency__info__icon">
                  <i className="bi bi-person-fill"></i>
                </div>
                <div>
                  <div className="emergency__info__label">Reported By</div>
                  <div> {emergencyDetails.reported_by}</div>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-start">
                <div className="emergency__info__icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <div className="emergency__info__label">Phone Number</div>
                  <div> {emergencyDetails.phone_number}</div>
                </div>
              </div>

              <div className="mb-3 d-none align-items-start">
                <div className="emergency__info__icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <div className="emergency__info__label">Event Location</div>
                  <div>
                    {emergencyDetails.latitude} lat -{" "}
                    {emergencyDetails.longitude} long
                  </div>
                </div>
              </div>

              <div className="mb-3 d-flex align-items-start">
                <div className="emergency__info__icon">
                  <i className="bi bi-stickies-fill"></i>
                </div>
                <div>
                  <div className="emergency__info__label">Notes</div>
                  <div>
                    {emergencyDetails.notes && emergencyDetails.notes.length > 0
                      ? emergencyDetails.notes.map((note, index) => (
                          <div key={index}>{note.note}</div>
                        ))
                      : "-"}
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center text-center">
                <a
                  className="emergency__map__link"
                  href={`https://maps.google.com/?q=${emergencyDetails.latitude},${emergencyDetails.longitude}`}
                  target="_blank"
                >
                  Go to Map
                </a>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="emergency__assignment__container text-center d-flex flex-column justify-content-center mx-4">
          <img
            className="unassigned__agent__image"
            src="https://img.freepik.com/free-vector/reading-book-concept-illustration_114360-8612.jpg?t=st=1656281106~exp=1656281706~hmac=836798acd3586ee2d9979723a6fbbb06365000184a6f442515eda2b13a888534&w=1380"
            alt=""
          />
          <h1
            className="general__mobile__title"
            style={{ "font-size": "1.25rem" }}
          >
            Agent Not Assigned
          </h1>
          <p className="general__mobile__subtitle">
            Agent is currently not assigned to do any task
          </p>
        </div>
      )}
    </>
  );
}
