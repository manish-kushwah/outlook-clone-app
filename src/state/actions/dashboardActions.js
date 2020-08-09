import { FETCH_EMAILS } from "../types";

const elist_url = "https://ll.bhagirathsingh.vercel.app/api/list";

export const fetchEmails = () => async (dispatch) => {
  const data = await fetch(elist_url).then((res) => res.json());

  dispatch({
    type: FETCH_EMAILS,
    payload: data,
  });
};
