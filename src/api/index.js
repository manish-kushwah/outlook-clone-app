const elist_url = "https://ll.bhagirathsingh.vercel.app/api/list";
const ebody_url =
  "https://ll.bhagirathsingh.vercel.app/api/email?id=%3Cemail-item-id";

export const getEmailList = async () => {
  try {
    const response = await fetch(elist_url, {
      method: "GET",
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
