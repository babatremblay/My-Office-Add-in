import React, { useEffect, useState } from "react";
import { fetchAttachments } from "../taskpane";

const App = () => {
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    // Fetch attachments when the component loads
    const loadAttachments = async () => {
      const emailAttachments = await fetchAttachments();
      setAttachments(emailAttachments);
    };

    loadAttachments();
  }, []);

  return (
    <div>
      <h1>Attachments</h1>
      <select>
        {attachments.map((attachment, index) => (
          <option key={index} value={attachment.name}>
            {attachment.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
