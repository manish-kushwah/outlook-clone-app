const elist_url = "https://ll.bhagirathsingh.vercel.app/api/list";

export const getEmailList = async () => {
  try {
    const response = await fetch(elist_url);

    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
