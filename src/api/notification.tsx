import axios from "axios";

export const pushNotification = async (data: {
  title: string;
  content: string;
}) => {
  const { status } = await axios.post(
    `https://onesignal.com/api/v1/notifications`,
    {
      app_id: "52a7f9f1-08fa-4050-98a4-0522ed18eada",
      included_segments: ["Subscribed Users"],
      headings: { en: data.title },
      contents: { en: data.content },
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic ZGM3YWY1NTQtNmVlZi00OTkzLWEyODYtMjRhZGU4MzgxOTcz",
      },
    }
  );

  console.log("status", status);

  return data;
};
