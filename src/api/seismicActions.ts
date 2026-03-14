import axios, { AxiosError } from "axios";

const SEISMIC_API_URL = "https://65ca483b3b05d29307e01640.mockapi.io/api/seismic";

export interface SeismicData {
  id: string;
  magnitute: number;
  latitude: string;
  longitude: string;
}

export const getSeismicData = async (city: string): Promise<SeismicData> => {
  return new Promise<SeismicData>((resolve, reject) => {
    axios
      .get(`${SEISMIC_API_URL}/${city}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === 404) {
            reject("City not found");
          } else {
            reject(axiosError.message);
          }
        } else {
          reject("An unknown error occurred");
        }
      });
  });
};