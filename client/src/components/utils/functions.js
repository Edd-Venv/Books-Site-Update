/*import { useEffect, useCallback } from "react";
export function utils() {
    
  const apiGetRequest = useCallback((url, apikey, dispatch) => {
    useEffect(
      fetch(url).then(response => {
        dispatch({ type: "ADD" });
        console.log(response.json());
        return response.json();
      }),
      []
    );
  }, []);
}
/**Axios.get(url).then(response => {
      //console.log(response.data.data.titles.slice(0, 2));
      this.setState({
        data: response.data.data.titles.slice(0, 4),
        isLoaded: true
      });
    });
  */
